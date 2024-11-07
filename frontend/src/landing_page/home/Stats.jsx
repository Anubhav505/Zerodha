import React from "react";

function Stats() {
  return (
    <div className="container mt-32">
      <div className="row">
        <div className="col-6 px-[11.05rem]">
          <h1 className="text-4xl font-medium mb-5">Trust with confidence</h1>
          <h2 className="text-xl font-medium mb-2">Customer first always</h2>
          <p className="mb-4 text-[#74727b]">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="text-xl font-medium mb-2">No spam or gimmicks</h2>
          <p className="mb-4 text-[#74727b]">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="text-xl font-medium mb-2">The Zerodha universe</h2>
          <p className="mb-4 text-[#74727b]">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="text-xl font-medium mb-2">Do better with money</h2>
          <p className="mb-4 text-[#74727b]">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-6 flex flex-col items-center pr-32">
          <img src="media/images/ecosystem.png " className="w-[85%]" />
          <div>
            <a className="text-blue-500" href="">
              Explore our products <i class="ri-arrow-right-line"></i>
            </a>
            <a className="ml-5 text-blue-500" href="">
              Try kite demo <i class="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
