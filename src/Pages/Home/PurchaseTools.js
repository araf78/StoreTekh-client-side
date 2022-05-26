import React from 'react';
import Tool from './Tool'

const PurchaseTools = () => {
    const tools = [
        {
            "id":1,
            "name": "Teeth Orthodontics",
            "slots":[
                " 08.00am - 08.30am",
                " 08.30am - 09.00am",
                " 09.00am - 10.00am",
                " 10.00am - 11.00am",
                " 11.00am - 12.00am"
            ]
        },
        {
            "id":2,
            "name": "Cannel Orthodontics",
            "slots":[
                " 08.30am - 09.00am",
                " 09.00am - 10.00am",
                " 10.00am - 11.00am",
                " 11.00am - 12.00am"
            ]
        },
        {
            "id":3,
            "name": "Teeth Cleaning",
            "slots":[
            ]
        },
        {
            "id":4,
            "name": "Teeth Orthodontics",
            "slots":[
                " 09.00am - 10.00am",
                " 10.00am - 11.00am",
                " 11.00am - 12.00am"
            ]
        },
        {
            "id":5,
            "name": "Teeth Dentistry",
            "slots":[
                " 10.00am - 11.00am",
                " 11.00am - 12.00am"
            ]
        },
        {
            "id":6,
            "name": "Cosmetics Teeth",
            "slots":[
                " 11.00am - 12.00am",
                " 12.00am - 1.00am",
                " 1.00am - 2.00am",
                " 02.00am - 03.00am"
            ]
        }
    ]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-5 sm:justify-items-center'>
            {
                tools.map(tool => <Tool
                key={tool.id}
                tool={tool}
                ></Tool>)
            }                                                                                                                               
        </div>
    );
};

export default PurchaseTools;