import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IStateProps,ISimpson } from "../types/interfaces";

const initialState:IStateProps={
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    simpsons:[],
    loading:false,
    error:"",
}


export const getSimpsons = createAsyncThunk(
    'simpsons/getSimpsons', async() => {
        return fetch("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
        .then(res=>{
            return res.json() 
        })
    }
)

const simpsonsSlice = createSlice({
    name:"simpsons",
    initialState,
    reducers:{

    },
    extraReducers(builder:any){
        builder.addCase(getSimpsons.pending, (state: IStateProps) => {
            state.loading = true;
          })
        builder.addCase(getSimpsons.fulfilled,(state:IStateProps,action:PayloadAction<any>)=>{
            state.loading=false;
            state.simpsons=(action.payload) 
        })
        builder.addCase(getSimpsons.rejected,(state:IStateProps)=>{
            state.loading=false;
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            state.error="An Error Occured"
        })
    }
})


export default simpsonsSlice.reducer