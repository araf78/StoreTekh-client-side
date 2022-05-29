import React from 'react';

const AddReview = () => {
    const handleReviews = (e) => {
        e.preventDefault();
        const review = {
          rating: e.target.rating.value,
          description: e.target.description.value,
        };
        fetch("http://localhost:5000/review", {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((data) =>{
            console.log(data)
          });
      }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-3">

        <div className="card-body items-center text-center">
            <h2 className='text-xl font-bold mb-3'>Add A Review</h2>
             <form
                onSubmit={handleReviews}
                className="grid grid-cols-1 gap-3 w-full max-w-xs"
              >
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating Star"
                  className="input input-bordered w-full max-w-xs"
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered w-full max-w-xs"
                />
              <input type="submit" value="Add Review" className="btn btn-neutral " />
              </form>
        </div>
        </div>
    );
};

export default AddReview;