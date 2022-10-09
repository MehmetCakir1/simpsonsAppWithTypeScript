import { ISimpson } from '../types/interfaces'
import {BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs"
import {FaTrashAlt} from "react-icons/fa"
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {removeItem,upItem,downItem} from "../features/simpsonsSlice"
import { useNavigate } from 'react-router-dom'

interface ISimpsonProps {
  item : ISimpson,
}
const Singlesimpson = ({item}:ISimpsonProps) => {
  const {simpsons}=useAppSelector(state=>state.simpsons)
  const {name,avatar,id}=item
  const dispatch=useAppDispatch()
  const navigate=useNavigate()
  // console.log(index)
  return (
    <div className='flex items-center justify-between container m-auto max-w-2xl my-1 border-b-2 border-slate-300 py-2'>
      <p className='w-1/12 flex items-center justify-center text-lg'>{simpsons.indexOf(item)+1}</p>
      <img src={avatar.split("revision")[0]} alt={name} className=" h-[90px] w-2/12 sm:w-1/12 max-w-[60px] cursor-pointer"
      onClick={()=>navigate(`/details/${id}`,{state:item})}
      />
      <h1 className='w-5/12 sm:w-6-12 text-lg cursor-pointer'
      onClick={()=>navigate(`/details/${id}`,{state:item})}
      >{name}</h1>
      <button className='w-1/12 flex items-center justify-center text-2xl text-cyan-500 bg-transparent'
      onClick={()=>dispatch(upItem(id))}
      ><BsFillArrowUpCircleFill/></button>
      <button className='w-1/12 flex items-center justify-center text-2xl text-purple-500 bg-transparent'
      onClick={()=>dispatch(downItem(id))}
      ><BsFillArrowDownCircleFill/></button>
      <button className='w-1/12 flex items-center justify-center text-2xl text-red-500 bg-transparent'
      onClick={()=>dispatch(removeItem(id))}
      ><FaTrashAlt/></button>
    </div>
  )
}

export default Singlesimpson