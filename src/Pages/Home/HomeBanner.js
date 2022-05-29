import React from 'react';

const homeBanner = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <img src="http://magento2.templatemela.com/v19/MAG221/skin/frontend/templatemela/MAG100204/images/banners/toolblock1.jpg"  className=" rounded-lg h-3/4 w-2/4" alt=''/>
          <div className=''>
            <h1 className="text-5xl font-bold">NEW TECHNOLOGY BUILD</h1>
            <p className="py-6">All best seller product are now available for you and your can buy this product from here any time any where so sop now</p>
            <button className="btn btn-neutral">Explore DEtails</button>
          </div>
        </div>
      </div>
    );
};

export default homeBanner;