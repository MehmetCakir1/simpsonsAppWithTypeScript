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
        removeItem: (state,action : PayloadAction<any>)=> {
            state.simpsons = state.simpsons?.filter((item:any)=>item.id!=action.payload)
        },
        upItem:(state,action : PayloadAction<any>)=> {
            let upper = state.simpsons?.find((item:any)=>item.id==action.payload)
            let upperIndex=state.simpsons.indexOf(upper)
            if(upperIndex==0){
                return
            }else{
                state.simpsons?.splice(upperIndex,1)
                state.simpsons?.splice(upperIndex-1,0,upper)
            }
        },
        downItem:(state,action : PayloadAction<any>)=> {
            let lower = state.simpsons?.find((item:any)=>item.id==action.payload)
            let lowerIndex=state.simpsons.indexOf(lower)
            if(lowerIndex==state.simpsons.length-1){
                return
            }else{
                state.simpsons?.splice(lowerIndex,1)
                state.simpsons?.splice(lowerIndex+1,0,lower)
            }
        },
        addNewItem:(state,action: PayloadAction<ISimpson>)=>{
            state.simpsons=[...state.simpsons,action.payload]
        }
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

export const {removeItem,upItem,downItem,addNewItem}=simpsonsSlice.actions
export default simpsonsSlice.reducer