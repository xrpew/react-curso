import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        showMenu: false
    },
    reducers: {
        changeShowM: (state, /* action */ ) => {
            if(state.showMenu){
                state.showMenu = false;
            }else{
                state.showMenu = true;
                
            }
        },
    }
});


// Action creators are generated for each case reducer function
export const { changeShowM } = menuSlice.actions;