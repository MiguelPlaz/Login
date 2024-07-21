import { BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Contact from "../Screens/Contact";

function App() {
    return <div className="">
    <Router>
     <NavBar/>
        
    <Routes>
        <Route path="/home" element={Home/>}/>    
        <Route path="/contact" element={Contact/>}/>
        </Routes>  
    </Router>    
    </div>
}

export default App