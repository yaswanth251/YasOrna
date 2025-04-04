import React from 'react';
import UserHome from './UserPages/UserHome';
import Slider from './UserPages/Slider';
import Catalog from './UserPages/Catalog';
import Category from './UserPages/Catogery';
import Foot from './UserPages/Foot';
import Offers from './UserPages/Offers';

function Merge() {
  return (
    <div>
      {/* Fixed UserHome */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
        <UserHome />
      </div>

      {/* Push content below UserHome */}
      <div className="pt-[80px]">  {/* Adjust this value based on UserHome's height */}
        <Slider />
        <Category />
        <Offers />
        <Catalog />
        <Foot />
      </div>
    </div>
  );
}

export default Merge;
