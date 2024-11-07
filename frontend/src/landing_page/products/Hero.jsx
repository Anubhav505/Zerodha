import React from "react";

function Hero() {
  return (
    <div className="text-center font-semibold flex flex-col gap-4 my-28 ">
      <h1 className="text-5xl">Technology</h1>
      <p className="text-muted text-xl">Sleek, modern and intutive trading platforms</p>
      <p className="text-muted text-xl">
        Check out our &nbsp;
        <a href="" className="text-blue-500">
          investment offerings<i class="ri-arrow-right-line"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
