import React from 'react'

function Footer() {
  return (
    <div className="contaier px-48 bg-[#fbfbfb] py-10 border-t">
      <div className="row">
        <div className="col pr-20">
          <img src="media/images/logo.svg" alt="Logo" className='w-[60%]'/>
          <p className='text-[13px] mt-3'>&copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
        </div>
        <div className="col">
          <p className='text-xl mb-2'>Company</p>
          <a className='text-muted' href="">About</a><br />
          <a className='text-muted' href="">Products</a><br />
          <a className='text-muted' href="">Pricing</a><br />
          <a className='text-muted' href="">Referral programme</a><br />
          <a className='text-muted' href="">Careers</a><br />
          <a className='text-muted' href="">Zerodha.tech</a><br />
          <a className='text-muted' href="">Press & media</a><br />
          <a className='text-muted' href="">Zerodha Cares (CSR)</a><br />
        </div>
        <div className="col">
          <p className='text-xl mb-2'>Support</p>
          <a href="" className='text-muted'>Contact us</a><br />
          <a href="" className='text-muted'>Support portal</a><br />
          <a href="" className='text-muted'>Z-Connect blog</a><br />
          <a href="" className='text-muted'>List of charges</a><br />
          <a href="" className='text-muted'>Downloads & resources</a><br />
          <a href="" className='text-muted'>Videos</a><br />
          <a href="" className='text-muted'>Market overview</a><br />
          <a href="" className='text-muted'>How to file a complaint?</a><br />
          <a href="" className='text-muted'>Status of your complaints</a><br />
        </div>
        <div className="col">
          <p className='text-xl mb-2'>Account</p>
          <a href="" className='text-muted'>Open an account</a><br />
          <a href="" className='text-muted'>Fund transfer</a>
        </div>
      </div>
      <div className="text-[11px] text-muted flex flex-col gap-2 mt-10"  >
        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
      </div>
    </div>
  )
}

export default Footer