import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getSimpsons} from "../features/simpsonsSlice";
import { ISimpson } from "../types/interfaces";
import Singlesimpson from "./Singlesimpson";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SimpsonsList = () => {
  const navigate=useNavigate()
    const dispatch=useAppDispatch()
    const {simpsons}=useAppSelector(state=>state.simpsons)
    const {loading}=useAppSelector(state=>state.simpsons)
  console.log(simpsons);
  useEffect(() => {
    if(simpsons.length==0){
      dispatch(getSimpsons())
    }
  }, [])

  return (
    <>
    {
      loading ? (<h1 className="text-center text-3xl font-semibold mt-[10rem]">LOADING...</h1>)
      :
      (
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
        <button className="block m-auto text-5xl text-slate-500 mt-2 bg-transparent"
        onClick={()=>navigate("/add")}
        ><AiOutlinePlusCircle/>
        </button>
      </div>
      )
    }
    </>

  )
}

export default SimpsonsList