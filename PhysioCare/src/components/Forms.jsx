import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Forms = () => {
  const data = [
    {
      img: "https://abilityactionaustralia.com.au/wp-content/uploads/2023/01/Physiotherapy-functional-assessment-scaled.jpg",
      name: "MANDATORY FORM",
      route: "/mandatoryform",
    },
    {
      img: "https://wecare24.co/wp-content/uploads/2023/08/Physiotherapy.webp",
      name: "GERIATRIC ASSESSMENT",
      route: "/geriatricform",
    },
    {
      img: "https://www.physit.co.uk/wp-content/uploads/2020/01/physit-postsurgeryrehab-500x350.jpg",
      name: "DESBJCOP AND SEVA AROGYA CAMP",
      route: "/sevaform",
    },
    {
      img: "https://hawkesbury.greaterwesternhealth.com.au/wp-content/uploads/sites/2/2023/09/physiotherapists-in-Richmond.jpg",
      name: "PHYSIOTHERAPY OPD SUTARDARA",
      route: "/sutardaraform",
    },
    {
      img: "https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/09/08155406/World-physiotherapy-day-2023-Date-Theme-History-and-Significance-1-1568x1063.jpg",
      name: "COMBINED FORM",
      route: "/combinedform",
    },
    {
      img: "https://pxl-yorksjacuk.terminalfour.net/1600x1000/filters:quality(35)/prod01/yorksjacuk/media/content-assets/safe-images/header-images/Physiotherapy-2.jpg",
      name: "FORM",
      route: "/normalform",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16" style={{ backgroundImage: `url(https://www.solidbackgrounds.com/images/1080x1920/1080x1920-pale-blue-solid-color-background.jpg)` }}>
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center ">
            Forms
          </h1>
        
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <Link to={e.route} key={index}>
              <div
                className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer bg-white"
              >
                <div>
                  <img
                    src={e.img}
                    alt="img"
                    className="h-60 rounded-t-xl w-full"
                  />
                </div>

                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-semibold text-xl pt-6">{e.name}</h1>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Forms;
