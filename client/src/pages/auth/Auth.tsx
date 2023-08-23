import React, {useCallback, useState} from "react";
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../../redux/actions/client";
import LogIn from "../../components/auth/LogIn";
import SignUp from "../../components/auth/SignUp";

function Auth() {
    const [active, setActive] = useState<boolean>(true);
    return (
        <>
            <section className="forms-section">
                <div className="forms">
                    <div className={`form-wrapper ${active ? "is-active" : ""}`}>
                        <button onClick={() => setActive(true)} type="button" className="switcher switcher-login">
                            Login
                            <span className="underline"></span>
                        </button>
                        <LogIn/>
                    </div>
                    <div className={`form-wrapper ${!active ? "is-active" : ""}`}>
                        <button onClick={() => setActive(false)} type="button" className="switcher switcher-signup">
                            Sign Up
                            <span className="underline"></span>
                        </button>
                        <SignUp/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Auth;
