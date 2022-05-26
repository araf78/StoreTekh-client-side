import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
  const {id, name, slots} = tool;
    const navigate = useNavigate();
  
    return (
        <div class="card  bg-base-100 shadow-xl ">
        <figure class="px-10 pt-10">
          <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button onClick={()=> navigate(`/tools/${id}`)} class="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;