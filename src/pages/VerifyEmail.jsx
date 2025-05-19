import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  icon from "../assets/verify.png"
import { BounceLoader } from "react-spinners";
import { MdCancel } from "react-icons/md";


const VerifyEmail = () => {
  const { token } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState("error");
  const checkToken = async () => {
    try {
      const response = await axiosInstance.post(`/auth/verify-email/${token}`, {
        token,
      });
      if (response.status === 200) {
        setStatus("success");
      }
    } catch (error) {
      setErrorMsg("Email Verification Failed");
      setStatus("error");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  if (status === "verifying") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
            <BounceLoader className="mx-auto my-2"/>
          <h1 className="text-xl lg:text-[30px] font-semibold">
            Email Verifying...
          </h1>
          <p className="text-[#666] text-lg">
          Please Wait
          </p>
        </div>
      </div>
    );
  }
  if (status === "success") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
          <img src={icon} alt="verify" className="block mx-auto" />
          <h1 className="text-xl lg:text-[30px] font-semibold">
            Verification Succesful
          </h1>
          <p className="text-[#666] py-3">
            Your account has been verified succesfully
          </p>
          <Link to="/login">
            <button className="w-full font-semibold rounded-xl bg-[#0c0c0c] text-white h-[56px]">
              Proceed to login
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
       <MdCancel size={80} className="text-red-500 mx-auto"/>
        <h1 className="text-xl lg:text-[30px] font-semibold">
          Verification Failed
        </h1>
        <p className="text-[#666] py-3">
          Invalid or Expired Token
        </p>
        
          <button className="w-full font-semibold rounded-xl bg-[#0c0c0c] text-white h-[56px]">
            Resed Verification Mail
          </button>
        
      </div>
    </div>
  );
};

export default VerifyEmail;
