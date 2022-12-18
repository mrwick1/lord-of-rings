import { configureStore } from "@reduxjs/toolkit";
import charachterReducer from '../features/characters/charactersSlice'
export default configureStore({
    reducer:{
        characters:charachterReducer,
    },
    
})