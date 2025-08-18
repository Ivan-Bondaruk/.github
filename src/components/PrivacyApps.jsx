import {Link} from "react-router-dom";

const items = [
    {
        title: "ibOhm's Law",
        description: "Include all platforms version.",
        path: "/privacy/software/ohmslaw",
    },
];

const PrivacyApps = ({title}) => {
    return (
        <section className="bg-white w-full py-20 px-4 text-white">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h1 className="text-6xl md:text-7xl font-bold text-black mb-4 text-left">
                    {title}
                </h1>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {items.map((item) => (
                    <Link
                        key={item.title}
                        to={item.path}
                        className="bg-gray-900 hover:bg-gray-800 rounded-xl p-6 flex flex-col justify-between transition"
                    >
                        <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400 mb-4">{item.description}</p>
                        <span className="text-blue-500 font-medium">Learn more →</span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default PrivacyApps;