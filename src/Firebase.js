import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"
const firebaseConfig = {
    apiKey: "AIzaSyDWjpS1G2MS5LN7VDiLIWPmy85xcnDUE54",
    authDomain: "blogs-1006f.firebaseapp.com",
    projectId: "blogs-1006f",
    storageBucket: "blogs-1006f.appspot.com",
    messagingSenderId: "60258401783",
    appId: "1:60258401783:web:a2fda7f3740e90fcb402f2"
  };
const app=firebase.initializeApp(firebaseConfig) 
export default app.database().ref()
export const storage=app.storage().ref()
export const auth=app.auth()

