import { put, call } from 'redux-saga/effects';
import { setCandidatSlice, setBanCandidatSlice } from './candidatSlice';
import axios from "axios"
import {createSliceSaga} from "redux-toolkit-saga"
// const BASE_URL = 'https://someurl.com';

export const candidatSaga = createSliceSaga({
    name: "candidatSaga",
    caseSagas: {
        *getCandidatsList(data) {
            const response = yield call(()=> axios.get("http://localhost:8000/api/candidats"))
            yield put(setCandidatSlice(response.data)) 
        },
        *putCandidats(data) {
            yield call(()=> axios.put(`http://localhost:8000/api/candidat/${data.payload.id}/toggle-ban`))
            yield put(setBanCandidatSlice(data.payload))//hethi maktibnech reponse heka 3lmeh 3milnaech response 
        },
    }
})
// getCandidatsList ,putCandidats hethom les fonction illi definithom texportihom
export const {getCandidatsList, putCandidats} = candidatSaga.actions