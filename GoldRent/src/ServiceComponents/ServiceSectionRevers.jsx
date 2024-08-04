import React from "react";

const ServiceSectionReverse = ({ title, children, image }) => {
  return (
    // <div className="grid grid-rows-2 gap-y-12 md:grid-cols-2 px-6 md:grid-rows-1 xl:mx-12 2xl:mx-24 xl:max-h-[400px] overflow-hidden">
    //   <div className="w-ful md:object-scale-down xl:max-h-[400px]">
    //     <img
    //       src={image}
    //       alt="Client Image"
    //       className="h-full w-full bg-cover"
    //     />
    //   </div>
    //   <div className="flex flex-col text-center md:text-left mt-0 md:ml-6 md:my-6 space-y-6 xl:justify-center xl:my-0 xl:-mt-12">
    //     <h1 className="text-4xl font-headline">{title}</h1>
    //     <p className="font-text">{children}</p>
    //   </div>
    // </div>
    //     <div className="grid grid-rows-2 gap-y-12 md:grid-cols-2 px-6 md:px-10 md:grid-rows-1 xl:mx-12 2xl:mx-24 xl:max-h-[400px]">
    //     <div className="w-full flex justify-center items-center xl:max-h-[400px]">
    //       <img
    //         src={image}
    //         alt="Client Image"
    //         className="w-full md:max-w-sm lg:max-w-none object-contain"
    //       />
    //     </div>
    //     <div className="flex flex-col text-center md:text-left md:ml-6 md:my-6 space-y-6 xl:justify-center xl:my-0 xl:-mt-12">
    //       <h1 className="text-4xl font-headline">{title}</h1>
    //       <p className="font-text">{children}</p>
    //     </div>
    //   </div>
    <div className="grid grid-rows-2 gap-y-12 md:grid-cols-2 px-6 md:px-10 md:grid-rows-1 xl:mx-12 2xl:mx-24 xl:max-h-[400px] md:max-w-[1200px]">
      <div className="flex justify-center items-center xl:max-h-[400px] overflow-hidden">
        <img
          src={image}
          alt="Client Image"
          className="w-full max-w-full max-h-full object-contain lg:object-cover "
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
