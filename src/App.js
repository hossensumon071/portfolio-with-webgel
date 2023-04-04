import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useRef } from "react";
import { useCustomCursor } from "./hooks/useCustomCursor";

function App() {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);

  
  useSmoothScroll();
  useCustomCursor(innerCursorRef, outerCursorRef);
  return (
    <div className="app">
      <div className="noise"></div>
      <CustomCursor innerCursorRef={innerCursorRef} outerCursorRef={outerCursorRef}/>
      <Navbar/>
      <Socials/>
      <Routes>
        <Route path="" element={<Home/>} />
      </Routes>
      <Navbar footerNav/>
      <Footer/>
    </div>
  );
}

export default App;
