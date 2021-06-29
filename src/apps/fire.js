import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBvpVflFKNbT5gzffJieiwUq6MLqZOFIXo",
  authDomain: "login-5da8f.firebaseapp.com",
  projectId: "login-5da8f",
  storageBucket: "login-5da8f.appspot.com",
  messagingSenderId: "394034166698",
  appId: "1:394034166698:web:b6a19b0be68cd574d989d3"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
