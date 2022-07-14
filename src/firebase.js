import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBZgd0qk280urSbwvou-9ViQj5HodtHtK8',
  authDomain: 'clone-abcf4.firebaseapp.com',
  projectId: 'clone-abcf4',
  storageBucket: 'clone-abcf4.appspot.com',
  messagingSenderId: '947581563223',
  appId: '1:947581563223:web:4f112c6cbbd37fcb2d4e12',
  measurementId: 'G-J26HM51N9Q',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebaseApp.firestore();

export { auth, db };
