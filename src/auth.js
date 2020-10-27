import { navigate } from 'svelte-routing';
import { auth } from './firebase.js';

export const handleLoginForm = async (email, password) => {
  localStorage.removeItem('userData');
  try {
    await auth.signInWithEmailAndPassword(email, password);
    navigate('/');
  } catch (error) {
    console.error(error.message);
  }
};

export const handleSigninForm = async (email, password, username) => {
  localStorage.removeItem('userData');
  try {
    await auth.createUserWithEmailAndPassword(email, password);

    const firebaseUser = auth.currentUser;

    const userData = { email, username, createdAt: new Date().toISOString() };

    await db.collection('users').doc(firebaseUser.uid).set(userData);

    navigate('/');
  } catch (error) {
    console.error(error.message);
  }
};

export const handleLogOut = () => {
  try {
    auth.signOut();
    localStorage.removeItem('userData');
    navigate('/');
  } catch (error) {
    console.warn('error on logout', error.message);
  }
};
