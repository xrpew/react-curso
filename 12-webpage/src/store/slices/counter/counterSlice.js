import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        showPicture: false
    },
    reducers: {
        changeShow: (state, /* action */ ) => {
            if(state.showPicture){
                state.showPicture = false;
            }else{
                state.showPicture = true;
                
            }
        },
    }
});


// Action creators are generated for each case reducer function
export const { changeShow } = counterSlice.actions;