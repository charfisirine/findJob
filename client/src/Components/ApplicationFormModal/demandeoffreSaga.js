import { put, call } from "redux-saga/effects";
import axios from "axios";
import { createSliceSaga } from "redux-toolkit-saga";
import { setDeleteDemandeOffreSlice, setDemandeOffreSlice } from "./demandeoffreSlice";
// const BASE_URL = 'https://someurl.com';

export const demandeoffreSaga = createSliceSaga({
  name: "demandeoffreSaga",
  caseSagas: {
    *getDemandeOffresList(data) {
      const response = yield call(() =>
        axios.get("http://localhost:8000/api/demandes")
      );
      yield put(setDemandeOffreSlice(response.data));
    },

    *deleteDemandeOffre(data) {
      yield call(() =>
        axios.delete("http://localhost:8000/api/demandes/" + data.payload.id)
      );
      yield put(setDeleteDemandeOffreSlice(data.payload.id));
    },

    *getFile(data) {
      const response = yield call(() =>
        axios({
          url: "http://localhost:8000/api/cvs/public/gi2aXlb2dVAA08rqfVy4YdIK3LUFwPpx0vNLGCuf.pdf",
          method: "GET",
          responseType: "blob", // important
        })
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.pdf"); //or any other extension
      document.body.appendChild(link);
      link.click();
      // yield put(setDemandeOffreSlice(response.data));
    },

    *postDemandeOffresForm(action) {
      try {
        const response = yield call(() =>
          axios.post(
            "http://localhost:8000/api/demandes",
            action.payload,
            //pour conaitre que c'est un fichier (c'est du data mouch chaine 3adi  )
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
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
  },
});
// getCandidatsList ,putCandidats hethom les fonction illi definithom texportihom
export const { getDemandeOffresList,deleteDemandeOffre,  postDemandeOffresForm, getFile } =
  demandeoffreSaga.actions;
