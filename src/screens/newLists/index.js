import React, { useState } from "react";
import SearchComponents from "../../components/SearchComponents";
import Button from "../../components/Button";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCall, IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import Input from "../../components/Input";
import Option from "../../components/Option";
import { Link } from "react-router-dom";
const NewLists = () => {
  const options = ["select Make", "Gently Used"];
  const Model = ["select Model", "Gently Used"];
  const Year = ["select Year", "Gently Used"];
  const VehicleSelect = ["select Vehicle", "Gently Used"];
  const selectSeller = ["select Seller Type", "Gently Used"];
  const fuel = ["select Fuel Type", "Gently Used"];

  const handleSelect = (selectedOptions) => {
    console.log("Selected options:", selectedOptions);
    // You can perform any other actions with the selected options
  };

  const [newLists, setNewLists] = useState("grid");

  return (
    <div className=" container mx-auto">
      <div className=" py-12">
        <div className="bg-[#ECECEC] py-9 rounded-2xl  border border-primary">
          <div className=" w-[80%] mx-auto text-center">
            <div className=" flex justify-center w-full gap-3">
              <div className="  w-60">
                <Option
                  options={options}
                  onSelect={handleSelect}
                  label={"Make"}
                />
              </div>
              <div className="  w-60">
                <Option
                  options={Model}
                  onSelect={handleSelect}
                  label={"Model"}
                />
              </div>
              <div className="  w-60">
                <Option options={Year} onSelect={handleSelect} label={"Year"} />
              </div>
              <div className="  w-60">
                <Option
                  options={VehicleSelect}
                  onSelect={handleSelect}
                  label={"Vehicle Condition"}
                />
              </div>
              <div className="  w-60">
                <Option
                  options={selectSeller}
                  onSelect={handleSelect}
                  label={"Seller Type"}
                />
              </div>
            </div>

            <div className=" pt-12">
              <Button
                label={"Search"}
                className={
                  " bg-primary py-2 w-48 mx-auto text-white rounded-3xl"
                }
              />

              <div className=" flex gap-2 justify-center pt-2">
                <p className="text-secondary  border-b  border-secondary  font-medium">
                  Filters
                </p>
                <p className=" text-secondary  border-b  border-secondary  font-medium">
                  Clear Filters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" my-8 flex justify-between items-center">
        <div>
          <span className="  text-[#C1C1C1] text-lg font-medium">
            1 - 21 of <span className=" font-bold">4,221</span> used cars
          </span>
        </div>
        <div className=" flex gap-5">
          <TfiLayoutGrid2Alt
            onClick={() => setNewLists("grid")}
            size={35}
            className=" text-[#C1C1C1]"
          />
          <FaList
            onClick={() => setNewLists("list")}
            size={35}
            className=" text-[#C1C1C1]"
          />

          <div className=" border rounded-md flex items-center justify-between p-1 w-56">
            <span className=" text-textColor font-semibold">
              Sort by : Newly added
            </span>
            <FaSortAmountUpAlt size={20} className=" text-[#C1C1C1]" />
          </div>
        </div>
      </div>

      {newLists === "grid" ? (
        <div  className=" flex flex-wrap  my-12 gap-6">
          <Link  to={"/car_details_page"} className="border-4   w-[400px] border-primary  rounded-2xl overflow-hidden">
            <div className="">
              <div className="relative   h-60">
                <img
                  src={require("../../assets/images/image 7.png")}
                  className=" w-full h-full object-cover"
                  alt=""
                />

                <div className=" absolute top-2 right-2">
                  <Button
                    label={"featured"}
                    className={
                      " uppercase py-1 bg-lightBlue  text-sm  text-white font-semibold rounded-3xl"
                    }
                  />
                </div>

                <div className=" absolute bottom-0 flex justify-between w-full items-center px-2">
                  <div>
                    <img
                      src={require("../../assets/images/speed.png")}
                      alt=""
                    />
                  </div>
                  <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-white">
                    <CiHeart size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" justify-between p-4">
              <div>
                <div className=" flex justify-between items-center">
                  <h5 className=" text-textColor text-lg font-bold uppercase">
                    Chevrolet Camaro For Sale{" "}
                  </h5>
                  <div className="  float-right">
                    <img
                      src={require("../../assets/images/brands.png")}
                      className=" text-right  w-12"
                      alt=""
                    />
                  </div>
                </div>

                <div className=" flex justify-between  items-center">
                  <h5 className=" pt-3 text-secondary text-lg font-bold uppercase">
                    qr 15,000
                  </h5>
                  <h5 className=" text-green text-lg font-bold uppercase">
                    QR 16,00/month
                  </h5>
                </div>

                <div className="  mt-3 flex justify-between items-center">
                  <div className=" flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/can.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">2021</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/cal.png")}
                      className=" w-6"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      4 Cylinder
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/road.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      44, 882 KM
                    </span>
                  </div>
                </div>
                <div className=" flex  justify-between items-center">
                  <div>
                    <h2 className="   text-secondary font-bold">Compare</h2>
                  </div>
                  <div className=" flex gap-1 my-2">
                    <img
                      src={require("../../assets/images/security.png")}
                      alt=""
                    />

                    <img
                      src={require("../../assets/images/Frame.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className=" font-bold text-textColor">2 Hours Ago</h5>
                  </div>
                </div>
              </div>

              <div className=" flex justify-between items-center">
                <Button
                  Icons={<IoCall size={20} />}
                  label={"Call"}
                  className={
                    " py-1.5 text-sm mt-3  bg-secondary text-white  rounded-3xl"
                  }
                />
                <Button
                  Icons={
                    <img src={require("../../assets/images/chat.png")} alt="" />
                  }
                  label={"Chat"}
                  className={
                    " py-1.5 text-sm bg-primary font-bold  mt-3 text-white  rounded-3xl"
                  }
                />
                <Button
                  label={"Whatsapp"}
                  Icons={<FaWhatsapp size={20} />}
                  className={
                    " py-1.5 text-sm bg-green  mt-3 text-white  rounded-3xl"
                  }
                />
              </div>
            </div>
          </Link>
          <Link  to={"/car_details_page"} className="border-4   w-[400px] border-primary  rounded-2xl overflow-hidden">
            <div className="">
              <div className="relative   h-60">
                <img
                  src={require("../../assets/images/image 7.png")}
                  className=" w-full h-full object-cover"
                  alt=""
                />

                <div className=" absolute top-2 right-2">
                  <Button
                    label={"featured"}
                    className={
                      " uppercase py-1 bg-lightBlue  text-sm  text-white font-semibold rounded-3xl"
                    }
                  />
                </div>

                <div className=" absolute bottom-0 flex justify-between w-full items-center px-2">
                  <div>
                    <img
                      src={require("../../assets/images/speed.png")}
                      alt=""
                    />
                  </div>
                  <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-white">
                    <CiHeart size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" justify-between p-4">
              <div>
                <div className=" flex justify-between items-center">
                  <h5 className=" text-textColor text-lg font-bold uppercase">
                    Chevrolet Camaro For Sale{" "}
                  </h5>
                  <div className="  float-right">
                    <img
                      src={require("../../assets/images/brands.png")}
                      className=" text-right  w-12"
                      alt=""
                    />
                  </div>
                </div>

                <div className=" flex justify-between  items-center">
                  <h5 className=" pt-3 text-secondary text-lg font-bold uppercase">
                    qr 15,000
                  </h5>
                  <h5 className=" text-green text-lg font-bold uppercase">
                    QR 16,00/month
                  </h5>
                </div>

                <div className="  mt-3 flex justify-between items-center">
                  <div className=" flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/can.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">2021</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/cal.png")}
                      className=" w-6"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      4 Cylinder
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/road.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      44, 882 KM
                    </span>
                  </div>
                </div>
                <div className=" flex  justify-between items-center">
                  <div>
                    <h2 className="   text-secondary font-bold">Compare</h2>
                  </div>
                  <div className=" flex gap-1 my-2">
                    <img
                      src={require("../../assets/images/security.png")}
                      alt=""
                    />

                    <img
                      src={require("../../assets/images/Frame.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className=" font-bold text-textColor">2 Hours Ago</h5>
                  </div>
                </div>
              </div>

              <div className=" flex justify-between items-center">
                <Button
                  Icons={<IoCall size={20} />}
                  label={"Call"}
                  className={
                    " py-1.5 text-sm mt-3  bg-secondary text-white  rounded-3xl"
                  }
                />
                <Button
                  Icons={
                    <img src={require("../../assets/images/chat.png")} alt="" />
                  }
                  label={"Chat"}
                  className={
                    " py-1.5 text-sm bg-primary font-bold  mt-3 text-white  rounded-3xl"
                  }
                />
                <Button
                  label={"Whatsapp"}
                  Icons={<FaWhatsapp size={20} />}
                  className={
                    " py-1.5 text-sm bg-green  mt-3 text-white  rounded-3xl"
                  }
                />
              </div>
            </div>
          </Link>
          <Link  to={"/car_details_page"} className="border-4   w-[400px] border-primary  rounded-2xl overflow-hidden">
            <div className="">
              <div className="relative   h-60">
                <img
                  src={require("../../assets/images/image 7.png")}
                  className=" w-full h-full object-cover"
                  alt=""
                />

                <div className=" absolute top-2 right-2">
                  <Button
                    label={"featured"}
                    className={
                      " uppercase py-1 bg-lightBlue  text-sm  text-white font-semibold rounded-3xl"
                    }
                  />
                </div>

                <div className=" absolute bottom-0 flex justify-between w-full items-center px-2">
                  <div>
                    <img
                      src={require("../../assets/images/speed.png")}
                      alt=""
                    />
                  </div>
                  <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-white">
                    <CiHeart size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" justify-between p-4">
              <div>
                <div className=" flex justify-between items-center">
                  <h5 className=" text-textColor text-lg font-bold uppercase">
                    Chevrolet Camaro For Sale{" "}
                  </h5>
                  <div className="  float-right">
                    <img
                      src={require("../../assets/images/brands.png")}
                      className=" text-right  w-12"
                      alt=""
                    />
                  </div>
                </div>

                <div className=" flex justify-between  items-center">
                  <h5 className=" pt-3 text-secondary text-lg font-bold uppercase">
                    qr 15,000
                  </h5>
                  <h5 className=" text-green text-lg font-bold uppercase">
                    QR 16,00/month
                  </h5>
                </div>

                <div className="  mt-3 flex justify-between items-center">
                  <div className=" flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/can.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">2021</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/cal.png")}
                      className=" w-6"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      4 Cylinder
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/road.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      44, 882 KM
                    </span>
                  </div>
                </div>
                <div className=" flex  justify-between items-center">
                  <div>
                    <h2 className="   text-secondary font-bold">Compare</h2>
                  </div>
                  <div className=" flex gap-1 my-2">
                    <img
                      src={require("../../assets/images/security.png")}
                      alt=""
                    />

                    <img
                      src={require("../../assets/images/Frame.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className=" font-bold text-textColor">2 Hours Ago</h5>
                  </div>
                </div>
              </div>

              <div className=" flex justify-between items-center">
                <Button
                  Icons={<IoCall size={20} />}
                  label={"Call"}
                  className={
                    " py-1.5 text-sm mt-3  bg-secondary text-white  rounded-3xl"
                  }
                />
                <Button
                  Icons={
                    <img src={require("../../assets/images/chat.png")} alt="" />
                  }
                  label={"Chat"}
                  className={
                    " py-1.5 text-sm bg-primary font-bold  mt-3 text-white  rounded-3xl"
                  }
                />
                <Button
                  label={"Whatsapp"}
                  Icons={<FaWhatsapp size={20} />}
                  className={
                    " py-1.5 text-sm bg-green  mt-3 text-white  rounded-3xl"
                  }
                />
              </div>
            </div>
          </Link>
          <Link  to={"/car_details_page"} className="border-4   w-[400px] border-primary  rounded-2xl overflow-hidden">
            <div className="">
              <div className="relative   h-60">
                <img
                  src={require("../../assets/images/image 7.png")}
                  className=" w-full h-full object-cover"
                  alt=""
                />

                <div className=" absolute top-2 right-2">
                  <Button
                    label={"featured"}
                    className={
                      " uppercase py-1 bg-lightBlue  text-sm  text-white font-semibold rounded-3xl"
                    }
                  />
                </div>

                <div className=" absolute bottom-0 flex justify-between w-full items-center px-2">
                  <div>
                    <img
                      src={require("../../assets/images/speed.png")}
                      alt=""
                    />
                  </div>
                  <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-white">
                    <CiHeart size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" justify-between p-4">
              <div>
                <div className=" flex justify-between items-center">
                  <h5 className=" text-textColor text-lg font-bold uppercase">
                    Chevrolet Camaro For Sale{" "}
                  </h5>
                  <div className="  float-right">
                    <img
                      src={require("../../assets/images/brands.png")}
                      className=" text-right  w-12"
                      alt=""
                    />
                  </div>
                </div>

                <div className=" flex justify-between  items-center">
                  <h5 className=" pt-3 text-secondary text-lg font-bold uppercase">
                    qr 15,000
                  </h5>
                  <h5 className=" text-green text-lg font-bold uppercase">
                    QR 16,00/month
                  </h5>
                </div>

                <div className="  mt-3 flex justify-between items-center">
                  <div className=" flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/can.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">2021</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/cal.png")}
                      className=" w-6"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      4 Cylinder
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/road.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      44, 882 KM
                    </span>
                  </div>
                </div>
                <div className=" flex  justify-between items-center">
                  <div>
                    <h2 className="   text-secondary font-bold">Compare</h2>
                  </div>
                  <div className=" flex gap-1 my-2">
                    <img
                      src={require("../../assets/images/security.png")}
                      alt=""
                    />

                    <img
                      src={require("../../assets/images/Frame.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className=" font-bold text-textColor">2 Hours Ago</h5>
                  </div>
                </div>
              </div>

              <div className=" flex justify-between items-center">
                <Button
                  Icons={<IoCall size={20} />}
                  label={"Call"}
                  className={
                    " py-1.5 text-sm mt-3  bg-secondary text-white  rounded-3xl"
                  }
                />
                <Button
                  Icons={
                    <img src={require("../../assets/images/chat.png")} alt="" />
                  }
                  label={"Chat"}
                  className={
                    " py-1.5 text-sm bg-primary font-bold  mt-3 text-white  rounded-3xl"
                  }
                />
                <Button
                  label={"Whatsapp"}
                  Icons={<FaWhatsapp size={20} />}
                  className={
                    " py-1.5 text-sm bg-green  mt-3 text-white  rounded-3xl"
                  }
                />
              </div>
            </div>
          </Link>
          <Link  to={"/car_details_page"} className="border-4   w-[400px] border-primary  rounded-2xl overflow-hidden">
            <div className="">
              <div className="relative   h-60">
                <img
                  src={require("../../assets/images/image 7.png")}
                  className=" w-full h-full object-cover"
                  alt=""
                />

                <div className=" absolute top-2 right-2">
                  <Button
                    label={"featured"}
                    className={
                      " uppercase py-1 bg-lightBlue  text-sm  text-white font-semibold rounded-3xl"
                    }
                  />
                </div>

                <div className=" absolute bottom-0 flex justify-between w-full items-center px-2">
                  <div>
                    <img
                      src={require("../../assets/images/speed.png")}
                      alt=""
                    />
                  </div>
                  <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-white">
                    <CiHeart size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" justify-between p-4">
              <div>
                <div className=" flex justify-between items-center">
                  <h5 className=" text-textColor text-lg font-bold uppercase">
                    Chevrolet Camaro For Sale{" "}
                  </h5>
                  <div className="  float-right">
                    <img
                      src={require("../../assets/images/brands.png")}
                      className=" text-right  w-12"
                      alt=""
                    />
                  </div>
                </div>

                <div className=" flex justify-between  items-center">
                  <h5 className=" pt-3 text-secondary text-lg font-bold uppercase">
                    qr 15,000
                  </h5>
                  <h5 className=" text-green text-lg font-bold uppercase">
                    QR 16,00/month
                  </h5>
                </div>

                <div className="  mt-3 flex justify-between items-center">
                  <div className=" flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/can.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">2021</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/cal.png")}
                      className=" w-6"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      4 Cylinder
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/road.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      44, 882 KM
                    </span>
                  </div>
                </div>
                <div className=" flex  justify-between items-center">
                  <div>
                    <h2 className="   text-secondary font-bold">Compare</h2>
                  </div>
                  <div className=" flex gap-1 my-2">
                    <img
                      src={require("../../assets/images/security.png")}
                      alt=""
                    />

                    <img
                      src={require("../../assets/images/Frame.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className=" font-bold text-textColor">2 Hours Ago</h5>
                  </div>
                </div>
              </div>

              <div className=" flex justify-between items-center">
                <Button
                  Icons={<IoCall size={20} />}
                  label={"Call"}
                  className={
                    " py-1.5 text-sm mt-3  bg-secondary text-white  rounded-3xl"
                  }
                />
                <Button
                  Icons={
                    <img src={require("../../assets/images/chat.png")} alt="" />
                  }
                  label={"Chat"}
                  className={
                    " py-1.5 text-sm bg-primary font-bold  mt-3 text-white  rounded-3xl"
                  }
                />
                <Button
                  label={"Whatsapp"}
                  Icons={<FaWhatsapp size={20} />}
                  className={
                    " py-1.5 text-sm bg-green  mt-3 text-white  rounded-3xl"
                  }
                />
              </div>
            </div>
          </Link>
          <Link  to={"/car_details_page"} className="border-4   w-[400px] border-primary  rounded-2xl overflow-hidden">
            <div className="">
              <div className="relative   h-60">
                <img
                  src={require("../../assets/images/image 7.png")}
                  className=" w-full h-full object-cover"
                  alt=""
                />

                <div className=" absolute top-2 right-2">
                  <Button
                    label={"featured"}
                    className={
                      " uppercase py-1 bg-lightBlue  text-sm  text-white font-semibold rounded-3xl"
                    }
                  />
                </div>

                <div className=" absolute bottom-0 flex justify-between w-full items-center px-2">
                  <div>
                    <img
                      src={require("../../assets/images/speed.png")}
                      alt=""
                    />
                  </div>
                  <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-white">
                    <CiHeart size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" justify-between p-4">
              <div>
                <div className=" flex justify-between items-center">
                  <h5 className=" text-textColor text-lg font-bold uppercase">
                    Chevrolet Camaro For Sale{" "}
                  </h5>
                  <div className="  float-right">
                    <img
                      src={require("../../assets/images/brands.png")}
                      className=" text-right  w-12"
                      alt=""
                    />
                  </div>
                </div>

                <div className=" flex justify-between  items-center">
                  <h5 className=" pt-3 text-secondary text-lg font-bold uppercase">
                    qr 15,000
                  </h5>
                  <h5 className=" text-green text-lg font-bold uppercase">
                    QR 16,00/month
                  </h5>
                </div>

                <div className="  mt-3 flex justify-between items-center">
                  <div className=" flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/can.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">2021</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/cal.png")}
                      className=" w-6"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      4 Cylinder
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/road.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      44, 882 KM
                    </span>
                  </div>
                </div>
                <div className=" flex  justify-between items-center">
                  <div>
                    <h2 className="   text-secondary font-bold">Compare</h2>
                  </div>
                  <div className=" flex gap-1 my-2">
                    <img
                      src={require("../../assets/images/security.png")}
                      alt=""
                    />

                    <img
                      src={require("../../assets/images/Frame.png")}
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className=" font-bold text-textColor">2 Hours Ago</h5>
                  </div>
                </div>
              </div>

              <div className=" flex justify-between items-center">
                <Button
                  Icons={<IoCall size={20} />}
                  label={"Call"}
                  className={
                    " py-1.5 text-sm mt-3  bg-secondary text-white  rounded-3xl"
                  }
                />
                <Button
                  Icons={
                    <img src={require("../../assets/images/chat.png")} alt="" />
                  }
                  label={"Chat"}
                  className={
                    " py-1.5 text-sm bg-primary font-bold  mt-3 text-white  rounded-3xl"
                  }
                />
                <Button
                  label={"Whatsapp"}
                  Icons={<FaWhatsapp size={20} />}
                  className={
                    " py-1.5 text-sm bg-green  mt-3 text-white  rounded-3xl"
                  }
                />
              </div>
            </div>
          </Link>
         
        </div>
      ) : (
        <div className=" my-12 flex flex-col gap-12">
          <Link
            to={"/car_details_page"}
            className="border-4 flex   border-primary  rounded-2xl overflow-hidden"
          >
            <div className=" w-[30%]">
              <div className=" h-60 relative">
                <img
                  src={require("../../assets/images/image 7.png")}
                  className=" w-full object-cover"
                  alt=""
                />

                <div className=" absolute top-2 right-2">
                  <Button
                    label={"featured"}
                    className={
                      " uppercase py-1 bg-lightBlue  text-sm  text-white font-semibold rounded-3xl"
                    }
                  />
                </div>

                <div className=" absolute -bottom-12 flex justify-between w-full items-center px-2">
                  <div>
                    <img
                      src={require("../../assets/images/speed.png")}
                      alt=""
                    />
                  </div>
                  <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-white">
                    <CiHeart size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[70%] flex justify-between p-5">
              <div>
                <h5 className=" text-textColor text-xl font-bold uppercase">
                  Chevrolet Camaro For Sale{" "}
                </h5>
                <h5 className=" pt-3 text-secondary text-lg font-bold uppercase">
                  qr 15,000
                </h5>
                <h5 className=" text-green text-lg font-bold uppercase">
                  QR 16,00/month
                </h5>

                <div className="  mt-3 flex justify-between items-center">
                  <div className=" flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/can.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">2021</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/cal.png")}
                      className=" w-6"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      4 Cylinder
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/road.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      44, 882 KM
                    </span>
                  </div>
                </div>

                <div className=" flex gap-1 my-6">
                  <Button
                    label={"Warranty"}
                    Icons={
                      <img
                        src={require("../../assets/images/security.png")}
                        alt=""
                      />
                    }
                    className={
                      "  text-sm border-2 border-secondary rounded-md text-secondary  font-bold"
                    }
                  />
                  <Button
                    label={"Inspected"}
                    Icons={
                      <img
                        src={require("../../assets/images/Frame.png")}
                        alt=""
                      />
                    }
                    className={
                      " border-2 border-primary rounded-md text-primary  text-sm font-bold"
                    }
                  />
                </div>

                <span className=" text-base text-lightBlue">
                  Do you have a similar{" "}
                  <span className=" font-bold">Cheverolet Camaro </span> to
                  sell? <span className=" font-bold">Sell it yourself!</span>
                </span>
              </div>
              <div>
                <Button
                  Icons={<IoCall size={20} />}
                  label={"Show Number"}
                  className={
                    " py-1.5 text-sm mt-3  bg-secondary text-white  rounded-3xl"
                  }
                />
                <Button
                  Icons={
                    <img src={require("../../assets/images/chat.png")} alt="" />
                  }
                  label={"Chat"}
                  className={
                    " py-1.5 text-sm bg-primary font-bold w-40 mt-3 text-white  rounded-3xl"
                  }
                />
                <Button
                  label={"Whatsapp"}
                  Icons={<FaWhatsapp size={20} />}
                  className={
                    " py-1.5 text-sm bg-green w-40 mt-3 text-white  rounded-3xl"
                  }
                />
                <Button
                  label={"Compare"}
                  className={
                    " py-1 text-sm bg-white mt-5 w-40  text-lightBlue  border-2   border-lightBlue font-semibold  "
                  }
                />

                <div className=" pt-2 float-right">
                  <img
                    src={require("../../assets/images/brands.png")}
                    className=" text-right"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link
            to={"/car_details_page"}
            className="border-4 flex   border-primary  rounded-2xl overflow-hidden"
          >
            <div className=" w-[30%]">
              <div className=" h-60 relative">
                <img
                  src={require("../../assets/images/image 7.png")}
                  className=" w-full object-cover"
                  alt=""
                />

                <div className=" absolute top-2 right-2">
                  <Button
                    label={"featured"}
                    className={
                      " uppercase py-1 bg-lightBlue  text-sm  text-white font-semibold rounded-3xl"
                    }
                  />
                </div>

                <div className=" absolute -bottom-12 flex justify-between w-full items-center px-2">
                  <div>
                    <img
                      src={require("../../assets/images/speed.png")}
                      alt=""
                    />
                  </div>
                  <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-white">
                    <CiHeart size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[70%] flex justify-between p-5">
              <div>
                <h5 className=" text-textColor text-xl font-bold uppercase">
                  Chevrolet Camaro For Sale{" "}
                </h5>
                <h5 className=" pt-3 text-secondary text-lg font-bold uppercase">
                  qr 15,000
                </h5>
                <h5 className=" text-green text-lg font-bold uppercase">
                  QR 16,00/month
                </h5>

                <div className="  mt-3 flex justify-between items-center">
                  <div className=" flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/can.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">2021</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/cal.png")}
                      className=" w-6"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      4 Cylinder
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/road.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      44, 882 KM
                    </span>
                  </div>
                </div>

                <div className=" flex gap-1 my-6">
                  <Button
                    label={"Warranty"}
                    Icons={
                      <img
                        src={require("../../assets/images/security.png")}
                        alt=""
                      />
                    }
                    className={
                      "  text-sm border-2 border-secondary rounded-md text-secondary  font-bold"
                    }
                  />
                  <Button
                    label={"Inspected"}
                    Icons={
                      <img
                        src={require("../../assets/images/Frame.png")}
                        alt=""
                      />
                    }
                    className={
                      " border-2 border-primary rounded-md text-primary  text-sm font-bold"
                    }
                  />
                </div>

                <span className=" text-base text-lightBlue">
                  Do you have a similar{" "}
                  <span className=" font-bold">Cheverolet Camaro </span> to
                  sell? <span className=" font-bold">Sell it yourself!</span>
                </span>
              </div>
              <div>
                <Button
                  Icons={<IoCall size={20} />}
                  label={"Show Number"}
                  className={
                    " py-1.5 text-sm mt-3  bg-secondary text-white  rounded-3xl"
                  }
                />
                <Button
                  Icons={
                    <img src={require("../../assets/images/chat.png")} alt="" />
                  }
                  label={"Chat"}
                  className={
                    " py-1.5 text-sm bg-primary font-bold w-40 mt-3 text-white  rounded-3xl"
                  }
                />
                <Button
                  label={"Whatsapp"}
                  Icons={<FaWhatsapp size={20} />}
                  className={
                    " py-1.5 text-sm bg-green w-40 mt-3 text-white  rounded-3xl"
                  }
                />
                <Button
                  label={"Compare"}
                  className={
                    " py-1 text-sm bg-white mt-5 w-40  text-lightBlue  border-2   border-lightBlue font-semibold  "
                  }
                />

                <div className=" pt-2 float-right">
                  <img
                    src={require("../../assets/images/brands.png")}
                    className=" text-right"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link
            to={"/car_details_page"}
            className="border-4 flex   border-primary  rounded-2xl overflow-hidden"
          >
            <div className=" w-[30%]">
              <div className=" h-60 relative">
                <img
                  src={require("../../assets/images/image 7.png")}
                  className=" w-full object-cover"
                  alt=""
                />

                <div className=" absolute top-2 right-2">
                  <Button
                    label={"featured"}
                    className={
                      " uppercase py-1 bg-lightBlue  text-sm  text-white font-semibold rounded-3xl"
                    }
                  />
                </div>

                <div className=" absolute -bottom-12 flex justify-between w-full items-center px-2">
                  <div>
                    <img
                      src={require("../../assets/images/speed.png")}
                      alt=""
                    />
                  </div>
                  <div className=" w-8 h-8 flex justify-center items-center rounded-full bg-white">
                    <CiHeart size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[70%] flex justify-between p-5">
              <div>
                <h5 className=" text-textColor text-xl font-bold uppercase">
                  Chevrolet Camaro For Sale{" "}
                </h5>
                <h5 className=" pt-3 text-secondary text-lg font-bold uppercase">
                  qr 15,000
                </h5>
                <h5 className=" text-green text-lg font-bold uppercase">
                  QR 16,00/month
                </h5>

                <div className="  mt-3 flex justify-between items-center">
                  <div className=" flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/can.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">2021</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/cal.png")}
                      className=" w-6"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      4 Cylinder
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={require("../../assets/images/road.png")}
                      className=" w-4"
                      alt=""
                    />
                    <span className=" text-textColor font-bold">
                      44, 882 KM
                    </span>
                  </div>
                </div>

                <div className=" flex gap-1 my-6">
                  <Button
                    label={"Warranty"}
                    Icons={
                      <img
                        src={require("../../assets/images/security.png")}
                        alt=""
                      />
                    }
                    className={
                      "  text-sm border-2 border-secondary rounded-md text-secondary  font-bold"
                    }
                  />
                  <Button
                    label={"Inspected"}
                    Icons={
                      <img
                        src={require("../../assets/images/Frame.png")}
                        alt=""
                      />
                    }
                    className={
                      " border-2 border-primary rounded-md text-primary  text-sm font-bold"
                    }
                  />
                </div>

                <span className=" text-base text-lightBlue">
                  Do you have a similar{" "}
                  <span className=" font-bold">Cheverolet Camaro </span> to
                  sell? <span className=" font-bold">Sell it yourself!</span>
                </span>
              </div>
              <div>
                <Button
                  Icons={<IoCall size={20} />}
                  label={"Show Number"}
                  className={
                    " py-1.5 text-sm mt-3  bg-secondary text-white  rounded-3xl"
                  }
                />
                <Button
                  Icons={
                    <img src={require("../../assets/images/chat.png")} alt="" />
                  }
                  label={"Chat"}
                  className={
                    " py-1.5 text-sm bg-primary font-bold w-40 mt-3 text-white  rounded-3xl"
                  }
                />
                <Button
                  label={"Whatsapp"}
                  Icons={<FaWhatsapp size={20} />}
                  className={
                    " py-1.5 text-sm bg-green w-40 mt-3 text-white  rounded-3xl"
                  }
                />
                <Button
                  label={"Compare"}
                  className={
                    " py-1 text-sm bg-white mt-5 w-40  text-lightBlue  border-2   border-lightBlue font-semibold  "
                  }
                />

                <div className=" pt-2 float-right">
                  <img
                    src={require("../../assets/images/brands.png")}
                    className=" text-right"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NewLists;
