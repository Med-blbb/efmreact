import {createSlice} from "@reduxjs/toolkit"

export const StgSlice = createSlice({
  name: "stg",
  initialState: {
    stgs: [
      {
        image:
          "https://i.pinimg.com/564x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg",
        nom: "Zaid",
        prenom: "Riyad",
        pass: "1234",
        fonction: "Ingenieur",
      },
      {
        image:
          "https://i.pinimg.com/564x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg",
        nom: "Zaid2",
        prenom: "Riyad2",
        pass: "12345",
        fonction: "Ingenieur",
      },
    ],
    isConnect: false,
  },
  reducers: {
    addStg: (state, action) => {
      state.stgs = [...state.stgs, action.payload];
    },
    changeConnect: (state, action) => {
      state.isConnect = action.payload;
    },
  },
});

export const { addStg, changeConnect } = StgSlice.actions;
export default StgSlice.reducer