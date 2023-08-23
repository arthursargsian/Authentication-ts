import React, {useCallback, useEffect, useState} from "react";
import {signUp} from "../../redux/actions/client";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import {toast} from "react-toastify";

function SignUp() {
    const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
    const [changeValue, setChangeValue] = useState({username: "", email: "", password: ""});

    const signUpMessage = useSelector((store: RootState) => store.client?.signUpMessage);
    const signUpStatus = useSelector((store: RootState) => store.client?.signUpStatus);

    useEffect(() => {
        if (signUpStatus === "fail") {
            toast.error(signUpMessage, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        if (signUpStatus === "success") {
            toast.success("Success", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }, [signUpMessage, signUpStatus]);

    const handleSubmit = useCallback((ev: any) => {
        ev.preventDefault();
        dispatch(signUp(changeValue));
        setChangeValue({username: "", email: "", password: ""});
    }, [changeValue, dispatch]);

    const handleChangeValue = useCallback((key: string, value: string) => {
        setChangeValue((prev) => ({
            ...prev,
            [key]: value
        }))
    }, []);

    return (
        <>
            <form onSubmit={(ev) => handleSubmit(ev)} className="form form-signup">
                <fieldset>
                    <legend>Please, enter your email, password and password confirmation for sign up.
                    </legend>
                    <div className="input-block">
                        <label htmlFor="signup-password">User name</label>
                        <input value={changeValue.username}
                               onChange={(ev) => handleChangeValue("username", ev.target.value)}
                               id="signup-password" type="text"
                               required/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="signup-email">E-mail</label>
                        <input value={changeValue.email}
                               onChange={(ev) => handleChangeValue("email", ev.target.value)}
                               id="signup-email" type="email"
                               required/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="signup-password-confirm">Password</label>
                        <input value={changeValue.password}
                               onChange={(ev) => handleChangeValue("password", ev.target.value)}
                               id="signup-password-confirm"
                               type="password" required/>
                    </div>
                </fieldset>
                <button type="submit" className="btn-signup">Continue</button>
            </form>
        </>
    );
}

export default SignUp;
