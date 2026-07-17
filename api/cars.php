<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/db.php';

$pdo = get_db();

// Se veio um chassi específico, retorna todos os detalhes (imagens + opções)
if (!empty($_GET['chassi'])) {
    $chassi = trim($_GET['chassi']);

    $stmt = $pdo->prepare("SELECT * FROM cars WHERE chassi = ?");
    $stmt->execute([$chassi]);
    $car = $stmt->fetch();

    if (!$car) {
        http_response_code(404);
        echo json_encode(['error' => 'Chassi não encontrado']);
        exit;
    }

    // Buscar imagens ordenadas
    $stmt = $pdo->prepare("SELECT path FROM car_images WHERE car_id = ? ORDER BY ordem ASC");
    $stmt->execute([$car['id']]);
    $car['images'] = array_column($stmt->fetchAll(), 'path');

    // Buscar opções ordenadas
    $stmt = $pdo->prepare("SELECT descricao FROM car_options WHERE car_id = ? ORDER BY ordem ASC");
    $stmt->execute([$car['id']]);
    $car['options'] = array_column($stmt->fetchAll(), 'descricao');

    unset($car['id']); // não expor o ID interno
    echo json_encode($car);
    exit;
}

// Busca com filtro parcial de chassi (para o campo de pesquisa)
$search = trim($_GET['search'] ?? '');
$page   = max(1, (int)($_GET['page'] ?? 1));
$limit  = max(1, min(100, (int)($_GET['limit'] ?? 30)));
$offset = ($page - 1) * $limit;

if ($search !== '') {
    $like = '%' . $search . '%';
    $total_stmt = $pdo->prepare("SELECT COUNT(*) FROM cars WHERE chassi LIKE ?");
    $total_stmt->execute([$like]);
    $data_stmt = $pdo->prepare(
        "SELECT chassi, ano, modelo, cor, codigo_cor, versao, thumb
         FROM cars WHERE chassi LIKE ? ORDER BY chassi ASC LIMIT ? OFFSET ?"
    );
    $data_stmt->execute([$like, $limit, $offset]);
} else {
    $total_stmt = $pdo->query("SELECT COUNT(*) FROM cars");
    $data_stmt = $pdo->prepare(
        "SELECT chassi, ano, modelo, cor, codigo_cor, versao, thumb
         FROM cars ORDER BY chassi ASC LIMIT ? OFFSET ?"
    );
    $data_stmt->execute([$limit, $offset]);
}

$total = (int)$total_stmt->fetchColumn();
$cars  = $data_stmt->fetchAll();

echo json_encode([
    'total'      => $total,
    'page'       => $page,
    'limit'      => $limit,
    'total_pages'=> (int)ceil($total / $limit),
    'data'       => $cars
]);
