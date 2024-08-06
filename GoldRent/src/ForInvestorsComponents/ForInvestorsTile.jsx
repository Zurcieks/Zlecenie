import React from "react";

const ForInvestorsTile = ({ Icon: icon, title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <icon className="mx-auto size-8" />
      <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-4 text-gray-500">{children}</p>
    </div>
  );
};

export default ForInvestorsTile;
