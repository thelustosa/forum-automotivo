import React, { useState } from 'react';
import './index.css';
import Login from './Login';
import r34White2Raw from './assets/r34_white2.svg?raw';
import jdmSvgRaw from './assets/jdm.svg?raw';
import r34RedRaw from './assets/r34_red.svg?raw';
import ColorMatrix from './ColorMatrix';
import ChassisRanges from './ChassisRanges';
function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [activeTab, setActiveTab] = useState('VISÃO GERAL'); // 'VISÃO GERAL', 'CHASSIS'

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-container">
          <div className="logo-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a href="#" onClick={() => setShowLogin(false)} className="header-logo">
              <div className="logo-top-row">
                <div className="logo-icon-wrapper" dangerouslySetInnerHTML={{ __html: jdmSvgRaw }} style={{ height: '100%', display: 'flex', alignItems: 'center' }} />
                <span className="logo-main">BNR34</span>
              </div>
              <div className="logo-bottom-row">
                自動車フォーラム
              </div>
            </a>

            <a href="#" onClick={() => setShowLogin(false)} className="header-car-container">
              <div className="car-svg car-white" dangerouslySetInnerHTML={{ __html: r34White2Raw }} />
              <div className="car-svg car-red" dangerouslySetInnerHTML={{ __html: r34RedRaw }} />
            </a>
          </div>

          <div className="header-actions">
            <button className="btn-login" onClick={() => setShowLogin(true)}>Entrar</button>
            <button className="btn-register">Registrar</button>
          </div>
        </div>
      </header>
      <div className="laser-divider" aria-hidden="true"></div>

      {showLogin ? (
        <Login />
      ) : (
        <main className="forum-main-container">
          <div className="forum-hero">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <span className="hero-years">1999-2002</span>
              <h1 className="hero-main-title">BNR34</h1>
              <span className="hero-sub">Skyline GT-R</span>
            </div>
          </div>

          <div className="forum-body">
            <div className="hero-stats-grid">
              <div className="stat-card">
                <span className="stat-value">11.578</span>
                <span className="stat-label">PRODUÇÃO TOTAL</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">15</span>
                <span className="stat-label">VARIANTES</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">14</span>
                <span className="stat-label">CORES</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">7</span>
                <span className="stat-label">REGISTROS DE CHASSI</span>
              </div>
            </div>

            <div className="registry-menu-wrapper">
              <nav className="registry-menu">
                <button 
                  className={`registry-menu-btn ${activeTab === 'VISÃO GERAL' ? 'active' : ''}`}
                  onClick={() => setActiveTab('VISÃO GERAL')}
                >
                  VISÃO GERAL
                </button>
                <button 
                  className={`registry-menu-btn ${activeTab === 'CHASSIS' ? 'active' : ''}`}
                  onClick={() => setActiveTab('CHASSIS')}
                >
                  CHASSIS
                </button>
              </nav>
            </div>

            {activeTab === 'VISÃO GERAL' && (
              <ColorMatrix />
            )}

            {activeTab === 'CHASSIS' && (
              <ChassisRanges />
            )}
          </div>
        </main>
      )}
    </div>
  );
}

export default App;

