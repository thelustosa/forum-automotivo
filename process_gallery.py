import os
import glob
import json
import pandas as pd
from PIL import Image

def process_cars():
    # Caminhos
    excel_path = 'DADOS.xlsx'
    pastas_path = 'public/pastas_r34'
    thumbs_dir = 'public/chassis_thumbs'
    json_path = 'public/cars.json'

    # Criar diretorio para os thumbnails se não existir
    os.makedirs(thumbs_dir, exist_ok=True)

    # Ler a planilha
    try:
        df = pd.read_excel(excel_path)
        # Preencher NaNs com string vazia
        df = df.fillna('')
    except Exception as e:
        print(f"Erro ao ler a planilha: {e}")
        return

    # Mapear chassi para seus dados
    # Assumindo que a coluna 'Chassi' é o ID
    car_data = {}
    for index, row in df.iterrows():
        chassi = str(row.get('Chassi', '')).strip()
        if chassi:
            options = []
            for i in range(1, 16):
                opt_val = str(row.get(f'OPTION{i}-OBS', '')).strip()
                if opt_val and opt_val.lower() != 'nan':
                    options.append(opt_val)
                    
            car_data[chassi] = {
                'chassi': chassi,
                'ano': str(row.get('Ano', '')).strip(),
                'modelo': str(row.get('Modelo', '')).strip(),
                'cor': str(row.get('Cor', '')).strip(),
                'codigo_cor': str(row.get('codigo_cor', '')).strip(),
                'producao': str(row.get('Produção', '')).strip(),
                'versao': str(row.get('Versão', '')).strip(),
                'options': options
            }

    processed_cars = []

    # Iterar pelas pastas
    if os.path.exists(pastas_path):
        folders = [f for f in os.listdir(pastas_path) if os.path.isdir(os.path.join(pastas_path, f))]
        
        for folder in folders:
            # A pasta pode se chamar "BNR34002052", então o chassi é o nome da pasta
            chassi_id = folder.strip()
            
            # Checar se temos os dados na planilha
            if chassi_id in car_data:
                folder_path = os.path.join(pastas_path, folder)
                
                # Pegar todas as imagens validas
                images = glob.glob(os.path.join(folder_path, '*.jpg')) + \
                         glob.glob(os.path.join(folder_path, '*.jpeg')) + \
                         glob.glob(os.path.join(folder_path, '*.png'))
                
                # Prioridade MAXIMA: Se o usuário renomeou o arquivo contendo '01'
                manual_cover = None
                for img_path in images:
                    fname = os.path.basename(img_path).lower()
                    if fname.startswith('01.') or fname.startswith('01-') or fname == '01.jpg' or fname == '01.jpeg' or fname == '01.png':
                        manual_cover = img_path
                        break
                        
                # Sempre definir good_images filtrando bad_keywords
                bad_keywords = ['carvx', 'screenshot', 'screen-shot', 'bill', 'lading', 'certificate', 'export', 'whatsapp', 'auction', 'inspection', 'history', 'report', 'remote', 'tv', 'manual']
                
                good_images = []
                for img_path in images:
                    filename = os.path.basename(img_path).lower()
                    if not any(kw in filename for kw in bad_keywords):
                        good_images.append(img_path)
                
                if not good_images:
                    good_images = images
                
                # Ordenar pelo tamanho do arquivo (maior = mais detalhes/exterior) para achar o melhor
                good_images.sort(key=lambda x: os.path.getsize(x), reverse=True)

                if manual_cover:
                    first_image = manual_cover
                else:
                    first_image = good_images[0]
                
                # Nome do arquivo de thumbnail
                thumb_filename = f"{chassi_id}.jpg"
                thumb_filepath = os.path.join(thumbs_dir, thumb_filename)
                
                # Redimensionar e comprimir
                try:
                    with Image.open(first_image) as img:
                        # Converter para RGB para salvar em JPG
                        if img.mode in ("RGBA", "P"):
                            img = img.convert("RGB")
                        
                        # Redimensionar para tamanho max 800x600 mantendo aspecto
                        img.thumbnail((800, 600), Image.Resampling.LANCZOS)
                        
                        # Salvar com compressao
                        img.save(thumb_filepath, format="JPEG", quality=80, optimize=True)
                        print(f"✅ Processado: {chassi_id}")
                        
                        # Adicionar dados na lista final
                        car_info = car_data[chassi_id]
                        car_info['thumb'] = f"/chassis_thumbs/{thumb_filename}"
                        
                        web_images = []
                        if manual_cover and manual_cover not in good_images:
                            web_images.append(manual_cover.replace('public', '', 1).replace('\\', '/'))
                        for img_path in good_images:
                            web_path = img_path.replace('public', '', 1).replace('\\', '/')
                            if web_path not in web_images:
                                web_images.append(web_path)
                                
                        car_info['images'] = web_images
                        processed_cars.append(car_info)
                        
                except Exception as e:
                    print(f"❌ Erro ao processar {first_image}: {e}")

    # Ordenar a lista final pelo chassi do menor para o maior
    processed_cars.sort(key=lambda x: x['chassi'])

    # Salvar o json
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(processed_cars, f, ensure_ascii=False, indent=2)
        
    print(f"🎉 Finalizado! {len(processed_cars)} carros processados e json gerado em {json_path}")

if __name__ == '__main__':
    process_cars()
