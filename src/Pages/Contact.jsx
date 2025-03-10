import React from "react";
import Call_icon from "../assets/call.png";
import Message_icon from "../assets/message.png";

const Contact = () => {
  return (
    <div className="Contact w-full flex flex-col md:flex-row gap-8 px-6 md:px-20 lg:px-40 mb-18">
      {/* Left Section */}
      <div className="left w-full md:w-1/3 border-0 shadow-2xl p-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
              <img src={Call_icon} alt="Call" className="w-6 h-6" />
            </div>
            <h1 className="font-semibold text-lg">Call To Us</h1>
          </div>
          <p className="text-sm">We are available 24/7, 7 days a week.</p>
          <p className="text-sm font-medium">Phone: +91 9372485539</p>
          <hr className="border-gray-300" />
          <div className="flex items-center space-x-4 mt-6">
            <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center">
              <img src={Message_icon} alt="Message" className="w-6 h-6" />
            </div>
            <h1 className="font-semibold text-lg">Write To Us</h1>
          </div>
          <p className="text-sm">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm font-medium">Emails: customer@gmail.com</p>
          <p className="text-sm font-medium">Emails: support@gmail.com</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right w-full md:w-2/3 border-0 shadow-xl p-6">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-gray-200 outline-none rounded-sm p-3 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-gray-200 outline-none rounded-sm p-3 w-full"
            />
            <input
              type="tel"
              name="number"
              placeholder="Your Phone"
              required
              className="bg-gray-200 outline-none rounded-sm p-3 w-full"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full outline-none h-32 p-3 mt-4 rounded-sm bg-gray-200"
            required
          ></textarea>
          <button className="bg-red-500 text-white px-6 py-2 mt-4 rounded-md w-full md:w-auto block mx-auto">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
