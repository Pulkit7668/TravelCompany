import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PrevArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-3 rounded-full left-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronLeft className='text-white' size={20} />
  </div>
);

const NextArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-3 rounded-full right-[-25px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronRight className='text-white' size={20} />
  </div>
);

function SliderRajasthan2() {
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='w-5/6 h-[600px] m-auto'>
      <h1 className='text-4xl font-bold ml-2'>Trips by our users</h1>
      <div className='mt-8'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='bg-white h-full text-black rounded-xl overflow-hidden shadow-lg relative flex flex-col items-center p-4'>
              <div
                className='w-full h-52 bg-cover bg-center rounded-xl'
                style={{
                  backgroundImage: `url(${d.image})`
                }}
              />
              <div className="text-left mt-4 w-full">
                <h3 className="text-md font-bold mb-2">{d.name}</h3>
                <p className='text-gray-500 text-sm font-normal mb-2'>{d.location}</p>
                <p className="text-md text-black font-medium mb-10">{d.title}</p>
                {d.price && <p className="text-lg font-bold mt-1 text-black">{d.price}</p>}
              </div>
              <div>
                  <button className="bg-[#F7E700] text-black text-sm font-semibold mt-5 px-36 xs:px-28 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all">View Details</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderRajasthan2;


const data = [
    {
        name:`Shahbaz's Jaipur and Ajmer's Cultural Immersion`,
        location:`Jaipur • Pushkar • Ajmer`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3JhbWJhZ2gtcGFsYWNlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Shahbaz Ansari`,
        price:`₹31,005/- for 2 people`
    },
    {
        name:`Shivani's Jaipur and Ajmer's Cultural Immersion`,
        location:`Jaipur • Pushkar • Ajmer`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3JhbWJhZ2gtcGFsYWNlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Shivani kumari Agrawal`,
        price:`₹1,08,828/- for 3 people`
    },
    {
        name:`Keshav's Jaipur and Ajmer's Cultural Immersion`,
        location:`Jaipur • Pushkar • Ajmer`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3JhbWJhZ2gtcGFsYWNlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Keshav`,
        price:`₹31,005/- for 4 people`
    },
    {
        name:`Dibakar's Jaipur and Ajmer's Cultural Immersion`,
        location:`Jaipur • Pushkar • Ajmer`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3JhbWJhZ2gtcGFsYWNlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Dibakar Chanda`,
        price:`₹31,005/- for 4 people`
    },
    {
        name:`Keshav's Jaipur and Ajmer's Cultural Immersion`,
        location:`Jaipur • Pushkar • Ajmer`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3JhbWJhZ2gtcGFsYWNlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Keshav`,
        price:`₹31,005/- for 4 people`
    },
    {
        name:`Keshav's Jaipur and Ajmer's Cultural Immersion`,
        location:`Jaipur • Pushkar • Ajmer`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvaXRpbmVyYXJ5L3JhbWJhZ2gtcGFsYWNlLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Keshav`,
        price:`₹31,005/- for 4 people`
    },
]