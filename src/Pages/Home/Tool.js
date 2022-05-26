import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
  const {id, img, name, description, price, minOrderQuantity, availableQuantity} = tool;
    const navigate = useNavigate();
  
    return (
        <div class="card  bg-base-100 shadow-xl ">
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
            <button onClick={()=> navigate(`/tools/${id}`)} class="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;