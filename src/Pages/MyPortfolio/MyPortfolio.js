import React, { memo } from "react";

const MyPortfolio = memo(() => {
  return (
    <div className="mockup-window border  border-lime-500  m-20">
      <h2 className="pb-6 text-5xl font-bold text-emerald-800">My Portfolio</h2>
      <h2 className=" text-2xl font-bold text-neutral-800">
        Name : Jannat Al Arafath
      </h2>{" "}
      <br />
      <p className="text-xl text-gray-600">Email: alarafath71@gmail.com</p>
      <p className="mt-3 mb-5">
        <small>
          <span className="text-xl font-bold  text-gray-600">
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
            <span className="text-xl  text-gray-600 font-bold">Skills: </span><br/>
            <ul>
              <li>I receive some critical login when I effort this.  </li>
              <li>I hope I can Teamwork Skills.</li>
              <li>Communication.</li>
            </ul>
          </span>
          <br />

        </small>
      </p>
      <p className="mt-3 mb-5">
        <small>
          <span className="text-xl  text-gray-600">
          <span className="text-xl  text-gray-600 font-bold">Three Website:</span> <br/>
            <ul>
              <li>https://pensive-hermann-c14600.netlify.app/</li>
              <li>https://delightful-bavarois-98a0dc.netlify.app/</li>
              <li>https://tranquil-stroopwafel-0fbf38.netlify.app/</li>
            </ul>
          </span>
          <br />

        </small>
      </p>
    </div>
  );
});

export default MyPortfolio;
