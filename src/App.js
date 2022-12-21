import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";


function App() {
  return (
  <>
<Router>
  <Navbar/>
  <Alert message="Submitted suceesfully "/>
<div className="container ">
  <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path="/aboutme" element={<About/>}/>
  </Routes>
  </div>
</Router>

  </>
  )
}

export default App;
