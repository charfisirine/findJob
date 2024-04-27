import { configureStore , combineReducers} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { candidatSaga } from '../Components/Condidat/candidatSaga';
import {candidatSlice} from '../Components/Condidat/candidatSlice';
import { recruteurSaga } from '../Components/Recruteur/recruteurSaga';
import { recruteurSlice } from '../Components/Recruteur/recruteurSlice';
import { connexionSaga } from '../Components/connexion/connexionSaga';
import { connexionSlice } from '../Components/connexion/connexionSlice';
import { offreSaga } from '../Components/Offres/offreSaga';
import { offreSlice } from '../Components/Offres/offreSlice';


// Create a saga middleware

const rootReducers = combineReducers({
    // Add  reducers here
    candidat: candidatSlice.reducer,
    recruteur: recruteurSlice.reducer,
    user: connexionSlice.reducer,
    offre:offreSlice.reducer,

  });

const rootSagas = function* rootSaga() {
    yield all([
        candidatSaga.saga(),
        recruteurSaga.saga(),
        connexionSaga.saga(),
        offreSaga.saga(),
    ])
}

const sagaMiddleware = createSagaMiddleware(); 

export const store = configureStore({
    reducer: rootReducers,
    middleware:getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSagas);
