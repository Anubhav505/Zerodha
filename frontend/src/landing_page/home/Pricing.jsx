import React from "react";

function Pricing() {
  return (
    <div className="container mt-32 px-20">
      <div className="row">
        <div className="col-4">
          <h1 className="text-4xl font-medium mb-8">Unbeatable pricing </h1>
          <p className="text-[1rem] font-normal mb-3">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a className="text-blue-500 " href="">See pricing <i class="ri-arrow-right-line"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col border  px-2 py-4">
              <h1 className="text-4xl font-medium mb-2">&#8377;0</h1>
              <p>Free equity delivery <br />and direct mutual funds</p>
            </div>
            <div className="col border text-center px-2 py-4">
              <h1 className="text-4xl font-medium mb-2">&#8377;20</h1>
              <p>Intraday F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
