import React from 'react'

function Hero() {
  return (
    <div className="bg-[#387ed1] text-white px-52 pt-10 pb-20 mb-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-semibold">Support Portal</h1>
        </div>
        <div>
          <h1 className="underline">Track tickets</h1>
        </div>
      </div>
      <div className="flex items-center mt-10">
        <div className="w-[55%] flex flex-col gap-7">
          <h1 className="text-2xl">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              className="px-10 py-3 w-[540px] text-black  outline-none "
            />
            <i class="ri-search-line p-[12px] text-black bg-white text-2xl"></i>
          </div>

          <div className="flex flex-wrap gap-3 text-[1.07rem]">
            <h1 className="underline">Track account opening</h1>
            <h1 className="underline">Track segment activation</h1>
            <h1 className="underline">Intraday margins</h1>
            <h1 className="underline">Kite user manual</h1>
          </div>
        </div>
        <div className="w-[45%] pl-20">
          <h1 className="text-2xl font-semibold mb-2">Featured</h1>
          <ol className='list-decimal list-inside relative left-5'>
            <li className="underline">
            Muhurat Trading session on account of Diwali, November 2024
            </li>&nbsp;
            <li className='underline'>Surveillance measure on scrips - October 2024</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero