import React from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const CheckYourEmail = () => {
  return (
    <AuthWrapper>
      <div className="w-[505px] h-[313px] bg-[#FFFFFF] py-[29px] px-[26px]  shadow-lg mb-70">
        <Link to="/register">
          <button className="flex items-center gap-1.5 mt-4">
            <FaArrowLeft /> Back
          </button>
        </Link>

        <h1 className="font-semibold text-[#000000] text-[30px] mt-4">
          Check Your Email
        </h1>
        <p className="text-black text-[16px] font-[400px] mt-2 max-w-[332px]">
          Check the email address{" "}
          <span className="text-[#666666]"> olafarid12@gmail.com </span>for
          instructions to reset your password.
        </p>
        <button className="mt-4 w-full border border-[#D9D9D9] rounded-[12px] py-[12px] font-bold ">
          Resend mail
        </button>
      </div>
    </AuthWrapper>
  );
};

export default CheckYourEmail;
