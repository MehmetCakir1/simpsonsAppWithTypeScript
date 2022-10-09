import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

const Detail = () => {
  const {id}=useParams()
  const {state}=useLocation()
  const {simpsons}=useAppSelector(state=>state.simpsons)
  const {loading}=useAppSelector(state=>state.simpsons)
  const navigate=useNavigate()
// console.log(state)
// console.log(loading)
const {name,avatar,job,description}=state
console.log(avatar)


  return (
    <> 
     {
      loading ?(
        <h1 className='text-center text-3xl font-semibold mt-5'>LOADING...</h1>
      )
      :
      (
        <div className='flex flex-col items-center justify-center max-w-xl m-auto mt-9'>
        <img src={avatar.includes("revision") ? avatar.split("revision")[0] : avatar.startsWith("https://") && avatar.endsWith(".png")|| avatar.endsWith(".jpg") ? avatar : "images/Simpson.png"} alt={name} className="h-[250px]" />
        <p className='font-bold text-2xl py-3 text-red-800'>{name}</p>
        <p className='text-xl py-1'>{job}</p>
        <p className='indent-3 py-1'>{description}</p>
        <button className='px-4 py-1 bg-blue-700 text-white' onClick={()=>navigate("/")}>Go Back</button>
      </div>
      )
    }
    </>
  
  )
}

export default Detail