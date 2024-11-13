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
        <h1 className='text-3xl text-center md:text-left md:text-4xl font-bold ml-2 xs:text-2xl'>Top countries to visit in Europe</h1>
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
                {/*content */}
                <div className="absolute flex flex-col p-4 mt-56 mr-10 xs:mr-0 xs:text-center">
                  <h3 className="text-md font-bold text-white xs:text-3xl">{d.name}</h3>
                  <p className="text-white text-sm mb-2 xs:text-xl">{d.price}</p>
                </div>
              </div>

             </div>
          ))}
        </Slider>
      </div>
        <div className='flex items-center justify-center'>
          <button className="mt-8 hover:bg-black text-black hover:text-white border border-black text-center transition-all font-semibold py-2 px-14 rounded-lg">
            Start your journey to Europe now!
          </button>
        </div>
    </div>
  );
}

export default SliderPage2;





const data = [
    {
        time:`Best time : Apr-Oct`,
        name:`Greece`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjI1NTU4ODA3Njk0OTExOTU2Nzg3MTA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹12,477/- per day`
    },
    {
        time:`Best time : Apr-Sep`,
        name:`France`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQyMjU2MTkwMzkwNDQ4NTcwMjUxNDY0ODQzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹15,859/- per day`
    },
    {
        time:`Best time : Apr-Sep`,
        name:`Italy`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk2MTA5MzI1NTAxOTE4NzkyNzI0NjA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹11,789/- per day`
    },
    {
        time:`Best time : May-Sep`,
        name:`Switzerland`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQ3NDYwNzI3OTQxOTg5ODk4NjgxNjQwNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹31,508/- per day`
    },
    {
        time:`Best time : May-Sep`,
        name:`Germany`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk3NjE4OTYyMDM3NTYzMzIzOTc0NjA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹10,298/- per day`
    },
    {
        time:`Best time : Apr-Oct`,
        name:`Spain`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODYyODU3ODMwMDA4OTA5NzAyMzAxMDI1MzkwNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹9,655/- per day`
    },
    {
        time:`Best time : Jun-Sep`,
        name:`Norway`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjE0OTkwNDAwNzE5NjQyNjM5MTYwMTU2Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹16,404/- per day`
    },
    {
        time:`Best time : May-Sep`,
        name:`United Kingdom`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk0NTk5ODEwODU1Mzg4NjQxMzU3NDIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹14,248/- per day`
    },
    {
        time:`Best time : Jun-Sep`,
        name:`Iceland`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjA1MTcxNDk4OTUxOTExOTI2MjY5NTMxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`Fire and Ice Land.`
    },
    {
        time:`Best time : May-Sep`,
        name:`croatia`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjIxMDI2ODkzODk0NjcyMzkzNzk4ODI4MS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹9,326/- per day`
    },
    {
        time:`Best time : May-Sep`,
        name:`Austria`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjIxNzgxNzA3NzMyNjc3NDU5NzE2Nzk2OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹13,702/- per day`
    },
    {
        time:`Best time : Jun-Sep`,
        name:`Sweden`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjE4NzY0OTEyNDU3NDY2MTI1NDg4MjgxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹10,504/- per day`
    },
    {
        time:`Best time : May-Sep`,
        name:`Estonia`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjIwMjcyOTQzNzMyNzM4NDk0ODczMDQ2OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹7,964/- per day`
    },
    {
        time:`Best time : Apr-Sep`,
        name:`North Macedonia`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjM0NjIxNDgyNjcyNjkxMzQ1MjE0ODQzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`Cultural Haven.`
    },
    {
        time:`Best time : Jun-Sep`,
        name:`Russia`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjA2NjgyNjcwNTQzMTkzODE3MTM4NjcxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹10,213/- per day`
    },
    {
        time:`Best time : Apr-Oct`,
        name:`Portugal`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTg0MDIwMTY0ODY2NDQ3NDQ4NzMwNDY4OC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹13,626/- per day`
    },
    {
        time:`Best time : May-Sep`,
        name:`Luxembourg`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTkzODQ1MjIzNjE1MTY5NTI1MTQ2NDg0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹21,817/- per day`
    },
    {
        time:`Best time : May-Sep`,
        name:`Romania`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQzNjg1MTU1NTkxOTY0NzIxNjc5Njg3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹6,714/- per day`
    },
    {
        time:`Best time : May-Sep`,
        name:`Latvia`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjA5NzAyMTcxNDc4MjcxNDg0Mzc1MDAwMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹7,253/- per day`
    },
    {
        time:`Best time : May-Sep`,
        name:`Slovenia`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjMyMzU0NzI2NzQ4NDY2NDkxNjk5MjE4OC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹10,042/- per day`
    },
    {
        time:`Best time : Apr-Oct`,
        name:`Cyprus`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjI0ODAzMDc4OTM1MTQ2MzMxNzg3MTA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹20,862/- per day`
    },
    {
        time:`Best time : May-Sep`,
        name:`Poland`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQwNjY1MTk0MTgwMDExNzQ5MjY3NTc4MS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹6,231/- per day`
    },
    {
        time:`Best time : Apr-Sep`,
        name:`Kosovo`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjA3NDM4MDg5MzEzNTA3MDgwMDc4MTI1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`Tranquil Balkan Gem.`
    },
    {
        time:`Best time: Apr-Sep`,
        name:`Serbia`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQ5NzI2OTE5NjM2NzI2Mzc5Mzk0NTMxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIifX19`,
        price:`From ₹6,432/- per day`
    },
]