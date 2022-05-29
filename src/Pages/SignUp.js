import React from 'react';
import {  toast } from 'react-toastify';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from "../firebase.init";
import useToken from '../Hooks/useToken';
import Loading from "./Loading";

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const [token] = useToken(user || gUser);

   
    if(token){
      navigate(from, { replace: true })
    }

    if(loading || gLoading){
        return <Loading/>
    }

    if(error){
      toast(error.message)
    }
  
    const onSubmit = async (data) => {
        createUserWithEmailAndPassword(data.email, data.password)
      };
    return (
        <div className="hero h-screen-min ">
        <div className="card flex-shrink-0 w-full   max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("text", {
                      pattern: {
                        value: /[A-Za-z]{3}/,
                        message: 'provide a valid Name' 
                      }
                    })} 
                />
                <label className="label">
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                  
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                      required :{
                          value: true,
                          message : 'Email is required'
                      },
                      pattern: {
                        value: /[A-Za-z]{3}/,
                        message: 'provide a valid email' 
                      }
                    })} 
                />
                <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                  
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="email"
                  placeholder="Your password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                      required :{
                          value: true,
                          message : 'password is required'
                      },
                      minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer' 
                      }
                    })} 
                />
                <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                  
                </label>
              </div>
  
  
              <input className="btn w-full max-w-xs" type="submit" value='Sign Up' />
            </form>
            <p><small>Already have an account <Link to='/login' className="text-info">Please login</Link></small></p>
            <div className="divider">OR</div>
            <div className="form-control mt-6">
              <button onClick={() => signInWithGoogle()} className="btn btn-outline">
                Continue with google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;