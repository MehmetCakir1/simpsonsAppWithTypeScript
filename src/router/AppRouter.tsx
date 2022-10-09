import { BrowserRouter,Routes,Route } from "react-router-dom"
import AddNewItem from "../pages/AddNewItem"
import Detail from "../pages/Detail"
import Home from "../pages/Home"

const AppRouter = () => {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddNewItem/>}/>
        <Route path="/details/:id" element={<Detail/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppRouter