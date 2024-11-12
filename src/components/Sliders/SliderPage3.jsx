import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PrevArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-4 rounded-full left-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-600 ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronLeft className='text-white' size={24} />
  </div>
);

const NextArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-4 rounded-full right-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-600 ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronRight className='text-white' size={24} />
  </div>
);

function SliderPage2() {
  const [hidePrev, setHidePrev] = useState(true); 
  const [hideNext, setHideNext] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    beforeChange: (current, next) => {
      setHidePrev(next === 0);
      setHideNext(next >= data.length - settings.slidesToShow);
    },
    prevArrow: <PrevArrow hidden={hidePrev} />,
    nextArrow: <NextArrow hidden={hideNext} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-5/6 h-[550px] m-auto'>
        <h1 className='text-center md:text-left text-4xl font-bold ml-2'>Top countries to visit in Asia</h1>
      <div className='mt-10'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='bg-white h-full text-black rounded-xl overflow-hidden relative'>
              <div
                className='h-80 rounded-xl flex items-center justify-center bg-cover bg-center'
                style={{
                  backgroundImage: `url(${d.image})`
                }}
              >

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-100"></div>
                <p className='bg-[#01202B] text-white text-md font-montserrat rounded-xl px-3 absolute top-5 md:left-3'>{d.time}</p>
                {/* content */}
                <div className="absolute flex flex-col p-4 mt-56 mr-10">
                  <h3 className="text-md font-bold text-white">{d.name}</h3>
                  <p className="text-white text-sm mb-2">{d.price}</p>
                </div>
              </div>

             </div>
          ))}
        </Slider>
      </div>
        <div className='flex items-center justify-center'>
          <button className="mt-8 hover:bg-black text-black hover:text-white border border-black text-center transition-all font-semibold py-2 px-10 rounded-lg">
            Start your journey to Asia now!
          </button>
        </div>
    </div>
  );
}

export default SliderPage2;





const data = [
    {
        time:`Best time : Nov-Apr`,
        name:`United Arab Emirates`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjMzMTEwNjI1NDMxNTM3NjI4MTczODI4MS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹16,537/- per day`
    },
    {
        time:`Best time : Oct-Dec`,
        name:`Hong Kong`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTkyMzMzNDg5OTk1MDAyNzQ2NTgyMDMxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`Vibrant Cultural Hub`
    },
    {
        time:`Best time : Nov-Apr`,
        name:`Maldives`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE3MDM1OTk2NTc3MDc0NzgwNDY0MTcyMzYzMjgxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`Tropical Paradise`
    },
    {
        time:`Best time : Dec-Apr`,
        name:`Sri Lanka`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjAyOTAzMTkwNTEyNjU3MTY1NTI3MzQzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹7,709/- per day`
    },
    {
        time:`Best time : Oct-Mar`,
        name:`India`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODYyODQ1MjI4MzI3MDIzOTgzMDAxNzA4OTg0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹5,066/- per day`
    },
    {
        time:`Best time : Nov-Apr`,
        name:`Thailand`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjE4MDA5NTQwMDAyMzQ2MDM4ODE4MzU5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹13,155/- per day`
    },
    {
        time:`Best time : Aug-Nov`,
        name:`Malasia`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjA4OTQ3MTMwODg5ODkyNTc4MTI1MDAwMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹8,434/- per day`
    },
    {
        time:`Best time : Apr-Sep`,
        name:`Indonesia`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjIyNTM2ODMzNTMxODU2NTM2ODY1MjM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹9,169/- per day`
    },
    {
        time:`Best time : Oct-Apr`,
        name:`Vietnam`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQ1OTUwNDA0NDc3MTE5NDQ1ODAwNzgxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹7,128/- per day`
    },
    {
        time:`Best time : Aug-Nov`,
        name:`Singapore`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE3MDM1OTcwMjQ5Mjc2Mzk0ODQ0MDU1MTc1NzgxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`Melting Pot of Modern Asia`
    },
    {
        time:`Best time : Sep-Nov`,
        name:`Bhutan`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODc3ODY0NDI1NDgzMzU3OTA2MzQxNTUyNzM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹31,468/- per day`
    },
    {
        time:`Best time : Mar-May`,
        name:`Taiwan`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjMzODY1ODg5MTIwMTAxOTI4NzEwOTM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹12,308/- per day`
    },
    {
        time:`Best time : Oct-Dec`,
        name:`Oman`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjM2MTMyMzE2MTk1OTY0ODEzMjMyNDIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹11,019/- per day`
    },
    {
        time:`Best time : Sep-Nov`,
        name:`Jorden`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTg0Nzc2ODI5NjcxODU5NzQxMjEwOTM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹10,961/- per day`
    },
    {
        time:`Best time : Oct-Nov`,
        name:`Iraq`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjE2NDk5NTA5MjI5NjYwMDM0MTc5Njg3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹18,172/- per day`
    },
    {
        time:`Best time : Sep-Oct`,
        name:`South Korea`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjI0MDQ3NDkyNTY4NDkyODg5NDA0Mjk2OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹11,819/- per day`
    },
    {
        time:`Best time : Apr-Oct`,
        name:`Georgia`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQyMTc1MTQ3MzY2NTIzNzQyNjc1NzgxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹8,759/- per day`
    },
    {
        time:`Best time : Sep-Nov`,
        name:`Nepal`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQ2NzA2MDgwNTkxNjc4NjE5Mzg0NzY1Ni5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`Resilient Himalayan Gem.`
    },
    {
        time:`Best time : OCt-Mar`,
        name:`Israel`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjM5MTU1NzIzNjkzMzcwODE5MDkxNzk2OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹29,313/- per day`
    },
    {
        time:`Best time : Nov-Apr`,
        name:`Mayanmar`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTkxNTc5NzE3MTU5MjcxMjQwMjM0Mzc1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹6,941/- per day`
    },
    {
        time:`Best time : Nov-Apr`,
        name:`Saudi Arabia`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQ4OTcxNjc2MjA4OTcyOTMwOTA4MjAzMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹10,790/- per day`
    },
    {
        time:`Best time : Oct-Apr`,
        name:`Bangladesh`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjI3MDY4NTg4MjYxNjA0MzA5MDgyMDMxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹9,653/- per day`
    },
    {
        time:`Best time : Sep-Nov`,
        name:`Japan`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjAxMzkzODgyOTA2NDM2OTIwMTY2MDE1Ni5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹15,947/- per day`
    },
    {
        time:`Best time: Sep-Oct`,
        name:`China`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk5ODgzODczMzcyMDc3OTQxODk0NTMxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹8,072/- per day`
    },
]