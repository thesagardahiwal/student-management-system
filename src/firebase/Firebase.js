import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  deleteUser,
  signOut,
} from 'firebase/auth';
import { getFirestore, doc, arrayRemove, setDoc, getDoc, deleteDoc, collection, updateDoc, arrayUnion, addDoc, getDocs, where, query, deleteField } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

class Firebase {
  
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
  }

  addStudentInfo = async (data) => {
    const snapDoc = doc(this.db, `collage/students`);
    await addDoc(collection(this.db, "collage"), data);

    console.log(data);
  }

  getStudentInfo = async () => {
   const stud = await getDocs(collection(this.db, "collage"));
   let list = [];
   stud.forEach(e => list.push(e.data()));
   return list;
  }

}



export default Firebase;
