import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
    // active:{
    //     id: 'ABC123',
    //     title:'',
    //     body:'',
    //     date: 123456,
    //     imageUrls: [], // https://foto1.jpg,https://foto2.jpg,https://foto3.jpg
    // }
  },
  reducers: {
    savingNewNotes:(state)=>{
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
        state.notes.push( action.payload );
        state.isSaving = false;
    },
    setActiveNote: (state, action) => {
        state.active = action.payload;
        state.messageSaved = '';
    },
    setNotes: (state, action) => {
      state.notes= action.payload

    },
    setSaving: (state) => {
        state.isSaving= true;
        state.messageSaved = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map(note =>{
        if( note.id === action.payload.id) {
          return action.payload;
        }
        return note
      });
      state.messageSaved = `${action.payload.title}, actualizada correctamente`

    },
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter( note => note.id !== action.payload);
    },

    setPhotosToActiveNote: (state,action)=>{
      state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
      state.isSaving = false;
    },
    clearNotesLogout: (state,action)=>{
      state.isSaving = false;
      state.messageSaved = '';
      state.active = null;
      state.notes = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteById,
  savingNewNotes,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} = journalSlice.actions;
