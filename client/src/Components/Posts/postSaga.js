import { put, call } from 'redux-saga/effects';
import { setCandidatSlice, setBanCandidatSlice } from './postSlice';
import axios from "axios"
import {createSliceSaga} from "redux-toolkit-saga"
// const BASE_URL = 'https://someurl.com';

export const postSaga = createSliceSaga({
    name: "postSaga",
    caseSagas: {
        *getPostsList(data) {
            const response = yield call(()=> axios.get("http://localhost:8000/api/offres"))
            yield put(setCandidatSlice(response.data)) 
        },

    }
})
// getCandidatsList ,putCandidats hethom les fonction illi definithom texportihom
export const {getPostsList, putPosts} = postSaga.actions