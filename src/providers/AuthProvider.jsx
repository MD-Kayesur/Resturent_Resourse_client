import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase.config";
 
import { Axios } from "axios";
import useAxiousPublic from "../Hooks/useAxiousPublic";
export const AuthContext = createContext(null);
export const auth = getAuth(app);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // jwt token
  const axiosPublic = useAxiousPublic()

  const [loding, setLoding] = useState(true);
  //  console.log(user);
  // signup ruls from firebase
  const signup = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signin ruls from firebase
  const signin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //
  // signout ruls from firebase
  const signout = () => {
    setLoding(true);
    return signOut(auth);
  };

  // update Profile ruls from firebase
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //  this use effect foe authprovider
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
     
      
      if (user) {
        console.log(user);
        const userInfo = {
          email: user.email,
        };
        // get store client side
        axiosPublic.post('/jwt',userInfo)
        // Axios.post("/jwt", userInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data?.token) {
            console.log(res.data?.token);

            localStorage.setItem("access-token", res.data?.token);
          }
        });
      } else {
        // TODO :remove token(if tokan stored in the client side , localStores,  ,chaing,in memory)
        localStorage.removeItem("access-token");
      }
      setLoding(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // google provider

  const provider = new GoogleAuthProvider();
  //  google signin
  const googleSignIN = () => {
    setLoding(true);
    return signInWithPopup(auth, provider);
  };

  const AuthInfo = {
    user,
    loding,
    signup,
    signin,
    setUser,
    signout,
    updateUserProfile,
    googleSignIN,
  };

  console.log(user);
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
