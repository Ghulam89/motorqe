import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import Button from '../../components/Button'
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import {LiaLongArrowAltRightSolid} from  "react-icons/lia";
import { Link } from 'react-router-dom';
const CarPhotos = () => {
  return (
    <div> <div className=" py-8 text-center">
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
        <div className="w-8 h-8 bg-white border-textColor border items-center  rounded-full flex justify-center">
          <p className=" text-textColor">2</p>
        </div>
        <Link to={'/car_details'}  >
          <span className="  font-bold text-textColor">Car Details</span>
        </Link>
      </li>
      <li>
        <FaAngleRight className=" text-gray-500" />
      </li>
      <li className=" flex items-center gap-2">
        <div className=" w-8 h-8 bg-primary items-center  rounded-full flex justify-center">
          <p className=" text-white">3</p>
        </div>
        <Link to={'/car_photos'} >
          <span className=" text-primary font-semibold">Photo</span>
        </Link>
      </li>
      <li>
        <FaAngleRight className=" text-gray-500" />
      </li>
      <li className=" flex items-center gap-2">
        <div className=" w-8 h-8 bg-white border-textColor border items-center  rounded-full flex justify-center">
          <p className=" text-textColor">3</p>
        </div>
        <Link to={'/contact_details'}>
          <span className=" text-textColor font-semibold">
            Contact Details
          </span>
        </Link>
      </li>
    </ul>
  </div>




  <div className=" shadow-md rounded-xl text-center mt-8 py-5 px-12 mx-auto  w-[80%]">
        <div className="">
          <h2 className=" h4  text-center">Upload Car Images</h2>
        </div>


        <div className=' flex justify-center mt-5  gap-10 mb-12  flex-wrap'>
        <div className="bg-[#FEFBFB] border  rounded-md p-1 text-center w-32 flex  justify-center items-center">
            <div>
            <img src={require('../../assets/images/upload.png')} className=" mb-2 w-16" alt="" />
              <span className=" text-secondary font-semibold  mt-2">Front</span>
            </div>
            </div>

            <div className="bg-[#FEFBFB] border rounded-md p-1 text-center w-32 flex  justify-center items-center">
            <div>
            <img src={require('../../assets/images/upload.png')} className=" mb-2 w-16" alt="" />
              <span className=" text-secondary font-semibold  mt-2">Back</span>
            </div>
            </div>
            <div className="bg-[#FEFBFB] border rounded-md p-1 text-center w-32 flex  justify-center items-center">
            <div>
            <img src={require('../../assets/images/upload.png')} className=" mb-2 w-16" alt="" />
              <span className=" text-secondary font-semibold  mt-2">Left Side</span>
            </div>
            </div>
            <div className="bg-[#FEFBFB] border rounded-md p-1 text-center w-32 flex  justify-center items-center">
            <div>
            <img src={require('../../assets/images/upload.png')} className=" mb-2 w-16" alt="" />
              <span className=" text-secondary font-semibold  mt-2">Right Side</span>
            </div>
            </div>
            <div className="bg-[#FEFBFB] border rounded-md p-1 text-center w-32 flex  justify-center items-center">
            <div>
            <img src={require('../../assets/images/upload.png')} className=" mb-2 w-16" alt="" />
              <span className=" text-secondary font-semibold  mt-2">Dashboard</span>
            </div>
            </div>
            <div className="bg-[#FEFBFB] border rounded-md p-1 text-center w-32 flex  justify-center items-center">
            <div>
            <img src={require('../../assets/images/upload.png')} className=" mb-2 w-16" alt="" />
              <span className=" text-secondary font-semibold  mt-2">Side</span>
            </div>
            </div>
            <div className="bg-[#FEFBFB] border rounded-md p-1 text-center w-32 flex  justify-center items-center">
            <div>
            <img src={require('../../assets/images/upload.png')} className=" mb-2 w-16" alt="" />
              <span className=" text-secondary font-semibold  mt-2">Interior</span>
            </div>
            </div>
            <div className="bg-[#FEFBFB] border rounded-md p-1 text-center w-32 flex  justify-center items-center">
            <div>
            <img src={require('../../assets/images/upload.png')} className=" mb-2 w-16" alt="" />
              <span className=" text-secondary font-semibold  mt-2">Front Seats</span>
            </div>
            </div>
            <div className="bg-[#FEFBFB] border rounded-md p-1 text-center w-32 flex  justify-center items-center">
            <div>
            <img src={require('../../assets/images/upload.png')} className=" mb-2 w-16" alt="" />
              <span className=" text-secondary font-semibold  mt-2">Rear Seats</span>
            </div>
            </div>
        </div>
       
       <span className=' text-textColor font-bold '>Note:Plans: SIlver upto 5 images,  Gold upto 10 Images, Platinum upto 15 Images
 </span>
  
      </div>

      <div className=' container flex justify-between items-center mx-auto mt-10 mb-20'>
        <div className='  flex items-center gap-3'> 
        <LiaLongArrowAltLeftSolid />
           <span className=' text-textColor font-semibold'>Back</span>
        </div>
        <Link  to={'/contact_details'} >
           <Button label={'Next'}  rIcons={ <LiaLongArrowAltRightSolid />}  className={' bg-primary rounded-3xl text-white w-44 py-1.5'} />
        </Link>
      </div>
  </div>
  )
}

export default CarPhotos