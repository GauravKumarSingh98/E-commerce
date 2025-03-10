import React from "react";
import Story_icon from "../assets/about-shopping.png";
import { CiShop, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";
import { BiDollarCircle, BiSupport } from "react-icons/bi";
import { TiShoppingBag } from "react-icons/ti";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import Founder from "../assets/p1.png";
import MD from "../assets/p2.png";
import PD from "../assets/p3.png";

const About = () => {
  return (
    <div className="about px-4 md:px-16">
      {/* Our Story */}
      <div className="top flex flex-col md:flex-row items-center gap-8 mb-10">
        <div className="left md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="font-bold text-2xl md:text-3xl font-serif">Our Story</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis officia quis
            voluptatibus libero unde reprehenderit magni obcaecati quos. Architecto voluptatem ratione
            ullam exercitationem iusto illum quae fugit doloremque, suscipit ipsam.
          </p>
        </div>
        <div className="right md:w-1/2 flex justify-center">
          <img src={Story_icon} alt="Story" className="max-w-[300px] md:max-w-full" />
        </div>
      </div>

      {/* User Activity */}
      <div className="user-count grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
        {[{ icon: CiShop, title: "10.5k", desc: "Sellers active on our site" },
          { icon: BiDollarCircle, title: "33k", desc: "Monthly Product sales" },
          { icon: TiShoppingBag, title: "45.5k", desc: "Customer active on our site" },
          { icon: GiTakeMyMoney, title: "25k", desc: "Annual gross sale on our site" }]
          .map(({ icon: Icon, title, desc }, index) => (
            <div key={index} className="border rounded-lg p-6 hover:bg-red-500 hover:text-white cursor-pointer transition">
              <Icon className="text-3xl bg-black text-white p-2 rounded-full mx-auto" />
              <h1 className="font-bold text-lg mt-2">{title}</h1>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
      </div>

      {/* Founders */}
      <div className="Founders grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
        {[{ img: Founder, name: "Tom Cruise", role: "Founder & Chairman" },
          { img: MD, name: "Emma Watson", role: "Managing Director" },
          { img: PD, name: "Will Smith", role: "Product Designer" }]
          .map(({ img, name, role }, index) => (
            <div key={index} className="shadow-lg p-6 border rounded-lg">
              <img src={img} alt={name} className="w-32 h-32 mx-auto rounded-full" />
              <h1 className="font-bold text-lg mt-4">{name}</h1>
              <p className="text-sm text-gray-500">{role}</p>
              <div className="social_media flex justify-center gap-3 mt-2">
                <CiTwitter className="cursor-pointer hover:text-blue-500" />
                <CiInstagram className="cursor-pointer hover:text-pink-500" />
                <CiLinkedin className="cursor-pointer hover:text-blue-700" />
              </div>
            </div>
          ))}
      </div>

      {/* Support */}
      <div className="support grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[{ icon: MdOutlineLocalShipping, title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140" },
          { icon: BiSupport, title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support" },
          { icon: AiFillCheckCircle, title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days" }]
          .map(({ icon: Icon, title, desc }, index) => (
            <div key={index} className="border rounded-lg p-6 hover:bg-red-500 hover:text-white cursor-pointer transition">
              <Icon className="text-3xl bg-black text-white p-2 rounded-full mx-auto" />
              <h1 className="font-bold text-lg mt-2">{title}</h1>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default About;
