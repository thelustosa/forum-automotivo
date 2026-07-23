import React, { useState, useEffect, useCallback } from 'react';
import './VehicleDetail.css';

const tDetail = {
  PT: {
    back: "← Voltar para Galeria",
    listingDetails: "Detalhes do Veículo",
    chassis: "Chassis",
    version: "Versão",
    color: "Cor",
    year: "Ano",
    production: "Nº de Produção",
    loadMore: "Carregar mais fotos",
    contactTitle: "Contato",
    contactDesc: "Tem informações sobre este veículo ou notou algum erro? Entre em contato:"
  },
  EN: {
    back: "← Back to Gallery",
    listingDetails: "Listing Details",
    chassis: "Chassis",
    version: "Version",
    color: "Color",
    year: "Year",
    production: "Production No.",
    loadMore: "Load more photos",
    contactTitle: "Contact",
    contactDesc: "Do you have info about this vehicle or noticed an error? Contact us:"
  },
  ES: {
    back: "← Volver a la Galería",
    listingDetails: "Detalles del Vehículo",
    chassis: "Chasis",
    version: "Versión",
    color: "Color",
    year: "Año",
    production: "Nº de Producción",
    loadMore: "Cargar más fotos",
    contactTitle: "Contacto",
    contactDesc: "¿Tiene información sobre este vehículo o notó algún error? Contáctenos:"
  },
  JA: {
    back: "← ギャラリーに戻る",
    listingDetails: "車両詳細",
    chassis: "シャシー",
    version: "バージョン",
    color: "カラー",
    year: "年式",
    production: "製造番号",
    loadMore: "もっと写真を読み込む",
    contactTitle: "お問い合わせ",
    contactDesc: "この車両に関する情報がある場合、またはエラーに気付いた場合は、お問い合わせください："
  }
};

export default function VehicleDetail({ car, lang = 'PT', onBack }) {
  const t = tDetail[lang] || tDetail.PT;
  const baseUrl = import.meta.env.BASE_URL;
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(24); // Limit initial images to improve performance

  const images = car?.images || [];
  const totalImages = images.length;

  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex(i => (i - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const goNext = useCallback(() => {
    setLightboxIndex(i => (i + 1) % totalImages);
  }, [totalImages]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft')  goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape')     closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goPrev, goNext]);

  if (!car) return null;

  const getUrl = (path) => `${baseUrl}${path.replace(/^\//, '')}`;

  return (
    <div className="vehicle-detail-wrapper">
      <div className="vehicle-detail-container">

        {/* Header */}
        <div className="detail-header">
          <button className="back-btn" onClick={onBack}>{t.back}</button>
          <h2 className="detail-title">
            {car.ano} Nissan Skyline GT-R{car.modelo && car.modelo !== 'Base' ? ` ${car.modelo}` : ''}
          </h2>
          <p className="detail-subtitle">
            {t.chassis}: {car.chassi} | {car.cor} ({car.codigo_cor})
          </p>
        </div>

        {/* Layout */}
        <div className="detail-content">

          {/* Images Grid */}
          <div className="detail-gallery">
            {totalImages > 0 ? (
              <>
                <div className="image-grid">
                  {images.slice(0, visibleCount).map((imgPath, idx) => {
                    const isLastVisible = idx === visibleCount - 1 && visibleCount < totalImages;
                    const remainingPhotos = totalImages - visibleCount + 1; // +1 because the last visible one is covered by the overlay

                    return (
                      <div
                        key={idx}
                        className="image-grid-item"
                        onClick={() => {
                          if (isLastVisible) {
                            setVisibleCount(c => c + 24);
                          } else {
                            setLightboxIndex(idx);
                          }
                        }}
                      >
                        <img src={getUrl(imgPath)} alt={`${car.chassi} foto ${idx + 1}`} loading="lazy" />
                        {isLastVisible && (
                          <div className="more-photos-overlay">
                            +{remainingPhotos}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="no-images">Nenhuma foto disponível</div>
            )}
          </div>

          {/* Sidebar */}
          <div className="detail-sidebar">
            <div className="listing-card">
              <h3 className="listing-title">{t.listingDetails}</h3>
              <ul className="listing-list">
                <li>
                  <span className="bullet">•</span>
                  <span>Chassis: <strong style={{color: '#dc2626'}}>{car.chassi}</strong></span>
                </li>
                {car.versao && (
                  <li>
                    <span className="bullet">•</span>
                    <span>{t.version}: {car.versao}{car.modelo && car.modelo !== 'Base' ? ` ${car.modelo}` : ''}</span>
                  </li>
                )}
                <li>
                  <span className="bullet">•</span>
                  <span>{t.color}: {car.cor} ({car.codigo_cor})</span>
                </li>
                <li>
                  <span className="bullet">•</span>
                  <span>{t.year}: {car.ano}</span>
                </li>
                {car.producao && (
                  <li>
                    <span className="bullet">•</span>
                    <span>{t.production}: {car.producao}</span>
                  </li>
                )}
                {car.options && car.options.slice(8).map((opt, idx) => (
                  <li key={idx}>
                    <span className="bullet">•</span>
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="listing-card" style={{ marginTop: '1.5rem' }}>
              <h3 className="listing-title">{t.contactTitle}</h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.5', marginTop: '0.5rem' }}>
                {t.contactDesc}
              </p>
              <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                <a href="mailto:contato@thebnr34.com" style={{ color: '#dc2626', textDecoration: 'none' }}>
                  contato@thebnr34.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>

          <div className="lightbox-img-wrapper" onClick={e => e.stopPropagation()}>
            <img
              src={getUrl(images[lightboxIndex])}
              alt={`${car.chassi} foto ${lightboxIndex + 1}`}
              className="lightbox-img"
            />
          </div>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={e => { e.stopPropagation(); goPrev(); }}
          >‹</button>

          <button
            className="lightbox-nav lightbox-next"
            onClick={e => { e.stopPropagation(); goNext(); }}
          >›</button>

          <div className="lightbox-counter">
            {lightboxIndex + 1} / {totalImages}
          </div>
        </div>
      )}
    </div>
  );
}
