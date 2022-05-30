import React, { useEffect, useState } from 'react';

const MyProfileShow = () => {
    const [myProfile, SetMyProfile] = useState([]);
    useEffect(() =>{
        fetch("https://immense-sands-56460.herokuapp.com/myprofile")
            .then((res) => res.json())
            .then((data) =>{
              SetMyProfile(data)
            });
    },[]);
    console.log(myProfile)
    return (
        <div className="mockup-window border  border-lime-500  m-20">
      <h2 className="pb-6 text-5xl font-bold text-purple-800">My Profile</h2>
      <div class="divider">OR</div>
      <div>
          <h2 className="text-xl mb-2 font-bold">{myProfile[0].name}</h2>
          <p className='mb-2 text-stone-600'>{myProfile[0].email}</p>
          <p className='mb-2 text-stone-600'><span className="font-bold">Education:</span> {myProfile[0].education}</p>
          <p className='mb-2 text-stone-600'><span className="font-bold"> Location:</span> {myProfile[0].location}</p>
          <p className='mb-2 text-stone-600'><span className="font-bold"> Phone:</span>  {myProfile[0].Phone}</p>
          <p className='mb-2 text-stone-600'><span className="font-bold"> LinkedIn Link:</span>  {myProfile[0].link}</p>
      </div>
    </div>
    );
};

export default MyProfileShow;