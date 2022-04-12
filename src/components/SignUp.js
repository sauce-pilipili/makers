import React, {useRef, useState} from 'react';
import {auth} from "../utils/firebase.config";
import "./style/sign.css"

const SignUp = () => {

    const [displayName, setDisplayName] = useState("");
    const registerEmail = useRef();
    const registerPassword = useRef();

    const handleRegister = (e) => {
        e.preventDefault();
        try {
            auth.createUserWithEmailAndPassword(
                registerEmail.current.value,
                registerPassword.current.value
            ).then(async (userAuth) => {
                await userAuth.user.updateProfile({
                    displayName
                })
                console.log(userAuth)
            });
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className={"mainContainer"}>
            <form onSubmit={(e) => handleRegister(e)}>
                <div className="imgcontainer">
                    <h3>Inscrivez-vous</h3>
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Pseudo</b></label>
                    <input type={"text"} placeholder={"votre pseudo"}  name={"uname"} required onChange={(e => {
                        setDisplayName(e.target.value)
                    })}/>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type={"email"} name={"email"} placeholder={"votre mail"} required ref={registerEmail}/>
                    <label htmlFor="psw"><b>Mot de passe</b></label>
                    <input type={"password"} name={"psw"} placeholder={"votre mot de passe"} required ref={registerPassword}/>
                    <input className={"submitBtn"} type={"submit"} value={"valider l'inscription"}/>
                </div>

                {/*<div className="container" style="background-color:#f1f1f1">*/}
                {/*    <button type="button" className="cancelbtn">Cancel</button>*/}
                {/*    <span className="psw">Forgot <a href="#">password?</a></span>*/}
                {/*</div>*/}
            </form>
        </div>
);
};

export default SignUp;

