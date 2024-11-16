import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PrevArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-3 rounded-full left-[-30px] top-[35%] transform -translate-y-1/2 z-10 cursor-pointer ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronLeft className='text-white' size={20} />
  </div>
);

const NextArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-3 rounded-full right-[-30px] top-[35%] transform -translate-y-1/2 z-10 cursor-pointer ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronRight className='text-white' size={20} />
  </div>
);

function SliderAandN1() {
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
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
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-5/6 h-[500px] m-auto'>
      <h1 className='text-2xl text-center xs:text-lg md:text-left md:text-4xl font-bold ml-2'>Top locations across Jammu & Kashmir</h1>
      <div className='mt-20 xs:mt-5'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='h-full text-black rounded-xl overflow-hidden relative'>
              <div
                className='w-full h-52 aspect-square bg-cover bg-center rounded-xl'
                style={{
                  backgroundImage: `url(${d.image})`
                }}
              />
              <div className="text-left mt-4 w-full">
                <h3 className="text-lg font-bold">{d.name}</h3>
                <p className="text-sm text-black font-medium truncate">{d.title}</p>
                {d.price && <p className="text-md font-normal mt-1 text-black">{d.price}</p>}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderAandN1;


const data = [
    {
      name:`Neil Island`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTY2NzQzNDAxNzQ0MjYzMTcyMTQ5NjU4MjAzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      title:`Beaches, Scuba Diving`
    },
    {
      name:`Port Blair`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMjA2NjQ5MjU3NTI2Mzk3NzA1MDc4MTI1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      title:`Beaches, Islands, Marine Life`
    },
    {
      name:`Havelock`,
      image:`https://lh5.googleusercontent.com/p/AF1QipPqIyFDF2QBv1jFgiQnJUvfm8CQ5b4ESGtiWOtv=w675-h390-n-k-no`,
      title:`Beaches, Scuba Diving`
    },
    {
      name:`Mayabunder`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjU0NzI0MDg1Nzg0MDk5MTAyMDIwMjYzNjcxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      title:`Beaches, Pristine, Remote`
    },
    {
      name:`Andaman Islands`,
      image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe3MGkTiEbfqoAY6hlYA6B3uQbanZLEsMJbbtQ4YPS_4tWUiJhVQ5VSFs&s`,
      title:`Beaches, Marine Life, Diving`,
    },
    {
      name:`Greate Nichobar`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcyNzM3NDE0MzM3Nzg1MjQzOTg4MDM3MTA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      title:`Beaches, Pristine, Nature`
    },
    {
      name:`Diglipur`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE0NjM0NTAwMjc5NDI2NTc0NzA3MDMxMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=`,
      title:`Beaches, Nature, Trekking`
    },
    {
      name:`Rangat`,
      image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1ODY1MzA5NTM0NTQ1ODIyMTQzNTU0Njg3NTAwMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
      title:`Beaches, Islands, Nature`
    }
]