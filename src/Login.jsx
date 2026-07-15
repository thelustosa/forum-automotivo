import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-header-logo-css"></div>
        <div className="login-container">
          <div className="login-form-section">
            <h2 className="login-title">BEM-VINDO</h2>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="login-input-group">
                <input type="text" className="login-input" placeholder="Usuário" />
              </div>
              
              <div className="login-input-group">
                <input type="password" className="login-input" placeholder="Senha" />
              </div>
              
              <div className="login-options">
                <label className="login-checkbox-label">
                  <input type="checkbox" />
                  Lembrar de mim
                </label>
                <a href="#" className="login-forgot-link">Esqueceu a senha?</a>
              </div>
              
              <button type="submit" className="login-submit-btn">ENTRAR</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
