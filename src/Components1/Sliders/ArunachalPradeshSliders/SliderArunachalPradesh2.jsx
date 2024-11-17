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

function SliderArunachalPradesh2() {
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

export default SliderArunachalPradesh2;


const data = [
    {
        name:`Sumit's Romantic Getaway to Arunachal Pradesh`,
        location:`Itanagar • Tawang`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE2MjU1Nzk5MTA5OTM1NzYwNDk4MDQ2OS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19`,
        title:`Curated by Sumit hari`,
        price:`₹24,361/- for 2 people`
    },
    {
        name:`Rohan's Solo Backpacking in Arunachal Pradesh`,
        location:`Itanagar • Ziro • Tawang`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE2MjU2NzMyMDk2NjcyMDU4MTA1NDY4OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19`,
        title:`Handcraft by Rohan Pandit`,
        price:`₹30,200/- per person`
    },
    {
        name:`Rajesh's Family Excursion in Northeast India`,
        location:`Guwahati • Gangtok • Jaintia Hills • Itanagar`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1OTM2MjA2MDQwMTg1NDY1ODEyNjgzMTA1NDY4OC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Rajesh`,
        price:`₹53,144/- for 3 people`
    },
    {
        name:`G's Family Excursion in Anini`,
        location:`Anini`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjAwOTYxNjY4Mjg4NzA3NzMzMTU0Mjk2OS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19`,
        title:`Curated by G Manju`,
        price:`₹19,632/- for 4 people`
    },
    {
        name:`Kouyalee's Getaway with Friends to Arunachal Pradesh`,
        location:`Itanagar • Tawang`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE2MjU1Nzk5MTA5OTM1NzYwNDk4MDQ2OS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19`,
        title:`Curated by Kouyalee's Debbarma`,
        price:`₹2,21,909/- for 4 people`
    },
    {
        name:`Isha's Getaway with Friends to Arunachal Pradesh`,
        location:`Itanagar • Ziro • Tawang`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU2OTA2NjY5ODAyNjY1NzEwNDQ5MjE4OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19`,
        title:`Curated by Isha`,
        price:`₹55,412/- for 5 people`
    },
]