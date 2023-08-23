import React, {useEffect} from "react";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {userContent} from "../../redux/actions/client";
import {RootState} from "../../redux/reducers";

interface Content {
    data: string;
}

function UserContent() {
    const dispatch: ThunkDispatch<any, void, AnyAction> = useDispatch();
    const content = useSelector((store: RootState) => store.client?.contnet) as Content;

    useEffect(() => {
        dispatch(userContent());
    }, [dispatch]);

    return (
        <h1>{content.data}</h1>
    );
}

export default UserContent;
