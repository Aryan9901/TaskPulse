import { Button } from "@/components/ui/button";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "@/components/elements/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Home />} />
        <Route path="/login" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
