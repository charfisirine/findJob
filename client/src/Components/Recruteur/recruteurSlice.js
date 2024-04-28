import { createSlice } from '@reduxjs/toolkit'

const initialState = {
//awil mat7il il page ijiki tableau candidat fera8
 recruteurs:null,
 loading: true
}

export const recruteurSlice = createSlice({
  name: 'recruteurs',
  initialState,
  //reducers c'est un objet de fonction qui peut modifier le initial state 
  reducers: {
     //wa9t 3andik parametre inti bech t7adid il valeu mte3hom ta3mil action 
    setRecruteurSlice: (state, action) => {
      //payload ki 7ajtik b valeur tista3milha teb3a il documentation mte3 il redux
      state.recruteurs = action.payload
      state.loading = false
    },
    
    setBanRecruteurSlice: (state, action) => {
      const { id } = action.payload;
      const index = state.recruteurs.findIndex(recruteur => recruteur.id === id);
      //hethi une fois mal9itichh il indice traja3 -1
      if (index !== -1) {
         //kif ta3mil clique sur le bouton ban une fois le recruteur est banné wt3awid tinzil 3lih yraj3ou mouchh banéé wil 3aks  bil 3aks  
          state.recruteurs[index] = { ...state.recruteurs[index], banned: state.recruteurs[index].banned === 0 ? 1 : 0 };
      }
    },
    setDeleteRecruteurSlice: (state, action) => {
      state.recruteurs = state.recruteurs.filter(elt => elt.id != action.payload)
    },
  },
})
//ay fonction tdefiniha texportiha hna

export const { setRecruteurSlice, setBanRecruteurSlice, setDeleteRecruteurSlice } = recruteurSlice.actions