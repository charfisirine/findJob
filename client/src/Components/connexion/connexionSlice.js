import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(window.localStorage.getItem("user")) || null,
  type: window.localStorage.getItem("type") || null,
  //matloub il token nsajloh fil  localStorage bech ki nrefrechi il page maydi3ich il token
  token: window.localStorage.getItem("token") || null,
};

export const connexionSlice = createSlice({
  name: "connexion",
  initialState,
  reducers: {
    setUserSlice: (state, action) => {
      state.user = action.payload.user;
      state.type = action.payload.type;
      state.token = action.payload.token;

      if (action.payload.token) {
        window.localStorage.setItem("token", action.payload.token);
        window.localStorage.setItem(
          "user",
          JSON.stringify(action.payload.user)
        );
        window.localStorage.setItem("type", action.payload.type);
      } else {
        window.localStorage.clear();
      }
    },
  },
});

export const { setUserSlice } = connexionSlice.actions;
