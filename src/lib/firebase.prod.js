import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmID9hm9lqF5c8PLCYD4PTveItWMoYE3E",
    authDomain: "netflix-clone-a5755.firebaseapp.com",
    databaseURL: "https://netflix-clone-a5755.firebaseio.com",
    projectId: "netflix-clone-a5755",
    storageBucket: "netflix-clone-a5755.appspot.com",
    messagingSenderId: "629249552237",
    appId: "1:629249552237:web:d7d28a6735dc731f0a7464"
}

const firebase = Firebase.initializeApp(config);

export { firebase };