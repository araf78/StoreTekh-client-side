import React from 'react';
import Footer from '../Shared/Footer';
import HomeBanner from './HomeBanner'
import PurchaseTools from './PurchaseTools';
const Home = () => {
    return (
        <div>
           <div className='px-12'>
           <HomeBanner></HomeBanner>
            <PurchaseTools></PurchaseTools>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;