import React from "react";

function CardSkill({ title, src, alt }) {
  return (
    <div
      data-aos="flip-up"
      data-aos-delay="200"
      className="flex flex-col justify-center items-center px-7 py-4 md:px-8 md:py-5 cursor-pointer bg-secondary rounded-[18px] w-full gap-3"
    >
      <img
        src={src}
        alt={alt}
        className="object-contain w-[56px] h-[56px] md:w-[64px] md:h-[64px]"
      />
      <p className="font-bold text-[14px] lg:text-[16px] text-center">
        {title}
      </p>
    </div>
  );
}

export default CardSkill;
