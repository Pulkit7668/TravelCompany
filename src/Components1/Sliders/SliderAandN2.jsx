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

function SliderAandN2() {
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
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768, // For mobile devices
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

export default SliderAandN2;


const data = [
    {
        name:`Nizzar's Getaway with Friends to Andaman & Nicobar`,
        location:`Havelock • Port Blair`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMjA2NjQ5MjU3NTI2Mzk3NzA1MDc4MTI1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Nizzar`,
        price:`₹7,47,272/- for 30 people`
    },
    {
        name:`Ali's Family Excursion in Andaman Islands`,
        location:`Andaman Islands`,
        image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_C7oAWjYjTgy2XVjMlGzh0twquwuoUme_Pg&s`,
        title:`Handcraft by Ali Sajid`,
    },
    {
        name:`Badrinath's Getaway to Andaman & Nichobar`,
        location:`Neil Island • Havelock • Port Blair`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMjA2NjUyNTcxOTc2MTg0ODQ0OTcwNzAzMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Badrinath S`,
        price:`₹29,319/- for 2 people`
    },
    {
        name:`Nishit's Family Excursion in Andaman & Nichobar`,
        location:`Neil Island • Port Blair`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMjA2NjUxMTgzNzYyNTUwMzU0MDAzOTA2Mi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Nishit`,
        price:`₹36,623/- for 3 people`
    },
    {
        name:`Nishit's Family Excursion in Andaman & Nichobar`,
        location:`Neil Island • Port Blair`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMjA2NjQ5MjU3NTI2Mzk3NzA1MDc4MTI1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Nishit`,
        price:`₹41,096/- for 3 people`
    },
    {
        name:`Shrikant's Family Excursion in Andaman & Nichobar`,
        location:`Neil Island • Port Blair`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMjA2NjUzNDA5MDQ5NTEwOTU1ODEwNTQ2OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6NTAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
        title:`Curated by Shrikant Tiwari`,
        price:`₹25,616/- for 2 people`
    },
]