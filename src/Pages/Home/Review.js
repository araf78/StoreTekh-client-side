import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Review = ({review}) => {

    return (
        <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
         <h2 >
           <span className="font-bold">{review.rating}</span> star</h2>
          <p>{review.description}</p>
          
        </div>
      </div>
    );
};

export default Review;