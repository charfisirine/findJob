import { createSlice } from '@reduxjs/toolkit'

const initialState = {
//awil mat7il il page ijiki tableau candidat fera8
 offres: null,
 loading: true
}

export const offreSlice = createSlice({
  name: 'offres',
  initialState,
  //reducers c'est un objet de fonction qui peut modifier le initial state 
  reducers: {
     //wa9t 3andik parametre inti bech t7adid il valeu mte3hom ta3mil action 
     setOffreSlice: (state, action) => {
      //payload ki 7ajtik b valeur tista3milha teb3a il documentation mte3 il redux
      state.offres = action.payload
      state.loading = false
    },
    setOffreStatus: (state, action) => {
      //payload ki 7ajtik b valeur tista3milha teb3a il documentation mte3 il redux
      state.offres = state.offres.map((offre)=> {
        if (offre.id == action.payload.id) {
          return {
            ...offre,
            status: action.payload.status
          }
        } else {
          return {...offre}
        }
      })
    },
    
    // setBanOffreSlice: (state, action) => {
    //     const { id } = action.payload;
    //     const index = state.candidats.findIndex(candidate => candidate.id === id);
    //     //hethi une fois mal9itichh il indice traja3 -1
    //     if (index !== -1) {
    //        //kif ta3mil clique sur le bouton ban une fois le candidat est banné wt3awid tinzil 3lih yraj3ou mouchh banéé wil 3aks  bil 3aks  
    //         state.candidats[index] = { ...state.candidats[index], banned: state.candidats[index].banned === 0 ? 1 : 0 };
    //     }
    //   },
  },
})
//ay fonction tdefiniha texportiha hna

export const { setOffreSlice, setBanOffreSlice, setOffreStatus } = offreSlice.actions;
