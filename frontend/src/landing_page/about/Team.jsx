import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row my-20 text-center">
        <h1 className="text-4xl font-semibold">People</h1>
      </div>
      <div className="row">
        <div className="col flex justify-center pl-40">
          <img className='rounded-full h-[65%]' src="media/images/nithinKamath.jpg" alt="" />
        </div>
        <div className="col pt-2 text-[17px] pr-52">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <br />
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <br />
          <p> Playing basketball is his zen.</p>
          <br />
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
