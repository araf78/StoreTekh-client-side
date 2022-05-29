import React from "react";
import { Link } from "react-router-dom";

const OurWorks = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mt-16 text-center">Our Works</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card w-96 bg-base-100 ">
          <div className="card-body">
            <img
              src="https://htmldemo.net/jantrik/jantrik/img/blog/1.jpg"
              alt=""
            />
            <p>
              Minim sint do voluptate officia.If a dog chews shoes whose shoes
              does he choose.
            </p>
            <p>Read more...</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 ">
          <div className="card-body">
            <img
              src="https://htmldemo.net/jantrik/jantrik/img/blog/2.jpg"
              alt=""
            />
            <p>
              Minim sint do voluptate officia.If a dog chews shoes whose shoes
              does he choose.
            </p>
            <p>Read more...</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 ">
          <div className="card-body">
            <img
              src="https://htmldemo.net/jantrik/jantrik/img/blog/3.jpg"
              alt=""
            />
            <p>
              Minim sint do voluptate officia.If a dog chews shoes whose shoes
              does he choose.
            </p>
            <p>Read more...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
