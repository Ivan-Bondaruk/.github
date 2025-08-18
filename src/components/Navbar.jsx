import { navPages } from "../constants";
import { Link, useLocation } from "react-router-dom";
import {useRef, useState} from "react";
import {faviconImg} from "../utils/index.js";

const Navbar = () => {
    const location = useLocation();
    const [hovered, setHovered] = useState(null);

    const timeoutRef = useRef(null);

    const handleMouseEnter = (name) => {
        clearTimeout(timeoutRef.current);
        setHovered(name);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHovered(null);
        }, 200); // задержка 200 мс
    };
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={faviconImg} alt="Apple" width={32} height={32} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navPages.map((nav) => (
              <div
                  key={nav.name}
                  className="relative px-5 text-sm cursor-pointer transition-all"
                  onMouseEnter={() => handleMouseEnter(nav.name)}
                  onMouseLeave={handleMouseLeave}
              >
                  <Link
                      to={nav.path}
                      className={`${
                          location.pathname === nav.path
                              ? "text-black font-semibold"
                              : "text-black hover:text-gray-700"
                      }`}
                  >
                      {nav.name}
                  </Link>

                  {/* Dropdown */}
                  {nav.children && hovered === nav.name && (
                      <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-max z-50">
                          {nav.children.map((child) => (
                              <Link
                                  key={child.name}
                                  to={child.path}
                                  className="block px-6 py-2 text-black hover:bg-gray-100 whitespace-nowrap"
                              >
                                  {child.name}
                              </Link>
                          ))}
                      </div>
                  )}
              </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar