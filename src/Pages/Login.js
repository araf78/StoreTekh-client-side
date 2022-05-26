import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "./Loading";
// import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
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
 
  const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || "/";

  // let navigate = useNavigate();
  // let location = useLocation();

  // let from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
      console.log(data);
      signInWithEmailAndPassword(data.email, data.password)
    };

    // google sign 
    const handleSignInWithGoogle = ()=>{
      signInWithGoogle()
    }

    if(user){
      navigate(from, { replace: true })
    }
    if(gUser){
      navigate(from, { replace: true })
    }

    if(error){
      // toast(error.message)
    }

    if(loading || gLoading){
      return <Loading/>
  }
  return (
    <div class="hero h-screen ">
      <div class="card flex-shrink-0 w-full   max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h2 className="text-3xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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


            <input className="btn w-full max-w-xs" type="submit" value='Login' />
          </form>
          <p><small>New to StoreTekh ? <Link to='/signup' className="text-info">Create new account</Link></small></p>
          <div class="divider">OR</div>
          <div class="form-control mt-6">
            <button onClick={handleSignInWithGoogle} class="btn btn-outline">
            Continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
