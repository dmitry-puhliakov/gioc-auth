import React from 'react';

import './CurrentService.scss';

const CurrentSevice = ({ currentService, setCurrentService }) => {
  return (
    <div className="current-service">
      <div className="current-service__container">
        <div className="current-service__title">
          {currentService}
        </div>

        <div className="current-service__content">
          
        </div>

        <div className="current-service__back">
          <span className="current-service__back-link" onClick={() => setCurrentService('')}>
            Повернутися до вибору сервісу
            </span>
        </div>
      </div>
    </div>
  )
}

export default CurrentSevice;
