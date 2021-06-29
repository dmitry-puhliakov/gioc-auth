import React from 'react';

import './Services.scss';

const Services = ({ user, setCurrentService, setShowMessage }) => {

  const services = {
    parking: 'Купити абонемент паркування',
    cards: 'Перекази з картки на картку',
    transport: 'Платежі за проїзд у транспорті',
    pdr: 'Cплата штрафів за порушення ПДР',
    food: 'Платежі за харчування у дитячих садках м. Києва',
    mobil: 'Поповнення рахунку на мобільному',
    gaz: 'Платежі до ПАТ «Київоблгаз»',
    kindergarten: 'Запис до дитячого садочку онлайн'
  }

  return (
    <div className="catalog">
      <div className="catalog__title">
        ОБЕРІТЬ ПОСЛУГУ
      </div>

      <div className="catalog__content">
          <div className="card" onClick={() => {
            user
              ? setCurrentService(services.parking)
              : setShowMessage(true);
          }}>
            <div className="card__image card__image--1"></div>
            <div className="card__title">
              {services.parking}
            </div>
          </div>
          <div className="card" onClick={() => {
            user
              ? setCurrentService(services.cards)
              : setShowMessage(true);
          }}>
            <div className="card__image card__image--2"></div>
            <div className="card__title">
              {services.cards}
            </div>
          </div>
          <div className="card" onClick={() => {
            user
              ? setCurrentService(services.transport)
              : setShowMessage(true);
          }}>
            <div className="card__image card__image--3"></div>
            <div className="card__title">
              {services.transport}
            </div>
          </div>
          <div className="card" onClick={() => {
            user
              ? setCurrentService(services.pdr)
              : setShowMessage(true);
          }}>
            <div className="card__image card__image--4"></div>
            <div className="card__title">
              {services.pdr}
            </div>
          </div>
          <div className="card" onClick={() => {
            user
              ? setCurrentService(services.food)
              : setShowMessage(true);
          }}>
            <div className="card__image card__image--5"></div>
            <div className="card__title">
              {services.food}
            </div>
          </div>
          <div className="card" onClick={() => {
            user
              ? setCurrentService(services.mobil)
              : setShowMessage(true);
          }}>
            <div className="card__image card__image--6"></div>
            <div className="card__title">
              {services.mobil}
            </div>
          </div>
          <div className="card" onClick={() => {
            user
              ? setCurrentService(services.gaz)
              : setShowMessage(true);
          }}>
            <div className="card__image card__image--7"></div>
            <div className="card__title">
              {services.gaz}
            </div>
          </div>
          <div className="card" onClick={() => {
            user
              ? setCurrentService(services.kindergarten)
              : setShowMessage(true);
          }}>
            <div className="card__image card__image--8"></div>
            <div className="card__title">
              {services.kindergarten}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Services;
