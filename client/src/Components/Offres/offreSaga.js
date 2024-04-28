import { put, call } from 'redux-saga/effects';
import { setOffreSlice, setBanOffreSlice, setOffreStatus } from './offreSlice';
import axios from "axios"
import { createSliceSaga } from "redux-toolkit-saga"

export const offreSaga = createSliceSaga({
    name: "offreSaga",
    caseSagas: {
        *getOffresList(data) {
            const response = yield call(() => axios.get("http://localhost:8000/api/offres"))
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



        *acceptOrRefuseOffre(action) {
            try {
                const { id, status } = action.payload;
                const response = yield call(() =>
                    axios.put(`http://localhost:8000/api/offre/${id}/accept-refuse`, { status })
                );
                if (response.status === 200) {
                    console.log("Offre status updated successfully");
                    yield put(setOffreStatus({ id, status }))
                }
            } catch (error) {
                console.log(error);
            }
        },
    }
})

export const { getOffresList, postOffreForm, putOffreStatus, acceptOrRefuseOffre } = offreSaga.actions;
