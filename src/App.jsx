import React, { useState, useEffect } from 'react';
import './index.css';
import r34White2Raw from './assets/r34_white2.svg?raw';
import jdmSvgRaw from './assets/jdm.svg?raw';
import r34RedRaw from './assets/r34_red.svg?raw';
import r34MNP2Raw from './assets/r34MNP2.svg?raw';
import r34blackRaw from './assets/r34black.svg?raw';
import ColorMatrix from './ColorMatrix';
import ChassisRanges from './ChassisRanges';
import CarCustomizer from './CarCustomizer';

const carSvgs = [r34White2Raw, r34RedRaw, r34MNP2Raw, r34blackRaw];

const tApp = {
  PT: {
    totalProd: "PRODUÇÃO TOTAL",
    variants: "VARIANTES",
    colors: "CORES",
    chassisReg: "REGISTROS DE CHASSI",
    overview: "VISÃO GERAL",
    chassis: "CHASSIS",
    heroSub: "Skyline GTR",
    vehicles: "VEÍCULOS"
  },
  EN: {
    totalProd: "TOTAL PRODUCTION",
    variants: "VARIANTS",
    colors: "COLORS",
    chassisReg: "CHASSIS RECORDS",
    overview: "OVERVIEW",
    chassis: "CHASSIS",
    heroSub: "Skyline GT-R",
    vehicles: "VEHICLES"
  },
  ES: {
    totalProd: "PRODUCCIÓN TOTAL",
    variants: "VARIANTES",
    colors: "COLORES",
    chassisReg: "REGISTROS DE CHASIS",
    overview: "VISTA GENERAL",
    chassis: "CHASIS",
    heroSub: "Skyline GT-R",
    vehicles: "VEHÍCULOS"
  },
  JA: {
    totalProd: "総生産台数",
    variants: "バリエーション",
    colors: "カラー",
    chassisReg: "シャシーレコード",
    overview: "概要",
    chassis: "シャシー",
    heroSub: "スカイライン GT-R",
    vehicles: "車両"
  }
};

const languages = {
  PT: { code: 'PT', flag: 'https://flagcdn.com/w40/br.png', label: 'Português' },
  ES: { code: 'ES', flag: 'https://flagcdn.com/w40/es.png', label: 'Español' },
  EN: { code: 'EN', flag: 'https://flagcdn.com/w40/us.png', label: 'English' },
  JA: { code: 'JA', flag: 'https://flagcdn.com/w40/jp.png', label: '日本語' }
};

function App() {
  const [currentLang, setCurrentLang] = useState('PT');
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('VISÃO GERAL'); // 'VISÃO GERAL', 'CHASSIS'
  const [carIndex, setCarIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarIndex(prev => (prev + 1) % carSvgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const t = tApp[currentLang];

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-container">
          <div className="logo-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a href="#" className="header-logo">
              <div className="logo-top-row">
                <div className="logo-icon-wrapper" dangerouslySetInnerHTML={{ __html: jdmSvgRaw }} style={{ height: '100%', display: 'flex', alignItems: 'center' }} />
                <span className="logo-main">BNR34</span>
              </div>
              <div className="logo-bottom-row">
                自動車フォーラム
              </div>
            </a>

            <a href="#" className="header-car-container">
              {carSvgs.map((svgRaw, idx) => (
                <div 
                  key={idx} 
                  className="car-svg" 
                  style={{ opacity: idx === carIndex ? 1 : 0 }}
                  dangerouslySetInnerHTML={{ __html: svgRaw }} 
                />
              ))}
            </a>
          </div>

          <div className="header-actions" style={{ position: 'relative' }}>
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="btn-language" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                background: 'none', 
                border: 'none', 
                fontSize: '0.9rem', 
                cursor: 'pointer', 
                fontFamily: 'inherit', 
                fontWeight: '800',
                color: 'var(--text-color)',
                padding: '6px 8px',
                userSelect: 'none',
                outline: 'none'
              }}
            >
              <img 
                src={languages[currentLang].flag} 
                alt={languages[currentLang].code} 
                style={{ width: '22px', height: '14px', objectFit: 'cover', display: 'block', border: '1px solid rgba(0,0,0,0.15)' }} 
              />
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>{languages[currentLang].code}</span>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginLeft: '1px' }}>▼</span>
            </button>
            {showDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '8px',
                background: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: '6px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                zIndex: 1010,
                minWidth: '135px',
                padding: '4px 0'
              }}>
                {Object.values(languages).map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setShowDropdown(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      width: '100%',
                      padding: '8px 12px',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      color: 'var(--text-color)',
                      transition: 'background 0.2s',
                      fontWeight: currentLang === lang.code ? '700' : '400'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f1f5f9'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                  >
                    <img 
                      src={lang.flag} 
                      alt={lang.code} 
                      style={{ width: '20px', height: '13px', objectFit: 'cover', display: 'block', border: '1px solid rgba(0,0,0,0.15)' }} 
                    />
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="laser-divider" aria-hidden="true"></div>

      <main className="forum-main-container">
        <div className="forum-hero">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <span className="hero-years">1999-2002</span>
            <h1 className="hero-main-title">BNR34</h1>
            <span className="hero-sub">{t.heroSub}</span>
          </div>
        </div>

        <div className="forum-body">
          <div className="hero-stats-grid">
            <div className="stat-card">
              <span className="stat-value">11.578</span>
              <span className="stat-label">{t.totalProd}</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">15</span>
              <span className="stat-label">{t.variants}</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">14</span>
              <span className="stat-label">{t.colors}</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">7</span>
              <span className="stat-label">{t.chassisReg}</span>
            </div>
          </div>

          <div className="registry-menu-wrapper">
            <nav className="registry-menu">
              <button 
                className={`registry-menu-btn ${activeTab === 'VISÃO GERAL' ? 'active' : ''}`}
                onClick={() => setActiveTab('VISÃO GERAL')}
              >
                {t.overview}
              </button>
              <button 
                className={`registry-menu-btn ${activeTab === 'CHASSIS' ? 'active' : ''}`}
                onClick={() => setActiveTab('CHASSIS')}
              >
                {t.chassis}
              </button>
              <button 
                className={`registry-menu-btn ${activeTab === 'VEÍCULOS' ? 'active' : ''}`}
                onClick={() => setActiveTab('VEÍCULOS')}
              >
                {t.vehicles}
              </button>
            </nav>
          </div>

          {activeTab === 'VISÃO GERAL' && (
            <ColorMatrix lang={currentLang} />
          )}

          {activeTab === 'CHASSIS' && (
            <ChassisRanges lang={currentLang} />
          )}

          {activeTab === 'VEÍCULOS' && (
            <CarCustomizer />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

