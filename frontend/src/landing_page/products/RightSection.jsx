import React from 'react'

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="flex justify-center gap-52 items-center">
      <div className="w-80 flex flex-col gap-4 scale-[1.1]">
        <h1 className="text-3xl font-medium">{productName}</h1>
        <p>{productDescription}</p>
        <div className="flex gap-16">
          <a className="text-blue-500" href="">
            {learnMore}&nbsp;
            <i class="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>

      <div>
        <img src={imageUrl} />
      </div>
    </div>
  );
}

export default RightSection