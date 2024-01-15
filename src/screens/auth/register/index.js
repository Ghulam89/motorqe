import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Register = () => {

  const navigate = useNavigate();
const handlerLogin = ()=>{
  
  toast.error('Database not connected!');
  navigate('/home')
}

const handlerRegister = ()=>{
  
  toast.error('Database not connected!');
 
}

  return (
    <div>
      <section className=" block md:flex  pb-20">
        {/* login section */}
        <div className=" bg-[#f2f5fb] py-12  px-12 w-[100%] md:w-[50%]">
          <h3 className="  font-bold  pb-3  text-black  text-2xl">
            Log in to your account
          </h3>
          <p className="">Welcome back! Sign in to your account</p>

          <div className=" pt-10 gap-6 md:flex block items-center">
            <h6> Continue with:</h6>
            <div className=" flex gap-2">
              <Button
                label={"Google"}
                Icons={
                  <img
                    src={require("../../../assets/images/google.png")}
                    alt=""
                  />
                }
                className={" bg-white border-gray-200 border-2  py-2 px-8  text-black"}
              />
              <Button
                label={"Facebook"}
                Icons={
                  <img
                    src={require("../../../assets/images/facebook.png")}
                    alt=""
                  />
                }
                className={"bg-white border-gray-200 border-2 py-2  px-10  text-black"}
              />
            </div>
          </div>
          <h3 className="   font-semibold  text-black  py-7 text-xl">OR</h3>

          <div className=" sm:w-[70%] w-[100%] flex flex-col gap-5">
            <Input
              label={"Email or Username"}
              placeholder={"Email or Username"}
              className={"border-2 w-full border-gray-200"}
            />
            <Input
              label={"Password"}
              placeholder={"Password"}
              className={"border-2  w-full border-gray-200"}
            />
            <div className=" flex items-center justify-between">
              <div className=" gap-2 flex items-center">
                <Input type="checkbox" />
                <p className="text-gray-400  font-semibold">Reminder</p>
              </div>
              <div>
                <a href="" className="text-gray-400  font-semibold border-b border-gray-400">Forgotten password?</a>
              </div>
            </div>
          </div>
          <div className=" pt-12">
            <Button

                onClick={handlerLogin}
              label={"Login"}
              className={" bg-orange-600 rounded-md  px-8  py-2 text-white"}
            />
          </div>
        </div>
        <div className="  w-[100%] px-8 md:w-[50%] pt-12">
          <h3 className="   pb-3 font-bold  text-black  text-2xl">
            Register
          </h3>
          <p>Create new account today.</p>

          <div className=" pt-10 gap-6 md:flex block items-center">
            <h6> Continue with:</h6>
            <div className=" flex gap-2">
              <Button
                label={"Google"}
                Icons={
                  <img
                    src={require("../../../assets/images/google.png")}
                    alt=""
                  />
                }
                className={" bg-white border-gray-200 border-2 py-2  px-10  text-black"}
              />
              <Button
                label={"Facebook"}
                Icons={
                  <img
                    src={require("../../../assets/images/facebook.png")}
                    alt=""
                  />
                }
                className={"bg-white border-gray-200 border-2 py-2   px-10  text-black"}
              />
            </div>
          </div>
          <h3 className="   font-semibold  text-black  py-7 text-xl">OR</h3>
          <div className="  pb-7 pt-3 flex items-center gap-6">
              <Link to={'/home'} className=" gap-2 flex items-center">
                <Input type="radio" />
                <p className=" text-gray-400  font-semibold">Private Seller</p>
              </Link>
              <Link to={'/dealar'} className=" gap-2 flex items-center">
                <Input  type="radio" />
                <p className=" text-gray-400  font-semibold">Dealar</p>
              </Link>
              
            </div>
          <div className="  sm:w-[70%] w-[100%] flex flex-col gap-4">
            <Input
              label={"Username"}
              placeholder={"Username"}
              className={"border-2 w-full border-gray-200"}
            />
            <Input
              label={"Email"}
              placeholder={"Email"}
              className={"border-2 w-full border-gray-200"}
            />
              <Input
              label={"Phone"}
              placeholder={"Phone"}
              className={"border-2 w-full border-gray-200"}
            />
              <Input
              label={"Password"}
              placeholder={"Password"}
              className={"border-2 w-full border-gray-200"}
            />
             <p className="  text-gray-400 font-bold">Terms, Conditions & Privacy Policy*</p>
            <div className=" flex items-center justify-between">
              <div className=" gap-2 flex items-center">
                <Input type="checkbox" />
                <p className=" text-gray-400  font-semibold">By sign up you agree to terms & Conditions and Privacy Policy  </p>
              </div>
              
            </div>
          </div>
          <Link onClick={handlerRegister} className=" pt-12">
            <Button
              label={"Register"}
              className={" bg-orange-600 rounded-md  mt-8 py-2 px-8  text-white"}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};
