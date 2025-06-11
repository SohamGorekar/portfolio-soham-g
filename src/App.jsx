import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";

import { NotFound } from "./Pages/NotFound";
import { Toaster } from "./Components/ui/toaster";
import SkillsPage from "./Pages/SkillsPage";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
