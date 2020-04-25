import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDQVEx1xXBG8UZ84b3CXPuM7Gpd7Z5dsFc',
    authDomain: 'portfolio-ec84c.firebaseapp.com',
    databaseURL: 'https://portfolio-ec84c.firebaseio.com',
    projectId: 'portfolio-ec84c',
    storageBucket: 'portfolio-ec84c.appspot.com',
    messagingSenderId: '263981681863',
    appId: '1:263981681863:web:bef2dbaafa012427aac2e2',
    measurementId: 'G-P3QKK3Y509',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const getProjects = async () => {
    const projectRef = await firestore.collection('projects').get();
    const data = projectRef.docs.map(doc => doc.data());
    return data;
};
