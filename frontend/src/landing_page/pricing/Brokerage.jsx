import React from "react";

function Brokerage() {
  return (
    <div className="flex mt-40 mb-16">
      <div className="w-[60%]">
        <h2 className="text-center text-xl text-blue-500">
          Brokrage calculator
        </h2>
        <ul className="list-disc list-inside text-[13px] py-7 pl-20">
          <li className="py-3">
            Call & Trade and RMS auto-squareoff: Additional charges of 250 + GST
            per order.
          </li>
          <li>Digital contract notes will be sent via e-mail.</li>
          <li className="pt-3">
            Physical copies of contract notes, if required, shall be charged 220
            per contract note. Courier charges apply.
          </li>
          <li className="pt-3">
            For NRI account (non-PIS), 0.5% or 100 per executed order for equity
            (whichever is lower).
          </li>
          <li className="py-3">
            For NRI account (PIS), 0.5% or 2200 per executed order for equity
            (whichever is lower).
          </li>
          <li>
            If the account is in debit balance, any order placed will be charged
            240 per executed order instead of 220 per executed order.
          </li>
        </ul>
      </div>
      <div className="w-[40%]">
        <h1 className="text-center text-xl text-blue-500 relative right-32">List of charges</h1>
      </div>
    </div>
  );
}

export default Brokerage;
