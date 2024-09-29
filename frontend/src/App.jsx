import { Button } from "@/components/ui/button";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "@/components/elements/Navbar";
import { ThemeProvider } from "@/context/ThemeProvider";
import Project from "./pages/Project/Project";
import NewProject from "./pages/Project/NewProject";
import ProjectDetails from "./pages/Project/ProjectDetails";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/project/new" element={<NewProject />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/login" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
