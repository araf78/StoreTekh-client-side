import React from 'react';

const homeBanner = () => {
    return (
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col  lg:flex-row-reverse">
          <img src="https://htmldemo.net/lukas/lukas/assets/img/extra/wheels.png" class=" rounded-lg " alt=''/>
          <div className='w-50'>
            <h1 class="text-5xl font-bold">NEW TECHNOLOGY BUILD</h1>
            <p class="py-6">All best seller product are now available for you and your can buy this product from here any time any where so sop now</p>
            <button class="btn btn-neutral">Explore DEtails</button>
          </div>
        </div>
      </div>
    );
};

export default homeBanner;