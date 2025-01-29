import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Blog from "./Blog";
import MainInfo from "./MainInfo";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import SideInfo from "./SideInfo";
import NoPage from "./NoPage";
import ContactMe from "./ContactMe";

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row gap-10 w-full min-h-[100vh] bg-[#121212] px-4 sm:px-12 md:px-24 py-12 justify-center">
        <SideInfo />
        <main>
          <Routes>
            <Route path="/" element={<MainInfo />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
