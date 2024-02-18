import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5" style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/03/57/76/24/360_F_357762401_Q6IYG6rSR6yoy2mnBsOF3ZtuYVzBNARe.jpg)` }}>
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <br>
        </br>
        <p className=" text-justify lg:text-start">
        Welcome to PhysioCare, where we are dedicated to revolutionizing physiotherapy 
        and patient care. Our mission is to bridge the gap between healthcare professionals
        and individuals seeking specialized physiotherapeutic interventions. 
         
        </p>
        <p className="text-justify lg:text-start">
        At the heart of our initiative is a commitment to providing a seamless and personalized 
         experience for patients, ensuring their journey to recovery is both efficient and empowering.
        </p>
        <p className="text-justify lg:text-start">
        We envision a healthcare landscape where physiotherapy is not only a routine aspect of
         rehabilitation but a transformative and personalized experience for every individual.
          By leveraging technology and a patient-centric approach, we aim to redefine the way 
          physiotherapy is administered and received.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
