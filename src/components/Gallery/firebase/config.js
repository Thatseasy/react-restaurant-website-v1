import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyC0_FMtNz91aeLKJgVVDJzKrGFWpRDBeTs",
    authDomain: "doesnt-matter-6eff1.firebaseapp.com",
    projectId: "doesnt-matter-6eff1",
    storageBucket: "doesnt-matter-6eff1.appspot.com",
    messagingSenderId: "101928082304",
    appId: "1:101928082304:web:f43cb2df51f6b6c207bf65",
    measurementId: "G-LTXXT2PXGR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };