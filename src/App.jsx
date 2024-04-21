import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FSDcomp from "./Pages/FSD";
import DSComp from "./Pages/DS";
import CSComp from "./Pages/CS";
import CCComp from "./Pages/CC";
import NavInternal from "./Components/InternalNav/NavInternal";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <NavInternal />
        <article className="blog-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FSD" element={<FSDcomp />} />
            <Route path="/DS" element={<DSComp />} />
            <Route path="/CS" element={<CSComp />} />
            <Route path="/CC" element={<CCComp />} />
            <Route path="*" element={<h3>No Page Found</h3>} />
          </Routes>
        </article>
      </>
    </BrowserRouter>
  );
}

export default App;
