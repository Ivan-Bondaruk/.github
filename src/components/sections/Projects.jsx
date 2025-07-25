import { RevealOnScroll } from "../RevealOnScroll";
import {useTranslation} from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            {t('featured_projects')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">WeC</h3>
              <p className="text-gray-400 mb-4">
                Modern application for engineers, researchers and wind energy enthusiasts
                that helps calculate key parameters of wind turbines.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["WinUI", "C#"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://ivan-bondaruk.github.io/WeC/about/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {t('view_project')} →
                </a>
              </div>
            </div>

            <div
                className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Ohm's Law</h3>
              <p className="text-gray-400 mb-4">
                Modern application for calculate Ohm's Law parameters.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Kotlin"].map((tech, key) => (
                    <span
                        key={key}
                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                    href="https://github.com/Ivan-Bondaruk/Ohms-Law-Android"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {t('view_project')} →
                </a>
              </div>
            </div>

            <div
                className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">SupermarketApp</h3>
              <p className="text-gray-400 mb-4">
                SupermarketApp is a template that you can use to create your own app for your shop.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Kotlin"].map((tech, key) => (
                    <span
                        key={key}
                        className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                    href="https://github.com/Ivan-Bondaruk/SupermarketApp"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {t('view_project')} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
