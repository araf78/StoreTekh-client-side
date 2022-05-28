import React from 'react';
import Footer from '../Shared/Footer';
import BusinessSummary from './BusinessSummary';
import HomeBanner from './HomeBanner'
import OurWorks from './OurWorks';
import PurchaseTools from './PurchaseTools';
import SpecialTools from './SpecialTools';
const Home = () => {
    return (
        <div>
           <div className='p-12'>
           <HomeBanner></HomeBanner>
            <PurchaseTools></PurchaseTools>
            <BusinessSummary></BusinessSummary>
            <SpecialTools></SpecialTools>
            <OurWorks></OurWorks>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;