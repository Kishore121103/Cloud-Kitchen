import React from 'react';

const SectionHeader = ({ subHeader, mainHeader }) => {
  return (
    <div className="text-center mb-8">
      <h3 className="uppercase text-gray-500 font-semibold leading-4 tracking-widest">
        {subHeader}
      </h3>
      <h2 className="text-[#f13a01] font-bold text-3xl md:text-4xl mt-2">
        {mainHeader}
      </h2>
    </div>
  );
};

export default SectionHeader;