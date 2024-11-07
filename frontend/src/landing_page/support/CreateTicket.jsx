import React from "react";

function CreateTicket() {
  return (
    <div className="flex flex-col gap-10 mb-24">
      <h1 className="pl-48 text-xl">
        To create a ticket, select a relevant topic
      </h1>
      <div className="flex justify-center gap-[13rem]">
        <div>
          <h1 className="text-xl mb-3">
            <i class="ri-add-circle-line"></i> Account Opening
          </h1>
          <div className="flex flex-col gap-2 pl-6">
            <a className="text-blue-500 text-[14px]" href="">
              Getting started
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Online
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Offline
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Charges
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Company, Partnership and HUF
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Non Resident Indian (NRI)
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-3">
            <i class="ri-user-3-line"></i> Your Zerodha Account
          </h1>
          <div className="flex flex-col gap-2 pl-6">
            <a className="text-blue-500 text-[14px]" href="">
              Login credentials
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Your Profile
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Account modification and segment addition
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              CMR & DP ID
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Nomination
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Transfer and conversion of shares
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-3">
            <i class="ri-bar-chart-line"></i> Trading and Markets
          </h1>
          <div className="flex flex-col gap-2 pl-6">
            <a className="text-blue-500 text-[14px]" href="">
              Trading FAQs
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Kite
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Margins
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Product and order types
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Corporate actions
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Kite features
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-[18.5rem]">
        <div>
          <h1 className="text-xl mb-3">
            <i class="ri-bank-card-2-line"></i> Funds
          </h1>
          <div className="flex flex-col gap-2 pl-6">
            <a className="text-blue-500 text-[14px]" href="">
              Fund withdrawal
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Adding funds
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Adding bank accounts
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              eMandates
            </a>
          </div>
        </div>
        <div className="relative right-8">
          <h1 className="text-xl mb-3">
            <i class="ri-donut-chart-fill"></i> Console
          </h1>
          <div className="flex flex-col gap-2 pl-6">
            <a className="text-blue-500 text-[14px]" href="">
              IPO
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Portfolio
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Funds statement
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Profile
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Reports
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Referral program
            </a>
          </div>
        </div>
        <div className="relative left-14">
          <h1 className="text-xl mb-3">
            <i class="ri-coin-line"></i> Coin
          </h1>
          <div className="flex flex-col gap-2 pl-6">
            <a className="text-blue-500 text-[14px]" href="">
              Understanding mutual funds and Coin
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Coin app
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Coin web
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              Transactions and reports
            </a>
            <a className="text-blue-500 text-[14px]" href="">
              National Pension Scheme (NPS)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
