import  firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBNn11APwREIKWY5mE3V4GKhjUa9FRMmPg",
    authDomain: "coderappeccomerce.firebaseapp.com",
    projectId: "coderappeccomerce",
    storageBucket: "coderappeccomerce.appspot.com",
    messagingSenderId: "491718202877",
    appId: "1:491718202877:web:c58cdf4a94266e9dc07594"
})

//define la base de datos
export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}