import React from "react";

const ServiceSectionReverse = ({ title, children, image }) => {
  return (
    <div className="grid grid-rows-2 gap-y-6 mx-4 min-h-[700px] max-h-[700px] md:grid-cols-2 sm:max-h-[600px] md:grid-rows-1 md:my-0 md:mx-10 md:min-h-[350px] lg:min-h-0 lg:mx-16 xl:mx-12 2xl:mx-24 xl:max-h-[400px] md:max-w-[1200px] overflow-hidden">
      <div className="flex justify-center items-center sm:max-h-[700px] xl:max-h-[400px] overflow-hidden">
        <img
          src={image}
          alt="Client Image"
          className="w-full max-w-full max-h-full object-cover lg:object-cover"
        />
      </div>
      <div className="flex flex-col text-center md:text-left md:ml-6 md:my-6 space-y-6 xl:justify-center xl:my-0 xl:-mt-12">
        <h1 className="text-4xl font-headline">{title}</h1>
        <p className="font-text">{children}</p>
      </div>
    </div>
  );
};

export default ServiceSectionReverse;
