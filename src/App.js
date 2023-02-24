import "./App.css";

import Header from "./components/Header";
import Main from './pages/Main';
import About from "./pages/About";
import Nav from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Dresses from "./pages/Dresses";
import Pants from "./pages/Pants";
import Shoes from "./pages/Shoes";
import Tops from "./pages/Tops";
import Navbar from "./components/Navbar";

export default function App() {

  
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route  path="/" element ={<Main />}/>
        <Route  path="/about" element ={<About />}/>
        <Route  path="/dresses" element ={<Dresses />}/>
        <Route  path="/pants" element ={<Pants />}/>
        <Route  path="/shoes" element ={<Shoes />}/>
        <Route  path="/tops" element ={<Tops />}/>
       {/* // <Route  path="/price/:symbol" element ={<Price />}/>
 
        <Route path='*' element={<Navigate to="/" />} />

          <Route path='*' element="Page does not exist" /> */}

      </Routes>
    </div>
  );
}
