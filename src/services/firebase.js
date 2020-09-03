import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDcCI7EKFVtj_2rpi8XcbAr8IhWb_xGJxQ',
    authDomain: 'valhalla-shopping-cart.firebaseapp.com',
    databaseURL: 'https://valhalla-shopping-cart.firebaseio.com',
    projectId: 'valhalla-shopping-cart',
    storageBucket: 'valhalla-shopping-cart.appspot.com',
    messagingSenderId: '277385469272',
    appId: '1:277385469272:web:4c91c35139ae8491a3992d',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
