import React from 'react';

import './Login.scss'

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    clearInputs,
    clearErrors,
    setShowForm
  } = props;

  return (
    <section className="login">
      <div className="login__container">
        <div className="login__header">
          <h2 className="login__title">Форма реестрації</h2>
          <div
            className="login__close"
            onClick={() => {
              setEmail('');
              setPassword('');
              clearInputs();
              clearErrors();
              setShowForm(false)
            }}>
              &times;
            </div>
        </div>

        <div className="login__body">
          <label className="login__label">Введіть свій E-mail</label>
          <input
            className="login__input"
            type="email"
            autoFocus
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <p className="login__errorMsg">{emailError}</p>

          <label className="login__label">Введіть пароль</label>
          <input
            className="login__input"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <p className="login__errorMsg">{passwordError}</p>
        </div>

        <div className="login__footer">
          {hasAccount ? (
            <>
              <button className="login__button" onClick={handleLogin}>
                Увійти
              </button>
              <p className="login__type">
                Ще не маєш аккаунту? 
                <span className="login__type--link" onClick={() => setHasAccount(!hasAccount)}>
                  Зареєструватися
                </span>
               </p>
            </>
          ) : (
            <>
              <button className="login__button" onClick={handleSignup}>
              Зареєструватися
              </button>
              <p className="login__type">
                Вже маєш аккаунт? 
                <span className="login__type--link" onClick={() => setHasAccount(!hasAccount)}>
                  Увійти
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Login;
