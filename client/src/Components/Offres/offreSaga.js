import { put, call } from 'redux-saga/effects';
import { setOffreSlice, setBanOffreSlice } from './offreSlice';
import axios from "axios"
import {createSliceSaga} from "redux-toolkit-saga"
// const BASE_URL = 'https://someurl.com';

export const offreSaga = createSliceSaga({
    name: "offreSaga",
    caseSagas: {
        *getOffresList(data) {
            const response = yield call(()=> axios.get("http://localhost:8000/api/offres"))
            yield put(setOffreSlice(response.data)) 
        },

        *postOffreForm(action) {
            try {
              const response = yield call(() =>
                axios.post(
                  "http://localhost:8000/api/offres", 
                  action.payload
                )
              );
              if (response.status === 201) {
                console.log("...");
              }
            } catch (error) {
              console.log(error);
            }
          },
        // *putOffres(data) {
        //     yield call(()=> axios.put(`http://localhost:8000/api/candidat/${data.payload.id}/toggle-ban`))
        //     yield put(setBanOffreSlice(data.payload))//hethi maktibnech reponse heka 3lmeh 3milnaech response 
        // },
    }
})
// getCandidatsList ,putCandidats hethom les fonction illi definithom texportihom
export const {getOffresList, postOffreForm} = offreSaga.actions