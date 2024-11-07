import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="flex justify-center gap-52 items-center">
      <div>
        <img src={imageUrl} />
      </div>

      <div className="w-80 flex flex-col gap-4 scale-[1.1]">
        <h1 className="text-3xl font-medium">{productName}</h1>
        <p>{productDescription}</p>
        <div className="flex gap-16">
          <a className="text-blue-500" href={tryDemo}>
            Try demo <i class="ri-arrow-right-line"></i>
          </a>
          <a className="text-blue-500" href={learnMore}>
            Learn more <i class="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="flex gap-4">
          <a href="">
            <img src="media/images/googlePlayBadge.svg" />
          </a>
          <a href="">
            <img src="media/images/appstoreBadge.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
