import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getSimpsons } from "../features/simpsonsSlice";
import { ISimpson } from "../types/interfaces";
import Singlesimpson from "./Singlesimpson";

const SimpsonsList = () => {
    const dispatch=useAppDispatch()
    const {simpsons}=useAppSelector(state=>state.simpsons)
  // console.log(simpsons);
  
  useEffect(() => {
    dispatch(getSimpsons())
  }, [])
  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-4 text-green-500">SIMPSONS</h1>
      {simpsons?.map((item:ISimpson,index:number)=>{
        return(
          <Singlesimpson key={item.id} item={item} index={index}/>
        )
      })}
    </div>
  )
}

export default SimpsonsList