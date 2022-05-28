import React from "react";
import { MdOutlineEmojiFlags } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { IoMdHappy } from "react-icons/io";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const BusinessSummary = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-emerald-700 uppercase mt-14">
        millions bussiness trust us
      </h2>
      <p className="uppercase">try to understand users expectation</p>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="grid grid-cols-1 justify-items-center">
          <p className="text-4xl text-emerald-700">
            <MdOutlineEmojiFlags />
          </p>
          <p className="text-5xl  font-bold">46+</p>
          <p className="text-xl text-emerald-700">Country</p>
        </div>
        <div className="grid grid-cols-1 justify-items-center">
          <p className="text-4xl text-emerald-700">
            <AiOutlineFundProjectionScreen />
          </p>
          <p className="text-5xl  font-bold">1200+</p>
          <p className="text-xl text-emerald-700">Complete Projects</p>
        </div>
        <div className="grid grid-cols-1 justify-items-center">
          <p className="text-4xl text-emerald-700">
            <IoMdHappy />
          </p>
          <p className="text-5xl  font-bold">5000+</p>
          <p className="text-xl text-emerald-700">Happy Client</p>
        </div>
        <div className="grid grid-cols-1 justify-items-center">
          <p className="text-4xl text-emerald-700">
            <VscFeedback />
          </p>
          <p className="text-5xl  font-bold">700+</p>
          <p className="text-xl text-emerald-700">Feedback</p>
        </div>
      </div>

      <div class="card w-100vh bg-base-100 shadow-xl mt-4 opacity-96">
        <div class="card-body grid grid-cols-2">
           <div>
           <p className=" font-bold text-emerald-700">How any questions about us? Or get a product request.</p>
            <p>Don't hesitate to contact us</p>
           </div>
           <div>
           <button class="btn text-white bg-emerald-600 mr-2">Request For Quote</button>
           <button class="btn">contact us</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
