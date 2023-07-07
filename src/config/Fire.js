import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider , signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzN2hxnsu792FfdHzTAgjO65svxBo51ZM",
  authDomain: "game-center-ba60d.firebaseapp.com",
  projectId: "game-center-ba60d",
  storageBucket: "game-center-ba60d.appspot.com",
  messagingSenderId: "1004785391368",
  appId: "1:1004785391368:web:9d1d11d00cc09ab072bebd",
  measurementId: "G-BSDXV4CF8S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const signInWithGoogle = ()=>{
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    localStorage.setItem("token",token)
  }).catch((error) => {
    console.log(error);
  });
}
