import React, {useState} from 'react';
import SignUp from "./SignUp";
import Login from "./Login";
import "./style/connectModal.css";


const ConnectModal = () => {
    const [signUp, setSignUp] = useState(true)

    return (
        <div>
            <div className={"modal"}>
                <button className={"button-connexion"}
                    style={{background: signUp ? "rgb(94,194,227)" : "rgb(225,114,114)"}}
                    onClick={()=>{ setSignUp(true)}}
                >S'incrire
                </button>
                <button
                    className={"button-connexion"}
                    style={{background: signUp ? "rgb(225,114,114)" : "rgb(94,194,227)"}}
                    onClick={()=>{ setSignUp(false)}}
                >Se connecter
                </button>
            </div>
            {signUp ? <SignUp /> : <Login />}
        </div>
    );
};

export default ConnectModal;