import React from "react";

const SpecialTools = () => {
  return (
     <div>
          <h2 className="text-3xl font-bold mt-16 mb-14">Some Features</h2>
    <div  className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-align special-features">
      <img className=" h-full" src='https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG9vbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt=""/>
      <img className=" ml-14 h-full" src='https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRvb2xzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=""/>
      <img className="  h-full" src='https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG9vbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt=""/>
    </div>
     </div>
  );
};

export default SpecialTools;
