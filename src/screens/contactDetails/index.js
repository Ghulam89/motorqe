import React from "react";
import { FaAngleRight, FaLocationDot } from "react-icons/fa6";
import Input from "../../components/Input";
import Option from "../../components/Option";
import { FaCalendarAlt } from "react-icons/fa";
import { LiaLongArrowAltLeftSolid, LiaLongArrowAltRightSolid } from "react-icons/lia";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const ContactDetails = () => {
  const options = ["select Type", "Gently Used"];
  const fuel = ["select Fuel Type", "Gently Used"];
 

  const handleSelect = (selectedOptions) => {
    console.log("Selected options:", selectedOptions);
    // You can perform any other actions with the selected options
  };
  return (
    <div>
      <div className=" py-8 text-center">
        <h2 className=" h2  text-center">Sell Your Car</h2>
        <p className=" pt-2 text-gray-400">
          Sell your car in seconds with just a few clicks
        </p>
      </div>
      <div className=" py-8">
        <ul className=" flex gap-8 justify-center items-center">
          <li className=" flex items-center gap-2">
            <div className=" w-8 h-8 bg-secondary items-center  rounded-full flex justify-center">
              <p className=" text-white">1</p>
            </div>
            <div>
              <span className=" text-secondary font-bold">Type Of Package</span>
            </div>
          </li>
          <li>
            <FaAngleRight className=" text-gray-500" />
          </li>
          <li className=" flex items-center gap-2">
            <div className=" w-8 h-8 bg-white border-textColor border items-center  rounded-full flex justify-center">
              <p className=" text-textColor">2</p>
            </div>
            <Link to={'/car_details'}>
              <span className=" text-textColor font-semibold ">Car Details</span>
            </Link>
          </li>
          <li>
            <FaAngleRight className=" text-gray-500" />
          </li>
          <li className=" flex items-center gap-2">
            <div className=" w-8 h-8 bg-white border-textColor border items-center  rounded-full flex justify-center">
              <p className=" text-textColor">3</p>
            </div>
            <Link to={'/car_photos'}>
              <span className=" text-textColor font-semibold">Photo</span>
            </Link>
          </li>
          <li>
            <FaAngleRight className=" text-gray-500" />
          </li>
          <li className=" flex items-center gap-2">
            <div className="w-8 h-8 bg-primary items-center  rounded-full flex justify-center">
              <p className=" text-white">4</p>
            </div>
            <Link to={'/contact_details'}>
              <span className=" text-primary font-bold">
                Contact Details
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className=" pb-12 shadow-md rounded-xl mt-8 py-5 px-12 mx-auto  w-[80%]">
        <div className="">
          <h2 className=" h3  text-center">Contact  Details</h2>
        </div>

        <div className=" flex flex-col gap-6">
          <div>
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Enter Your Name"}
              label={"Name"}
            />
          </div>
          <div>
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Mobile No."}
              label={"Enter Mobile No"}
            />
          </div>
          <div>
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Whatsapp No."}
              label={"Enter Whatsapp No"}
            />
          </div>
          <div>
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Email Address"}
              label={"Enter Email Address"}
            />
          </div>
         
       
         
          
         

        </div>

      </div>

      <div className=' container flex justify-between items-center mx-auto mt-10 mb-20'>
        <div className='  flex items-center gap-3'> 
        <LiaLongArrowAltLeftSolid />
           <span className=' text-textColor font-semibold'>Back</span>
        </div>
        <div>
           <Button label={'Submit'}  className={' bg-primary font-bold rounded-3xl text-white w-44 py-1.5'} />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
