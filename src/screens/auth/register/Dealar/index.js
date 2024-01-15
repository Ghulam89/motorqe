import React from "react";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const Dealar = () => {
  return (
    <div>
      <section className=" block md:flex  pb-20">
        {/* login section */}
       
        <div className="  w-[100%] px-8 md:w-[55%] pt-12">
          <h3 className="   pb-3 font-bold  text-black  text-3xl">
          Register to sell your Vehicle
          </h3>
          <p>Create new account today.</p>

          <div className=" pt-10 gap-6 md:flex block items-center">
            <h6> Continue with:</h6>
            <div className=" flex gap-2">
              <Button
                label={"Google"}
                Icons={
                  <img
                    src={require("../../../../assets/images/google.png")}
                    alt=""
                  />
                }
                className={" bg-white border-gray-200 border-2  px-14 rounded-md  text-black"}
              />
              <Button
                label={"Facebook"}
                Icons={
                  <img
                    src={require("../../../../assets/images/facebook.png")}
                    alt=""
                  />
                }
                className={"bg-white border-gray-200 border-2  rounded-md  px-14  text-black"}
              />
            </div>
          </div>
          <h3 className="   font-semibold  text-black  py-7 text-xl">OR</h3>
          <div className="  pb-7 pt-3 flex items-center gap-6">
          <Link to={'/'} className=" gap-2 flex items-center">
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
              label={"Company Name"}
              placeholder={"Enter your company name"}
              className={"border-2 w-full border-gray-200"}
            />
            <Input
              label={"First Name"}
              placeholder={"Enter First Name"}
              className={"border-2 w-full border-gray-200"}
            />
              <Input
              label={"Last Name"}
              placeholder={"Enter Last Name"}
              className={"border-2 w-full border-gray-200"}
            />
             <Input
              label={"Contact Number"}
              placeholder={"Enter Contact Number"}
              className={"border-2 w-full border-gray-200"}
            />
             <Input
              label={"Email"}
              placeholder={"Enter Email"}
              className={"border-2 w-full border-gray-200"}
            />
              <Input

               Icon={<FaRegEyeSlash  className=" text-gray-500" />}
              label={"Password"}
              placeholder={"Enter Password"}
              className={"border-2 w-full border-gray-200"}
            />
             <Input
              Icon={<FaRegEyeSlash  className=" text-gray-500" />}
              label={"Confirm Password"}
              placeholder={"Enter Confirm Password"}
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
          <div className=" pt-12">
            <Button
              label={"Register"}
              className={" bg-orange-600 rounded-md  px-8  py-2 text-white"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
