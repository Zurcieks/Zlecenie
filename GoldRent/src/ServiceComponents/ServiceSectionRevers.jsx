import React from "react";

const ServiceSectionReverse = ({ title, children, image }) => {
  return (
    <div className="flex flex-col md:justify-between items-cnter my-24 h-screen mx-6 md:flex-row md:space-x-12 md:max-h-[300px] overflow-hidden max-w-800px lg:space-x-24 xl:max-w-[1200px]">
      <div className="flex items-start w-full mb-12 lg:m-0 lg:p-0 md:mb-0 ">
        <img
          src={image}
          alt="Client Image"
          className="h-full w-full object-contain xl:object-cover lg:max-h-[300px] lg:max-w-[450px] xl:max-w-[600px]"
        />
      </div>
      <div className="space-y-6 md:min-w-[450px] lg:max-w-[450px] xl:min-w-[600px]">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="md:max-w-[600px] font-sans ">{children}</p>
      </div>
    </div>
  );
};

export default ServiceSectionReverse;
