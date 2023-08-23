import {createReducer} from "@reduxjs/toolkit";
import {signIn, signUp, userContent} from "../actions/client";
import Utils from "../../Utils";

interface initialClient {
    signUpMessage: string,
    signUpStatus: string,
    LogInMessage: string,
    LogInStatus: string,
    token: string,
    client: object,
    contnet: object

}

const initialState: initialClient = {
    signUpMessage: "",
    signUpStatus: "",
    LogInMessage: "",
    LogInStatus: "",
    token: Utils.getToken() || "",
    client: [],
    contnet: []
};


export default createReducer(initialState, (builder) => {
    builder
        .addCase(signUp.pending, (state, action) => {
            state.signUpStatus = "loading";
        })
        .addCase(signUp.fulfilled, (state, action) => {
            state.signUpStatus = "success";
        })
        .addCase(signUp.rejected, (state, action: any) => {
            state.signUpStatus = "fail";
            state.signUpMessage = action.payload.response.data.message;
        })
        .addCase(signIn.pending, (state, action) => {
            state.LogInStatus = "loading";
        })
        .addCase(signIn.fulfilled, (state, action) => {
            state.LogInStatus = "success";
            state.client = action.payload.data;
            state.token = action.payload.data.token;
            localStorage.setItem("token", action.payload.data.token);
            localStorage.setItem("client", JSON.stringify(action.payload.data));
        })
        .addCase(signIn.rejected, (state, action: any) => {
            state.LogInStatus = "fail";
            state.LogInMessage = action.payload.response.data.message;
        })
        .addCase(userContent.fulfilled, (state, action: any) => {
            state.contnet = action.payload;
        })
});
