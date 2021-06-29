import React, { useState, useEffect } from 'react';

import fire from './apps/fire';
import Login from './components/Login/Login';
import Hero from './components/Hero/Hero';

import './App.css';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearErrors();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            setEmailError('Невірний формат пошти');
            break;
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError('Користувача з такою поштою не знайдено');
            break;
          case "auth/wrong-password":
            setPasswordError('Хибний пароль');
            break;
          default:
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            setEmailError('Користувач з такою поштою вже зареєстрований');
            break;
          case "auth/invalid-email":
            setEmailError('Невірний формат пошти');
            break;
          case "auth/weak-password":
            setPasswordError('Пароль має містити не менше 6 символів');
            break;
          default:
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (user) {
      setShowForm(false);
    }
  }, [user])

  return (
    <div className="App">
      <Hero
        user={user}
        setShowForm={setShowForm}
        handleLogout={handleLogout}
      />
      
      {showForm && (<Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          clearInputs={clearInputs}
          clearErrors={clearErrors}
          setShowForm={setShowForm}
        />)}
    </div>
  );
};

export default App;
