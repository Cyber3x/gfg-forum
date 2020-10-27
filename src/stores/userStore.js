import { writable } from 'svelte/store';
import { auth, db } from '../firebase.js';

let userDataFromLocalStorage =
  JSON.parse(localStorage.getItem('userData')) || null;
export const user = writable(userDataFromLocalStorage);

auth.onAuthStateChanged(async firebaseUser => {
  if (firebaseUser && !userDataFromLocalStorage) {
    let userDoc = await db.collection('users').doc(firebaseUser.uid).get();
    let userData = userDoc.data();
    userData = { ...userData, uid: firebaseUser.uid };
    user.set(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  } else {
  }
});
