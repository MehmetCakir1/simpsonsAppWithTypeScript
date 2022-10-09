import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getSimpsons } from "../features/simpsonsSlice";
import { ISimpson } from "../types/interfaces";
import Singlesimpson from "./Singlesimpson";

const SimpsonsList = () => {
    const dispatch=useAppDispatch()
    const {simpsons}=useAppSelector(state=>state.simpsons)
    const {loading}=useAppSelector(state=>state.simpsons)
  // console.log(loading);
  
  useEffect(() => {
    dispatch(getSimpsons())
  }, [])

  if(!loading){
    <h1 className="text-center text-3xl font-semibold">LOADING...</h1>
  }
  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-4 text-green-500">SIMPSONS</h1>
      {
        simpsons?.length==0 ? (
          <button className="block m-auto bg-red-400 rounded-lg px-4 py-1 font-semibold my-9" onClick={()=>dispatch(getSimpsons())}>Get Back</button>
        )
        :
        (  simpsons?.map((item:ISimpson)=>{
          return(
            <Singlesimpson key={item.id} item={item}/>
          )
        }))
      }
    
    </div>
  )
}

export default SimpsonsList