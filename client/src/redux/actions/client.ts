import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../api/Api";
import {payloadLogIn, payloadSignUp} from "../../models/auth/Auth"

export const signUp = createAsyncThunk("client/signUp", async (payload: payloadSignUp, {rejectWithValue}) => {
    try {
        const data = await Api.signUp(payload);
        return data;
    } catch (e) {
        return rejectWithValue(e);
    }
});

export const signIn = createAsyncThunk("client/signIn", async (payload: payloadLogIn, {rejectWithValue}) => {
    try {
        const data = await Api.signIn(payload);
        return data;
    } catch (e) {
        return rejectWithValue(e);
    }
});

export const userContent = createAsyncThunk("client/userContent", async () => {
    const data = await Api.userContent();
    return data;
});
