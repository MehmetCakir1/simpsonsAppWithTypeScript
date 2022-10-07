import { ISimpson } from '../types/interfaces'
import {BsFillArrowUpCircleFill,BsFillArrowDownCircleFill} from "react-icons/bs"
import {FaTrashAlt} from "react-icons/fa"

interface ISimpsonProps {
  item : ISimpson,
  index: number
}
const Singlesimpson = ({item}:ISimpsonProps,{index}:ISimpsonProps) => {
  const {name,avatar,id}=item
  console.log(index)
  return (
    <div className='flex items-center justify-between container m-auto max-w-2xl my-1 border-b-2 border-slate-300 py-2'>
      <p className='w-1/12 flex items-center justify-center text-lg'>{1}</p>
      <img src={avatar.split("revision")[0]} alt={name} className=" h-[90px] w-2/12 sm:w-1/12 max-w-[60px]"/>
      <h1 className='w-5/12 sm:w-6-12 text-lg'>{name}</h1>
      <button className='w-1/12 flex items-center justify-center text-2xl text-cyan-500 bg-transparent'><BsFillArrowUpCircleFill/></button>
      <button className='w-1/12 flex items-center justify-center text-2xl text-purple-500 bg-transparent'><BsFillArrowDownCircleFill/></button>
      <button className='w-1/12 flex items-center justify-center text-2xl text-red-500 bg-transparent'><FaTrashAlt/></button>
    </div>
  )
}

export default Singlesimpson