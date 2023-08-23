import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Utils from "../Utils";

interface OnPrivateRouteProps {
    children: React.ReactNode;
}

function OnPublicRoute(props: OnPrivateRouteProps): JSX.Element | null {
    const navigate = useNavigate();
    const {children} = props;
    const token = Utils.getToken();

    useEffect(() => {
        if (token) {
            navigate("/content");
        }
    }, [token, navigate]);

    return !token ? <>{children}</> : null;
}

export default OnPublicRoute;
