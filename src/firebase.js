import firebase from 'firebase/app'; // rollup bundle issue with ESM import
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDK2nUW4RN8tUczwoRJ5ZH_u1ENooma4OY',
  authDomain: 'gfg-forum.firebaseapp.com',
  databaseURL: 'https://gfg-forum.firebaseio.com',
  projectId: 'gfg-forum',
  storageBucket: 'gfg-forum.appspot.com',
  messagingSenderId: '1062164690061',
  appId: '1:1062164690061:web:2efdcf1426976e9bf71ec4',
  measurementId: 'G-XZEHHRNYJ5',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
