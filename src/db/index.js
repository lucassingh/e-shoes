import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCtfY0q9h_rmUxqYhHPF2ULT_motkOMwcY",
    authDomain: "e-shoes-51412.firebaseapp.com",
    projectId: "e-shoes-51412",
    storageBucket: "e-shoes-51412.appspot.com",
    messagingSenderId: "300892321934",
    appId: "1:300892321934:web:51214052d1221df778b1df"
}) 

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
