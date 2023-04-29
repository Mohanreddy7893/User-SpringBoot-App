import Home from "./Components/Home";
import Createuser from "./Components/Createuser";
import User from "./Components/User";
import Edituser from "./Components/Edituser";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Home/>
            <Routes>
                <Route path="/" element={<Createuser/>}></Route>
                <Route path="/user" element={<User/>}></Route>
                <Route path="/Edit/:index" element={<Edituser/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App