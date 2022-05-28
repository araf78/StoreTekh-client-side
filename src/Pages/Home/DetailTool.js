import React, { memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailTool = memo(() => {
  const { toolId } = useParams();

  const [tool, setTool] = useState({});
  console.log(tool);

  useEffect(() => {
    const url = `http://localhost:5000/tool/${toolId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [toolId]);
  return (
    <div>
        <h2 className="text-3xl font-bold text-emerald-700 mt-16 mb-14">Tool Detail Information</h2>
        <div  className="grid grid-cols-1 justify-items-center mt-8 ">

      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={tool.img} alt="" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">{tool.name}</h2>
          <p>Price: {tool.price}</p>
          <p>Min Order Quantity: {tool.minOrderQuantity}</p>
          <p>Available Quantity: {tool.availableQuantity}</p>
          <p>{tool.description}</p>
          <div class="card-actions">
            <Link to="/checkout">
            <button class="btn btn-neutral">CheckOut</button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
});

export default DetailTool;
