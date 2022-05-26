import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from "../firebase.init";
import Loading from "./Loading";

const SignUp = () => {
    const [signInWithGoogle, gLoading, gError] = useSignInWithGoogle(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    if(loading || gLoading){
        return <Loading/>
    }
  
    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
      };
    return (
        <div class="hero h-screen-min ">
        <div class="card flex-shrink-0 w-full   max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <h2 className="text-3xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  class="input input-bordered w-full max-w-xs"
                  {...register("text", {
                      pattern: {
                        value: /[A-Za-z]{3}/,
                        message: 'provide a valid Name' 
                      }
                    })} 
                />
                <label class="label">
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email?.message}</span>}
                  
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  class="input input-bordered w-full max-w-xs"
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
                <label class="label">
                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email?.message}</span>}
                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email?.message}</span>}
                  
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="password"
                  name="email"
                  placeholder="Your password"
                  class="input input-bordered w-full max-w-xs"
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
                <label class="label">
                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password?.message}</span>}
                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password?.message}</span>}
                  
                </label>
              </div>
  
  
              <input className="btn w-full max-w-xs" type="submit" value='Sign Up' />
            </form>
            <p><small>Already have an account <Link to='/login' className="text-info">Please login</Link></small></p>
            <div class="divider">OR</div>
            <div class="form-control mt-6">
              <button onClick={() => signInWithGoogle()} class="btn btn-outline">
                Continue with google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;