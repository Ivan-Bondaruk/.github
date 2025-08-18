import { useRef } from "react";
import { Link } from "react-router-dom";
import { ohmsNav } from "../constants";

const OhmsProducts = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -200 : 200,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="bg-white py-4">
            <div className="flex justify-center">
                <ul className="flex gap-6 overflow-x-auto no-scrollbar px-4">
                    {ohmsNav.map((item) => (
                        <li key={item.name} className="flex-shrink-0 text-center min-w-[80px]">
                            <Link
                                to={item.path}
                                className="flex flex-col items-center hover:text-gray text-black transition"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-12 h-12 mb-1"
                                />
                                <span className="text-xs">{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default OhmsProducts;