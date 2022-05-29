import React, {  useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const DetailTool = () => {
  const { toolId } = useParams();
  const [user] = useAuthState(auth);
  const [tool, setTool] = useState({});

  // console.log(tool);

  useEffect(() => {
    const url = `http://localhost:5000/tool/${toolId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data)); 
  }, [toolId]);

  const handlePurchase = (e) => {
    e.preventDefault();
    const order = {
      address: e.target.address.value,
      phone: e.target.phone.value,
      quantity: e.target.quantity.value,
      id: toolId,
      email: user.email,
      name : tool.name,
      price : tool.price,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data)
      });
  }
    return (
      <div>
        <h2 className="text-3xl font-bold text-emerald-700 mt-16 mb-14">
          Tool Detail Information
        </h2>
        <div className="grid grid-cols-1 justify-items-center mt-8 ">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={tool.img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-3">{tool.name}</h2>
              <form
                onSubmit={handlePurchase}
                className="grid grid-cols-1 gap-3 w-full max-w-xs"
              >
                <input
                  type="text"
                  name="name"
                  disabled
                  value={user?.displayName}
                  className="input  w-full max-w-xs"
                />
                <input
                  type="email"
                  name="email"
                  disabled
                  value={user?.email}
                  className="input  w-full max-w-xs"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input  w-full max-w-xs"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="input  w-full max-w-xs"
                />
                <input
                  type="number"
                  min={tool.minOrderQuantity}
                  max={tool.availableQuantity}
                  name="quantity"
                  defaultValue={tool.minOrderQuantity}
                  placeholder="Quantity"
                  className="input  w-full max-w-xs"
                />
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  className="input  w-full max-w-xs"
                />
              <input type="submit" value="Purchase" className="btn btn-neutral " />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default DetailTool;
