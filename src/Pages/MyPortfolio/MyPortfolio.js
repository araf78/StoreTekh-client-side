import React, { memo } from "react";

const MyPortfolio = memo(() => {
  return (
    <div class="mockup-window border  border-lime-500  m-20">
      <h2 className="pb-6 text-5xl font-bold text-emerald-800">My Portfolio</h2>
      <h2 className=" text-2xl font-bold text-neutral-800">
        Name : Jannat Al Arafath
      </h2>{" "}
      <br />
      <p className="text-xl text-gray-600">Email: alarafath71@gmail.com</p>
      <p className="mt-3 mb-5">
        <small>
          <span className="text-xl  text-gray-600">
            Educational Background:
          </span>
          <br />
          <p>Honour's 3rd Year</p>
          <p>Department of Mathematics</p>
          <p>Jahangirnagar University</p>
        </small>
      </p>
      <p className="mt-3 mb-5">
        <small>
          <span className="text-xl  text-gray-600">
            Three Website:
          </span>
          <br />

        </small>
      </p>
    </div>
  );
});

export default MyPortfolio;
