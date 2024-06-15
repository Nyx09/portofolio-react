import React from "react";

export default function Navbar (){
    return(
        <nav className="w-full px-5 sm:px-10 py-5 shadow-xl 
                        backdrop-blur-lg fixed top-0 z-10">
                            <div className="container flex flex-col lg:flex-row
                            gap-5 justify-between w-full 
                            items-center max-w-5xl mx-auto">
                                <h3 className="text-3xl text-emerald-500 font-bold">
                                    Portofolio 
                                    </h3>

                            </div>
        </nav>
    )
}