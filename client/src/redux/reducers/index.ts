import {combineReducers} from 'redux';
import client from "./client";

export const reducers = combineReducers({
    client,
})

export type RootState = ReturnType<typeof reducers>;
export default reducers;
