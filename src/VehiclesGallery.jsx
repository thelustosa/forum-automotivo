import React, { useState, useEffect } from 'react';
import './VehiclesGallery.css';
import VehicleDetail from './VehicleDetail';

const tGallery = {
  PT: {
    loading: "Carregando veículos...",
    searchPlaceholder: "Pesquisar por chassi (ex: BNR34002052 ou apenas 2052)",
    chassis: "Chassis",
    color: "Cor",
    noResults: "Nenhum veículo encontrado para o chassi",
    prev: "Anterior",
    next: "Próxima",
    page: "Página",
    of: "de"
  },
  EN: {
    loading: "Loading vehicles...",
    searchPlaceholder: "Search by chassis (e.g., BNR34002052 or 2052)",
    chassis: "Chassis",
    color: "Color",
    noResults: "No vehicles found for chassis",
    prev: "Previous",
    next: "Next",
    page: "Page",
    of: "of"
  },
  ES: {
    loading: "Cargando vehículos...",
    searchPlaceholder: "Buscar por chasis (ej: BNR34002052 o 2052)",
    chassis: "Chasis",
    color: "Color",
    noResults: "No se encontraron vehículos para el chasis",
    prev: "Anterior",
    next: "Siguiente",
    page: "Página",
    of: "de"
  },
  JA: {
    loading: "車両を読み込んでいます...",
    searchPlaceholder: "シャシーで検索 (例: BNR34002052 または 2052)",
    chassis: "シャシー",
    color: "カラー",
    noResults: "このシャシーの車両は見つかりませんでした:",
    prev: "前へ",
    next: "次へ",
    page: "ページ",
    of: "/"
  }
};

export default function VehiclesGallery({ lang = 'PT' }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedCarLoading, setSelectedCarLoading] = useState(false);
  const ITEMS_PER_PAGE = 30;

  const t = tGallery[lang] || tGallery.PT;

  const loadCars = (page, search) => {
    setLoading(true);
    const params = new URLSearchParams({
      page,
      limit: ITEMS_PER_PAGE,
      ...(search ? { search } : {}),
    });
    fetch(`/api/cars.php?${params}`)
      .then(res => res.json())
      .then(result => {
        setCars(result.data || []);
        setTotalPages(result.total_pages || 1);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar carros:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadCars(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center', color: '#a1a1aa' }}>{t.loading}</div>;
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedCarLoading) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', color: '#a1a1aa' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Carregando detalhes do veículo...</div>
        <div style={{ opacity: 0.6 }}>Isso pode levar alguns segundos dependendo da sua conexão.</div>
      </div>
    );
  }

  if (selectedCar) {
    return <VehicleDetail car={selectedCar} lang={lang} onBack={() => setSelectedCar(null)} />;
  }

  return (
    <div className="gallery-wrapper">
      <div className="gallery-container">
        
        <div className="gallery-search-container">
          <input 
            type="text" 
            placeholder={t.searchPlaceholder}
            className="gallery-search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="gallery-grid">
          {cars.map((car, index) => (
            <div 
              key={index} 
              className="car-card cursor-pointer" 
              onClick={() => {
                setSelectedCarLoading(true);
                // Busca detalhes completos antes de abrir a tela
                fetch(`/api/cars.php?chassi=${car.chassi}`)
                  .then(r => r.json())
                  .then(full => {
                    setSelectedCar(full);
                    setSelectedCarLoading(false);
                  })
                  .catch(() => {
                    setSelectedCar(car);
                    setSelectedCarLoading(false);
                  });
              }}
              style={{ cursor: 'pointer' }}
            >
              <div className="car-image-wrapper">
                <img 
                  src={car.thumb.startsWith('/') ? car.thumb : `/${car.thumb}`}
                  alt={car.chassi} 
                  loading="lazy"
                />
              </div>
              <div className="car-info">
                <div className="car-title-row">
                  <h3 className="car-title">
                    {car.ano} Nissan Skyline GT-R{car.modelo && car.modelo !== 'Base' ? ` ${car.modelo}` : ''}
                  </h3>
                </div>
                <div className="car-subtitle">
                  <div>{t.chassis}: {car.chassi}</div>
                  <div>{t.color}: {car.cor} ({car.codigo_cor})</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cars.length === 0 && !loading && (
          <div className="no-results">
            {t.noResults} "{searchTerm}"
          </div>
        )}

        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className="page-btn" 
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              {t.prev}
            </button>
            <span className="page-info">{t.page} {currentPage} {t.of} {totalPages}</span>
            <button 
              className="page-btn" 
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              {t.next}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
