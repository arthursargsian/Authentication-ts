import React, {useCallback, useEffect, useState} from "react";
import {signIn} from "../../redux/actions/client";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {RootState} from "../../redux/reducers";
import Utils from "../../Utils";
import {useNavigate} from "react-router-dom";

function LogIn() {
    const navigate = useNavigate();
    const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
    const [changeValue, setChangeValue] = useState({username: "", password: ""});

    const LogInMessage = useSelector((store: RootState) => store.client?.LogInMessage);
    const LogInStatus = useSelector((store: RootState) => store.client?.LogInStatus);

    useEffect(() => {
        if (LogInStatus === "fail") {
            toast.error(LogInMessage, {
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
    }, [LogInMessage, LogInStatus]);

    const handleSubmit = useCallback(async (ev: any) => {
        ev.preventDefault();
        await dispatch(signIn(changeValue));
        setChangeValue({username: "", password: ""});
        if (Utils.getToken()) navigate("/content");
    }, [changeValue, navigate]);

    const handleChangeValue = useCallback((key: string, value: string) => {
        setChangeValue((prev) => ({
            ...prev,
            [key]: value
        }))
    }, []);

    return (
        <>
            <form onSubmit={(ev) => handleSubmit(ev)} className="form form-login">
                <fieldset>
                    <legend>Please, enter your email and password for login.</legend>
                    <div className="input-block">
                        <label htmlFor="login-email">E-mail</label>
                        <input id="login-email" type="text" required
                               onChange={(ev) => handleChangeValue("username", ev.target.value)}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="login-password">Password</label>
                        <input id="login-password" type="password" required
                               onChange={(ev) => handleChangeValue("password", ev.target.value)}
                        />
                    </div>
                </fieldset>
                <button type="submit" className="btn-login">Login</button>
            </form>
        </>
    );
}

export default LogIn;
