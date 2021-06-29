import React from 'react';


import './Message.scss';

const Message = ({ setShowMessage }) => {
  return (
    <div className="message">
      <div className="message__container">
        <p className="message__text">
        Щоб скористатися сервісом небхідно авторизуватися. Якщо ви ще не маєте аккаунту на нашому сайті, то скористайтеся формою реєстрації.
        </p>

        <button className="message__button" onClick={() => setShowMessage(false)}>
          Добре
        </button>
      </div>

    </div>
  );
}

export default Message;
