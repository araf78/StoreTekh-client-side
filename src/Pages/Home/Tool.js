import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
  const {_id, img, name, description, price, minOrderQuantity, availableQuantity} = tool;
    const navigate = useNavigate();
  
    return (
        <div class="card  shadow-xl ">
        <figure class="">
          <img src={img} alt="Shoes" class="rounded-xl p-[-8]" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>Price: {price}</p>
          <p>Min Order Quantity: {minOrderQuantity}</p>
          <p>Available Quantity: {availableQuantity}</p>
          <p>{description}</p>
          <div class="card-actions">
            <button onClick={()=> navigate(`/tool/${_id}`)} class="btn btn-neutral">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;