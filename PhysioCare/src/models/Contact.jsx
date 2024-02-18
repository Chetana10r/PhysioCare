import React from "react";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Log In
          </h1>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="Name"
              id="Name"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="Email"
              id="Email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="Password"
              id="Password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-center">
            <Button title="Submit" onClick={closeForm}></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
