import React from 'react';
import './VehicleDetail.css';

const tDetail = {
  PT: {
    back: "← Voltar para Galeria",
    listingDetails: "Detalhes do Veículo",
    chassis: "Chassis"
  },
  EN: {
    back: "← Back to Gallery",
    listingDetails: "Listing Details",
    chassis: "Chassis"
  },
  ES: {
    back: "← Volver a la Galería",
    listingDetails: "Detalles del Vehículo",
    chassis: "Chasis"
  },
  JA: {
    back: "← ギャラリーに戻る",
    listingDetails: "車両詳細",
    chassis: "シャシー"
  }
};

export default function VehicleDetail({ car, lang = 'PT', onBack }) {
  const t = tDetail[lang] || tDetail.PT;
  const baseUrl = import.meta.env.BASE_URL;

  if (!car) return null;

  return (
    <div className="vehicle-detail-wrapper">
      <div className="vehicle-detail-container">
        
        {/* Header */}
        <div className="detail-header">
          <button className="back-btn" onClick={onBack}>
            {t.back}
          </button>
          <h2 className="detail-title">
            {car.ano} Nissan Skyline GT-R{car.modelo && car.modelo !== 'Base' ? ` ${car.modelo}` : ''}
          </h2>
          <p className="detail-subtitle">
            {t.chassis}: {car.chassi} | {car.cor} ({car.codigo_cor})
          </p>
        </div>

        {/* Layout: Gallery on left/top, Details on right/bottom */}
        <div className="detail-content">
          
          {/* Images Grid */}
          <div className="detail-gallery">
            {car.images && car.images.length > 0 ? (
              <div className="image-grid">
                {car.images.map((imgPath, idx) => {
                  const fullUrl = `${baseUrl}${imgPath.replace(/^\//, '')}`;
                  return (
                    <div key={idx} className="image-grid-item">
                      <img src={fullUrl} alt={`${car.chassi} photo ${idx + 1}`} loading="lazy" />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="no-images">Nenhuma foto disponível</div>
            )}
          </div>

          {/* Listing Details Sidebar */}
          <div className="detail-sidebar">
            <div className="listing-card">
              <h3 className="listing-title">{t.listingDetails}</h3>
              <ul className="listing-list">
                <li><span className="bullet">•</span> Chassis: <strong style={{color: '#dc2626'}}>{car.chassi}</strong></li>
                <li><span className="bullet">•</span> {car.cor} ({car.codigo_cor})</li>
                
                {car.options && car.options.map((opt, idx) => (
                  <li key={idx}><span className="bullet">•</span> {opt}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
