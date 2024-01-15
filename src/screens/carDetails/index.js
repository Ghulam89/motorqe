import React from "react";
import { FaAngleRight, FaLocationDot } from "react-icons/fa6";
import Input from "../../components/Input";
import Option from "../../components/Option";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const CarDetails = () => {
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
            <div className=" w-8 h-8 bg-primary items-center  rounded-full flex justify-center">
              <p className=" text-white">2</p>
            </div>
            <div>
              <span className=" text-primary font-bold">Car Details</span>
            </div>
          </li>
          <li>
            <FaAngleRight className=" text-gray-500" />
          </li>
          <li className=" flex items-center gap-2">
            <Link to={'/car_photos'} className=" w-8 h-8 bg-white border-textColor border items-center  rounded-full flex justify-center">
              <p className=" text-textColor">3</p>
            </Link>
            <div>
              <span className=" text-textColor font-semibold">Photo</span>
            </div>
          </li>
          <li>
            <FaAngleRight className=" text-gray-500" />
          </li>
          <li className=" flex items-center gap-2">
            <div className=" w-8 h-8 bg-white border-textColor border items-center  rounded-full flex justify-center">
              <p className=" text-textColor">3</p>
            </div>
            <div>
              <span className=" text-textColor font-semibold">
                Contact Details
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className=" shadow-md rounded-xl mt-8 py-5 px-12 mx-auto  w-[80%]">
        <div className="">
          <h2 className=" h4  text-center">Car Details</h2>
        </div>

        <div className=" flex flex-col gap-6">
          <div>
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Enter Title"}
              label={"Title of Listing"}
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Type Of Ad"}
            />
          </div>
          <div>
            <Option options={options} onSelect={handleSelect} label={"Make"} />
          </div>
          <div>
            <Option options={options} onSelect={handleSelect} label={"Model"} />
          </div>
          <div>
            <Option options={options} onSelect={handleSelect} label={"Year"} />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Vehicle Condition/Status"}
            />
          </div>
          <div>
            <Input
              className={"  border w-full  p-2 bg-[#FEFBFB]"}
              placeholder={"Enter Mileage"}
              label={"Mileage"}
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Vehicle Category"}
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Specifications"}
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Cylinder"}
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Engine Size"}
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Wheel Drive"}
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Gear Box"}
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Exterior Colour"}
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Interior  Colour"}
            />
          </div>
          <div>
            <Option
              options={fuel}
              onSelect={handleSelect}
              label={"Fuel Type"}
            />
          </div>
          <div>
            <Input
              className={"  border w-full  p-2 bg-[#FEFBFB]"}
              placeholder={"Enter Registration Date"}
              label={"Registration Date"}

              Icon={<FaCalendarAlt  className=" text-textColor"  size={20} />}
              
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Warranty"}
            />
          </div>
          <div>
            <Input
              className={"  border w-full  p-2 bg-[#FEFBFB]"}
              placeholder={"Enter Warranty Date"}
              label={"Warranty Date"}

              Icon={<FaCalendarAlt  className=" text-textColor"  size={20} />}
              
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Inspected"}
            />
          </div>
          <div>
            <p className=" text-textColor font-semibold">Inspection Report</p>
            <div className="bg-[#FEFBFB] border rounded-md p-1 w-40 flex  justify-center items-center">
            <div>
            <img src={require('../../assets/images/upload.png')} className=" mx-auto w-20" alt="" />
              <span className=" text-secondary font-semibold ">Inspection report</span>
            </div>
            </div>
            <p className=" pt-4 text-textColor text-sm">Maximum File Size 1Mb</p>
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Price (QR)"}
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Price Range"}
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Negotiable"}
            />
          </div>
          <div>
            <Option
              options={options}
              onSelect={handleSelect}
              label={"Negotiable"}
            />
          </div>
          <div>
            <Input
              className={"  border w-full h-24   p-2 bg-[#FEFBFB]"}
              placeholder={"Enter Description"}
              label={"Description"}

             
              
            />
          </div>
          <div>
            <Input
              className={"  border w-full  p-2 bg-[#FEFBFB]"}
              placeholder={"Enter Location"}
              label={"Vehicle Location"}

              Icon={<FaLocationDot  className=" text-textColor"  size={20} />}
              
            />
          </div>

          <div>
            <img src={require('../../assets/images/location.png')} />
          </div>

        </div>

        <h2 className=" h4  text-center mt-10 pb-7"> Spare Parts</h2>
        <div className=" flex flex-wrap gap-6">
   

        <div className=" w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Engine Oil"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Engine Oil Filter"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Gearbox Oil"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"A.C Filter"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Air Filter"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Fuel Filter"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Spark Plugs"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Front Brake Pads"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Rear Brake Pads"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Front Brake Discs"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Rear Brake Discs"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Battery"}
            />
          </div>
        </div>




        <h2 className=" h4  text-center mt-10 pb-7"> Tyres</h2>
        <div className=" flex flex-wrap gap-6">
   

        <div className=" w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Front Tire Size"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Front Tire Price"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Rear Tire Size"}
            />
          </div>
          <div className="  w-[48%]">
            <Input
              className={"  border w-full p-2  bg-[#FEFBFB]"}
              placeholder={"Price"}
              label={"Rear Tire Price"}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
