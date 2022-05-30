import React, { useEffect, useState } from 'react';
import Review from './Review';

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        fetch("https://immense-sands-56460.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) =>{
              setReviews(data)
            });
    },[]);
    return (
       <div>
           <h2 className="text-3xl font-bold m-10">Reviews</h2>
           <div className='grid grid-cols-6 justify-items-center gap-3 '>
           {
               reviews.map(review => <Review
               key={review._id}
               review={review}
               ></Review>)
           }
        </div>
       </div>
    );
};

export default ShowReview;