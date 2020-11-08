import firebase from 'firebase/app';
import 'firebase/firestore';
import projects from '../lib/data/projects';

const firebaseConfig = {
    apiKey: 'AIzaSyDLAF5MW_ps_6KkaE1AQ12jNsV7ZInDbfE',
    authDomain: 'personal-website-6a804.firebaseapp.com',
    databaseURL: 'https://personal-website-6a804.firebaseio.com',
    projectId: 'personal-website-6a804',
    storageBucket: 'personal-website-6a804.appspot.com',
    messagingSenderId: '572721894091',
    appId: '1:572721894091:web:058701099b15327dbf414e',
    measurementId: 'G-80CGVMZ4P2',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;

let called = false;

const sendData = async () => {
    if (called) return;

    const collectionRef = firestore.collection('projects');
    const batch = firestore.batch();
    Object.values(projects).forEach((project) => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, project);
    });
    await batch.commit();

    called = true;
};
