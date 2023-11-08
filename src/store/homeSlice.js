import { createSlice } from '@reduxjs/toolkit'




//exporting to import in store.js
export const homeSlice = createSlice({
  name: 'home',
  initialState :{
    url:{name:"jsdev"},
    genres:{}
  },

  //reducers have the action and we export it at the bottom
  reducers: {
    getApiConfiguration:(state,action)=>{
        //
        state.url = action.payload;
    },
    getGenres:(state,action)=>{

        state.genres=action.payload;
    }

  },
})

// Action creators are generated for each case reducer function
export const {getApiConfiguration,getGenres  } = homeSlice.actions

export default homeSlice.reducer