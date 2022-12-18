import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
    name:'characters',
    initialState:{
        characters:[],
        pages:0,
        activePage:1,
        rows:10,
        sortBy:'asc',
        searchName:'',
        races:[],
        selectedRaces:[],
        gender:'',
        selectedChar:{}

    },
    reducers:{
        setCharacters:(state , action) => {
            state.characters = action.payload;
        },
        setPages:(state , action) => {
            state.pages = action.payload;
        },
        setRows:(state , action) => {
            state.rows = action.payload;
        },
        setSortBy:(state, action) =>{
            state.sortBy = action.payload
        },
        setActivePage:(state, action) =>{
            state.activePage = action.payload
        },
        setSearchName:(state, action) =>{
            state.searchName = action.payload
        },
        setRaces:(state, action) =>{
            state.races = action.payload
        },
        setSelectedRaces:(state, action) =>{
            state.selectedRaces = [...action.payload]
        },
        setSelectedGender:(state, action) =>{
            state.gender = action.payload
        },
        setSelectedChar:(state, action) =>{
            state.selectedChar = action.payload
        },
        

    }
})

export const {setCharacters , setPages , setRows, setSortBy, setActivePage, setSearchName ,setRaces , setSelectedRaces, setSelectedGender , setSelectedChar} = charactersSlice.actions;

export default charactersSlice.reducer;