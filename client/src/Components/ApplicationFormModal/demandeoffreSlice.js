import { createSlice } from '@reduxjs/toolkit'

const initialState = {
//awil mat7il il page ijiki tableau candidat fera8
 demandeoffres:null,
 loading: true
}

export const demandeoffreSlice = createSlice({
  name: 'demandeoffres',
  initialState,
  //reducers c'est un objet de fonction qui peut modifier le initial state 
  reducers: {
     //wa9t 3andik parametre inti bech t7adid il valeu mte3hom ta3mil action 
     setDemandeOffreSlice: (state, action) => {
      //payload ki 7ajtik b valeur tista3milha teb3a il documentation mte3 il redux
      state.demandeoffres = action.payload
      state.loading = false
    },
    setDeleteDemandeOffreSlice: (state, action) => {
      state.demandeoffres = state.demandeoffres.filter(elt => elt.id != action.payload)
    },
    
  },
})
//ay fonction tdefiniha texportiha hna

export const { setDemandeOffreSlice, setDeleteDemandeOffreSlice } = demandeoffreSlice.actions;
