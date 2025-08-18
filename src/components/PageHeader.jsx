import React from "react";

const PageHeader = ({ title, description }) => {
    return (
        <section className="bg-white w-full py-20">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between">
                {/* Заголовок слева */}
                <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 md:mb-0">
                    {title}
                </h1>

                {/* Описание справа */}
                <div className="text-xl md:text-2xl text-black max-w-md md:max-w-lg">
                    <p dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br>") }} />
                </div>
            </div>
        </section>
    );
};

export default PageHeader;