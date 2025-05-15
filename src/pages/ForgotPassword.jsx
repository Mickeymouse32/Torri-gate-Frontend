import React, { useState } from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "../utils/formValidator";
const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(forgotPasswordSchema) });
  const handleForgotPassword = async (data) => {
    setIsSubmitting(true);

    try {
      console.log("Forgot Password Data:", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthWrapper>
      <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg w-full max-w-[453px]">
        <Link
          to="/register"
          className="border border-[#f2f2f2] bg-[#f9f9f9] rounded-lg py-1 px-2"
        >
          <button className="flex items-center gap-1.5 font-mona">
            <FaArrowLeft /> Back
          </button>
        </Link>
        <div className="max-w-[505px] mt-4">
          <h1 className="max-w-[332px] text-2xl lg:text-[30px] font-semibold font-mona">
            Forgot your password?
          </h1>
          <p className="text-[#666] text-[16px] font-normal max-w-[332px] font-mona">
            We will send instructions to your email to reset your password.
            <span className="font-semibold ml-1"></span>
          </p>
          <form className="mt-7" onSubmit={handleSubmit(handleForgotPassword)}>
            <label
              htmlFor="email"
              className="text-16px font-semibold font-mona"
            >
              Email
              <span className="text-red-600 font-semibold text-[16px] font-mona">
                *
              </span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              {...register("email")}
              className="input w-full my-2"
            />
            {errors.email && (
              <p className="text-red-600 text-sm font-mona">
                {errors.email.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn bg-black text-white w-full rounded-[12px] h-[56px] mt-3 font-mona text-[16px]"
            >
              {isSubmitting ? (
                <span className="loading loading-spinner loading-md text-black"></span>
              ) : (
                "Continue"
              )}
            </button>
          </form>
          <p className="mt-6 text-center text-[#666666] font-mona">
            Remembered Your Password?{" "}
            <Link to="/login" className="font-semibold font-mona">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPassword;
