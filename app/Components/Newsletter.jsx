"use client";
import React, { useState } from "react";
import Logo from "../../public/1.svg";
import Image from "next/image";
import supabase from "./supabase";
const Newsletter = () => {
  const [Email, setEmail] = useState("");
  const HandleChange = async (e) => {
    const { data, error } = await supabase
      .from("NewsLetter")
      .insert([{ email: Email }])
      .select();
    console.log(data, error);
  };
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-[100vh]">
      <div className="flex justify-center items-center">
        <Image
          src={Logo}
          width={550}
        />
      </div>
      <div>
        <div className="text-5xl font-bold">
          Fuel Your Day with Our Motivational Newsletter
        </div>
        <br />
        <div className="flex flex-col gap-5 justify-center items-center ">
          <div className="flex flex-col gap-2 ">
            <span>Subsribe to our Newsletter </span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              // onKey={HandleChange}
              className="border w-96 h-10 border-gray-600 rounded-lg animate-pulse p-2 focus:outline-none focus:bg-yellow-500 focus:animate-none text-black placeholder:text-black"
              placeholder="Enter your Email Address"
            />
          </div>
          <button
            className="bg-yellow-500 text-black font-bold w-32 h-10 rounded-lg"
            onClick={HandleChange}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
