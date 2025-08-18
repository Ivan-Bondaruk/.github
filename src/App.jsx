import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OhmsLaw from './components/sections/OhmsLaw';
import OhmsiOS from './components/sections/OhmsiOS';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Sentry from '@sentry/react';
import Privacy from "./components/sections/privacy/Privacy.jsx";
import OhmsLawPrivacy from "./components/sections/privacy/OhmsLawPrivacy.jsx";
import Home from "./components/sections/Home.jsx";
import UpFooter from "./components/UpFooter.jsx";

const App = () => {
  return (
      <Router>
          <main className="bg-white min-h-screen text-black">
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />

                  <Route path="/ohms-law" element={<OhmsLaw />} />
                  <Route path="/ohms-law/ios" element={<OhmsiOS />} />

                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/privacy/software/ohmslaw" element={<OhmsLawPrivacy />} />
              </Routes>
              <UpFooter/>
              <Footer />
          </main>
      </Router>
  )
}

export default Sentry.withProfiler(App);
