import {configureStore, createSlice} from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: 'api',
  initialState: {data: "eminem"},
  reducers:{
    addToState(state,action){
      const apiItem = action.payload
      state.data = apiItem; //Add to state.data
    }
  }
})

export const apiActions = apiSlice.actions;

const store = configureStore({
  reducer: apiSlice.reducer
})

export default store;