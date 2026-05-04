import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCYkOLGahHk6Bzpao4rb4fkMWf0pyl_ElQ",
  authDomain: "shopdb-689ae.firebaseapp.com",
  projectId: "shopdb-689ae",
  storageBucket: "shopdb-689ae.firebasestorage.app",
  messagingSenderId: "928840447495",
  appId: "1:928840447495:web:c97a422b07257924ae5ca2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);