import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const ContactUs = () => {
  return (
    <section className=" py-10  px-4 container mx-auto justify-between md:flex block">
      {/*  left */}
      <div className=" md:w-[46%] w-[100%]">
        <div>
          <img
            src={require("../../assets/images/contact.png")}
            className=" rounded-md"
            alt=""
          />
        </div>
        <div className=" py-8">
          <h1 className=" text-black  pb-3 font-bold text-2xl">Contact Us</h1>
          <p className=" text-gray-500 font-medium">
            While others get bummed when asked for help, we get pumped to serve
            you! Team YallaMotor is ever ready to help you every step of the
            way. We’ve deployed dedicated resources to assist, guide, attend and
            answer your queries throughout the week.
          </p>
          <h1 className=" text-black  font-bold text-2xl pt-10">TELEPHONE</h1>
          <p>
            Support is also available via phone, but to get the fastest response
            please use the email form. Please do not forget to leave your
            contact details and email address if using voicemail.
          </p>

          <div className=" pt-10">
            <h2 className=" text-[#0000ff]  font-bold text-lg">
              +9714 556 9700
            </h2>
            <h2 className="text-[#0000ff]  font-bold text-lg">
              (9 AM To 6 PM)
            </h2>
          </div>
        </div>
      </div>

      {/* right */}

      <div className=" md:w-[40%] w-[100%]">
        <h1 className=" text-black  font-bold text-xl">ASK US ANYTHING</h1>

        <div className=" flex flex-col gap-6 pt-8">
          <Input
            placeholder={"Username"}
            label={"Username:"}
            className={" border w-full"}
          />
          <Input
            placeholder={"Email"}
            label={"Email:"}
            className={" border w-full"}
          />
          <Input
            placeholder={"Phone"}
            label={"Phone:"}
            className={" border w-full"}
          />
          <Input
            placeholder={"Subject"}
            label={"Subject:"}
            className={" border w-full"}
          />
          <div>
            <label className="  font-medium  text-sm">Message:</label>
            <textarea
              rows={6}
              placeholder={"Leave us a message"}
              label={"Message:"}
              className={"   p-2 rounded-md border w-full"}
            />
          </div>
          <Button
            label={"SEND"}
            className={
              " bg-[#0000ff]      rounded-3xl      py-3  w-72 mx-auto  text-white"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
