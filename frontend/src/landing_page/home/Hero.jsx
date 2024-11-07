import React from "react";

function Hero() {
  return (
    <div className="container p-5">

        <div className="row text-center ">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className=" mb-5"
        />
        <h1 className="text-5xl font-medium mt-5 mb-4">Invest in everything</h1>
        <p className="text-xl font-normal mb-5 text-[#424242]">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className="btn btn-primary p-2 text-xl font-medium w-52 hover:bg-[#424242] mx-auto">Sign up for free</button>
        </div>

        
    </div>
  );
}

export default Hero;
