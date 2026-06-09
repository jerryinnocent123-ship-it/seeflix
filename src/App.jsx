import Home from "./pages/Home";
import About from "./pages/About"
import Media from "./pages/Media"
import Contact from "./pages/Contact"
import AIAssistant from "./components/AIAssistant";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/media" element={<Media/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      
    </Routes> 
    </BrowserRouter>
    
    {/* Global AI Assistant - Available on all pages */}
    <AIAssistant />
      



    </>
  );
}

export default App;
