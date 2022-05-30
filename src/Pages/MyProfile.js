import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const handleUpdateProfile = e => {
        e.preventDefault();
        const myprofile = {
          name: e.target.name.value,
          email: e.target.email.value,
          education: e.target.education.value,
          location: e.target.location.value,
          phone: e.target.phone.value,
          link: e.target.link.value,
        };
        fetch("https://immense-sands-56460.herokuapp.com/myprofile", {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(myprofile),
        })
          .then((res) => res.json())
          .then((data) =>{
            toast('Add My Profile Successfully')
          });
    }
    return (
        <div className="bg-black  w-full max-w-xs p-4 mx-auto mt-12 rounded">
        <h2 className="text-white text-2xl mt-2 mb-2">My Profile</h2>
        <form
                onSubmit={handleUpdateProfile}
                className="grid grid-cols-1 gap-3 w-full max-w-xs"
              >
                <input
                  type="text"
                  name="name"
                  disabled
                  value={user?.displayName}
                  className="input  w-full max-w-xs"
                />
                <input
                  type="email"
                  name="email"
                  disabled
                  value={user?.email}
                  className="input  w-full max-w-xs"
                />
                
                <input
                  type="text" 
                  name='education'
                   placeholder="Education"
                  className="input  w-full max-w-xs"
                />
                <input
                  type="text"
                  name='location'
                   placeholder="location" 
                  className="input  w-full max-w-xs"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="input  w-full max-w-xs"
                />
                <input
                  type="text"
                  name='link'
                  placeholder="LinkedIn Link"
                  className="input  w-full max-w-xs"
                />
              <input type="submit" value="Update" className="btn btn-neutral " />
              </form>

        {/* ------------------------------------------------------------
        <form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name='name' placeholder="User name" disabled  value={user?.displayName || ''} {...register('name', { require:true })} className="input w-full max-w-xs" />
        <input type="email" name='email' placeholder="Email" disabled value={user?.email || ''} {...register('email', { require:true })} className="input w-full max-w-xs" />
        <input type="text" {...register('education')} className="input w-full max-w-xs" />
        <input type="text" {...register('location')} className="input w-full max-w-xs" />
        <input type="text" name='phone' placeholder="Phone" {...register('phone')} className="input w-full max-w-xs" />
        <input type="text"  placeholder="LinkedIn Link" {...register('LinkedIn Link')} className="input w-full max-w-xs" />
        <input className="input w-full max-w-xs text-black" type="submit" value="Update" />
      </form> */}
      </div>
    );
};

export default MyProfile;