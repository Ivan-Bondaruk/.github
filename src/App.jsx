import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import {OhmsLaw} from "@/components/pages/software/OhmsLaw.jsx";
import {Navbar} from "@/components/Navbar.jsx";
import { HashRouter as Router } from "react-router-dom";
import {OhmsLawPolicy} from "@/pages/policy/OhmsLawPolicy.jsx";

function App() {
  return (
      <Router>
          <main className="min-h-screen ">
              <Navbar />
              <Routes>
                  <Route index element={<Home />} />
                  <Route path="/software/ohmslaw" element={<OhmsLaw />} />
                  <Route path="/software/ohmslaw/policy" element={<OhmsLawPolicy />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </main>
      </Router>
  );
}

export default App;
