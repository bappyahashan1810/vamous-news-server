import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('now user state changed ', currentUser);
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [])

    const authLogOut = () => {
        return signOut(auth);
    }
    const authRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const authLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const gitHubSignIn = () => {
        return signInWithPopup(auth, gitHubProvider);
    }

    const authInfo = { googleSignIn, user, authLogOut, authLogIn, authRegister, gitHubSignIn };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;