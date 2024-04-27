import { put, call } from 'redux-saga/effects';
import axios from "axios"
import {createSliceSaga} from "redux-toolkit-saga"
import { setBanRecruteurSlice, setRecruteurSlice } from './recruteurSlice';
// const BASE_URL = 'https://someurl.com';

export const recruteurSaga = createSliceSaga({
    name: "recruteurSaga",
    caseSagas: {
        *getRecruteurList(data) {
            const response = yield call(()=> axios.get("http://localhost:8000/api/recruteurs"))
            yield put(setRecruteurSlice(response.data)) 
        },
        *putRecruteurs(data) {       
            yield call(()=> axios.put(`http://localhost:8000/api/recruteur/${data.payload.id}/toggle-ban`))
            yield put(setBanRecruteurSlice(data.payload))//hethi maktibnech reponse heka 3lmeh 3milnaech response 
        },
    }
})
// getRecruteurList ,putRecruteurs hethom les fonction illi definithom texportihom
export const {getRecruteurList, putRecruteurs} = recruteurSaga.actions