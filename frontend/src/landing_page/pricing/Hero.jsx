import React from "react";

function Hero() {
  return (
    <div className="text-center mb-28">
      <div>
        <h1 className="text-[2.75rem] font-semibold mt-28">Charges</h1>
        <p className="text-muted text-xl mt-3">List of all charges and taxes</p>
      </div>
      <div className="flex px-36 gap-4 mt-40">
        <div className="flex  flex-col items-center">
          <img className="w-72" src="media/images/pricingEquity.svg" />
          <h1 className="text-3xl font-medium mb-4 mt-3">Free equity delivery</h1>
          <p className="text-muted  text-[17px] text-semibold">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="flex  flex-col items-center">
          <img className="w-72" src="media/images/intradayTrades.svg" />
          <h1 className="text-3xl font-medium mb-4 mt-3">Intraday and F&O trades</h1>
          <p className="text-muted w-[21rem] text-[17px] text-semibold">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="flex  flex-col items-center">
          <img className="w-72" src="media/images/pricingEquity.svg" />
          <h1 className="text-3xl font-medium mb-4 mt-3 ">Free direct MF</h1>
          <p className="text-muted text-[17px] text-semibold">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;


