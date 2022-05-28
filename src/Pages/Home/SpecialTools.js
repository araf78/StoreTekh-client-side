import React from "react";

const SpecialTools = () => {
  return (
     <div>
          <h2 className="text-3xl font-bold mt-16 mb-14">Some Features</h2>
    <div  className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-align special-features">
      <img className=" h-full" src='http://demo2.themelexus.com/allegro/wp-content/uploads/2016/11/banner-01.jpg' alt=""/>
      <img className=" ml-14 h-full" src='http://demo2.themelexus.com/allegro/wp-content/uploads/2016/11/banner-02.jpg' alt=""/>
      <img className="  h-full" src='http://demo2.themelexus.com/allegro/wp-content/uploads/2016/11/banner-03.jpg' alt=""/>
    </div>
     </div>
  );
};

export default SpecialTools;
