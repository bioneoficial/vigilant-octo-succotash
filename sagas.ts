/* eslint-disable @typescript-eslint/no-unused-vars */
import {  AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { take, put, call, fork, all, takeEvery } from 'redux-saga/effects';


function* fetchUser(_action:  PayloadAction<AnyAction>): Generator {
    // try {
    //    const user = yield call(Api.fetchUser, action.payload.userId); // replace Api.fetchUser with your API function
    //    yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    // } catch (e) {
    //    yield put({type: "USER_FETCH_FAILED", message: e.message});
    // }
 }
 
 function* mySaga(): Generator {
   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
 }
 
 export default mySaga;