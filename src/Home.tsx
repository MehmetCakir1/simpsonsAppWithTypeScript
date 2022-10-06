import { useAppSelector } from "./app/hooks"

const Home = () => {
    const {simpsons}=useAppSelector(state=>state.simpsons)
  console.log(simpsons);
  return (
    <div>Home</div>
  )
}

export default Home