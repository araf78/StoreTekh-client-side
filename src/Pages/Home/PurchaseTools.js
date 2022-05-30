import React, { useEffect, useState } from 'react';
import Tool from './Tool'

const PurchaseTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() =>{
    fetch('https://immense-sands-56460.herokuapp.com/tools')
    .then(res => res.json())
    .then( data => setTools(data))
  },[])
    


      // user  dbuser1
// pass: oTvRQQXa72XRIn33

    return (
      <div className=''>
        <h2 className='text-3xl font-bold mt-20 '>Purchase Tools</h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-5 sm:justify-items-center'>
            {
                tools.map(tool => <Tool
                key={tool.id}
                tool={tool}
                ></Tool>)
            }                                                                                                                               
        </div>
      </div>
    );
};

export default PurchaseTools;