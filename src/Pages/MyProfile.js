import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register , handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className="bg-black  w-full max-w-xs p-4 mx-auto mt-12 rounded">
        <h2 className="text-white text-2xl mt-2 mb-2">My Profile</h2>
        <form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="User name" disabled  value={user?.displayName || ''} {...register('name', { require:true })} class="input w-full max-w-xs" />
        <input type="email" placeholder="Email" disabled value={user?.email || ''} {...register('email', { require:true })} class="input w-full max-w-xs" />
        <input type="text" placeholder="education" {...register('education')} class="input w-full max-w-xs" />
        <input type="text" placeholder="location" {...register('location')} class="input w-full max-w-xs" />
        <input type="text" placeholder="Phone" {...register('phone')} class="input w-full max-w-xs" />
        <input type="text" placeholder="LinkedIn Link" {...register('LinkedIn Link')} class="input w-full max-w-xs" />
        <input class="input w-full max-w-xs text-black" type="submit" value="Update" />
      </form>
      </div>
    );
};

export default MyProfile;