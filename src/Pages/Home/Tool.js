import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
  const {_id, img, name, description, price, minOrderQuantity, availableQuantity} = tool;
    const navigate = useNavigate();
  
    return (
        <div className="card  shadow-xl ">
        <figure className="">
          <img src={img} alt="Shoes" className="rounded-xl p-[-8]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Min Order Quantity: {minOrderQuantity}</p>
          <p>Available Quantity: {availableQuantity}</p>
          <p>{description}</p>
          <div className="card-actions">
            <button onClick={()=> navigate(`/tool/${_id}`)} className="btn btn-neutral">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;