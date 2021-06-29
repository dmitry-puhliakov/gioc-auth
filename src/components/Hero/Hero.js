import React, { useState } from 'react';

import Services from '../Services/Services';
import CurrentService from '../CurrentService/CurrentService';
import Message from '../Message/Message';

import './Hero.scss';

const Hero = ({ user, showForm, setShowForm, handleLogout }) => {
  const [currentService, setCurrentService] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__logo"></div>
          <div className="header__auth">
            {user ? (
              <button className="header__auth-btn" onClick={handleLogout}>Вийти</button>
            ) : (
              <button className="header__auth-btn" onClick={() => setShowForm(!showForm)}>Увійти</button>
            )}
          </div>
        </div>
      </header>
      <main>
        <div className="banner">
          <span className="banner__text">
            <h2 className="banner__title">Зручно!</h2>
            У будь-який час<br />З будь-якого мicця
          </span>
        </div>

        {currentService === '' ? (
          <Services
            user={user}
            setCurrentService={setCurrentService}
            setShowMessage={setShowMessage} />
        ) : (
          <CurrentService
            currentService={currentService}
            setCurrentService={setCurrentService}
          />
        )}
        
        {showMessage && <Message setShowMessage={setShowMessage} />}
      </main>
    </>
  );
};

export default Hero;
