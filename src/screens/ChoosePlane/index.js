import React from 'react'
import Button from '../../components/Button'
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const ChoosePlane = () => {

    const navigate = useNavigate();
  return (
    <div className=' py-10 container mx-auto'>
              <h2 className="  text-4xl  font-semibold text-textColor pb-7 text-center">Choose a Plan</h2>
        <div className=' flex gap-4 justify-center'>
            <div className=' rounded-3xl relative  w-96 h-[650px] py-8 bg-gray-100'>

                <div className=' text-center'>
                    <img src={require('../../assets/images/plane3.png')} className=' w-24 mx-auto' alt='' />

                    <h1 className=' text-primary text-3xl font-bold my-2'>FREE</h1>
                </div>


                <hr/>
                <div className=' py-8 px-12'>
                <ul className=' leading-8'>
                    <li className=' flex gap-2 items-center'>
                    <FaCheckCircle color='' className=' text-primary' />
                    <p className=' font-semibold text-textColor'>Upload up to 5 Photos </p>
                    </li>
                    <li className=' flex gap-2 items-center'>
                    <FaCheckCircle color='' className=' text-primary' />
                    <p className=' font-semibold text-textColor'>2 Cars may be active on this package </p>
                    </li>
                    <li className=' flex gap-2 items-center'>
                    <FaCheckCircle color='' className=' text-primary' />
                    <p className=' font-semibold text-textColor'>25 Days Active Listing</p>
                    </li>
                 </ul>
             



                <Button label={'Select Package'} className={' bg-primary absolute py-2  bottom-12 mx-auto rounded-3xl w-72 text-white'} />
                </div>

            </div>
            <div className=' rounded-3xl relative w-96   h-[650px] py-8 bg-gray-100'>

<div className=' text-center'>
    <img src={require('../../assets/images/plane2.png')} className=' w-24 mx-auto' alt='' />

    <h1 className=' text-primary text-3xl font-bold my-2'>QR 100</h1>
</div>


<hr/>
<div className=' py-8 px-12'>
<ul className=' leading-8'>
    <li className=' flex gap-2 items-center'>
    <FaCheckCircle color='' className=' text-primary' />
    <p className=' font-semibold text-textColor'>Upload up to 10 Photos </p>
    </li>
    <li className=' flex gap-2 items-center'>
    <FaCheckCircle color='' className=' text-primary' />
    <p className=' font-semibold text-textColor'>Featured Ad for 5 days </p>
    </li>
    <li className=' flex gap-2 items-center'>
    <FaCheckCircle color='' className=' text-primary' />
    <p className=' font-semibold text-textColor'>45 Days Active Listing</p>
    </li>
    <li className=' flex gap-2 items-center'>
    <FaCheckCircle color='' className=' text-primary' />
    <p className=' font-semibold text-textColor'>1 Booster every 2 weeks to refresh your ad whenever during the 45 Days.</p>
    </li>
 </ul>
 <p className=' text-center text-secondary  font-extrabold'>{`{x10 more Views & Calls}`}</p>



<Button label={'Select Package'} className={' bg-primary py-2 absolute  bottom-12 mx-auto rounded-3xl w-72 text-white'} />
</div>

</div>
<div className=' rounded-3xl relative w-96   h-[650px] py-8 bg-gray-100'>

<div className=' text-center'>
    <img src={require('../../assets/images/plane1.png')} className=' w-24 mx-auto' alt='' />

    <h1 className=' text-primary text-3xl font-bold my-2'>QR 150</h1>
</div>


<hr/>
<div className=' py-8 px-12'>
<ul className=' leading-8'>
    <li className=' flex gap-2 items-center'>
    <FaCheckCircle color='' className=' text-primary' />
    <p className=' font-semibold text-textColor'>Upload up to 20 Photos </p>
    </li>
    <li className=' flex gap-2 items-center'>
    <FaCheckCircle color='' className=' text-primary' />
    <p className=' font-semibold text-textColor'>360 Angle of Interior </p>
    </li>
    <li className=' flex gap-2 items-center'>
    <FaCheckCircle color='' className=' text-primary' />
    <p className=' font-semibold text-textColor'>Featured Ad for 10 days</p>
    </li>
    <li className=' flex gap-2 items-center'>
    <FaCheckCircle color='' className=' text-primary' />
    <p className=' font-semibold text-textColor'>60 Days Active Listing</p>
    </li>
    <li className=' flex gap-2'>
    <span>
    <FaCheckCircle color='' className=' text-primary' />
    </span>
    <p className=' font-semibold text-textColor'>1 Booster every Week to refresh your ad whenever during the 60 Days (One of our members will contact you instantly to take pics & upload them)</p>
    </li>
 </ul>
  <p className=' text-center text-secondary  font-extrabold'>{`{x25 more Views & Calls}`}</p>



<Button  onClick={()=>navigate('/car_details')} label={'Select Package'} className={' bg-primary absolute  py-2 bottom-12 mx-auto rounded-3xl w-72 text-white'} />
</div>

</div>
        </div>
    </div>
  )
}

export default ChoosePlane