import React from "react";

function Universe() {
  return (
    <div className="text-center">
      <div>
        <h1 className="text-4xl font-medium mb-7 mt-20">
          The Zerodha Universe
        </h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="flex flex-col items-center gap-14 mt-20">
        <div className="flex text-muted gap-40">
          <div className="flex items-center flex-col text-[12px] w-48">
            <img
              className="h-14 mb-3"
              src="media/images/zerodhaFundhouse.png"
            />
            <p>
              Explore a range of index funds tailored to your goals, designed
              for simplicity and transparency.
            </p>
          </div>
          <div className="flex items-center flex-col text-[12px] w-48">
            <img className="h-14 mb-3" src="media/images/sensibullLogo.svg" />
            <p>
              Options trading platform for strategy creation, position analysis,
              and data examination.
            </p>
          </div>
          <div className="flex items-center flex-col text-[12px] w-48">
            <img className="h-14 mb-3" src="media/images/goldenpiLogo.png" />
            <p>
              Explore a comprehensive bonds trading platform designed for
              simplicity and transparency.
            </p>
          </div>
        </div>
        <div className="flex text-muted gap-40">
          <div className="flex items-center flex-col text-[12px] w-48">
            <img className="h-14 mb-3" src="media/images/streakLogo.png" />
            <p>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="flex items-center flex-col text-[12px] w-48">
            <img className="h-14 mb-3" src="media/images/smallcaseLogo.png" />
            <p>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="flex items-center flex-col text-[12px] w-48">
            <img className="h-14 mb-3" src="media/images/dittoLogo.png" />
            <p>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      </div>
      <button className="btn btn-primary p-2 text-xl font-medium w-52 my-10 hover:bg-[#424242] mx-auto">
        Sign up now
      </button>
    </div>
  );
}

export default Universe;
