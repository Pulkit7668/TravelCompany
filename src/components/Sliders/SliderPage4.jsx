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
    <FaChevronLeft className='text-white' size={20} />
  </div>
);

const NextArrow = ({ onClick, hidden }) => (
  <div
    className={`absolute bg-[#01202B] p-4 rounded-full right-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-600 ${hidden ? 'hidden' : ''}`}
    onClick={onClick}
  >
    <FaChevronRight className='text-white' size={20} />
  </div>
);

function SliderPage2() {
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setHidePrev(next === 0);
      setHideNext(next >= data.length - settings.slidesToShow);
    },
    prevArrow: <PrevArrow hidden={hidePrev} />,
    nextArrow: <NextArrow hidden={hideNext} />
  };

  return (
    <div className='w-5/6 h-[700px] xs:h-[500px] m-auto'>
        <h1 className='text-4xl font-bold ml-2 xs:text-xl xs:text-center'>Plan your trip anywhere in the world</h1>
      <div className='mt-10'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='bg-white h-full text-black rounded-3xl overflow-hidden relative'>
              <div
                className='h-[550px] xs:h-[400px] rounded-xl flex items-center justify-center bg-cover bg-center transition-transform duration-300 transform hover:scale-110'
                style={{
                  backgroundImage: `url(${d.image})`
                }}
              >

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-100"></div>
                {/* content */}
                <div className="absolute flex flex-col text-center">
                  <h3 className="text-8xl font-bold text-white mb-5 xs:text-4xl">{d.name}</h3>
                  <p className="text-white text-4xl font-light">{d.title}</p>
                </div>
              </div>

             </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderPage2;





const data = [
    {
        name:`Europe`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDEwMjAzNjUxNTkzNDQ2NzMxNTY3MzgyODEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19`,
        title:`Diverse Europe`
    },
    {
        name:`Asia`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDA2MDgzODY1NzY3NDc4OTQyODcxMDkzNzUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19`,
        title:`Diverse Asia`
    },
    {
        name:`Oceania`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg0NzQ0NjgwODc0NTA2MjM1MTIyNjgwNjY0MDYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19`,
        title:`Diverse Pacific`
    },
    {
        name:`North America`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDA5MDc5NjkyMDExNTk0NzcyMzM4ODY3MTkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19`,
        title:`Adventurer's Paradise`
    },
    {
        name:`Caribbean`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDExOTcyNjU1NzAwOTIyMDEyMzI5MTAxNTYuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19`,
        title:`Tropical Paradise`
    },
    {
        name:`Africa`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDA1MjQ0NTIzODQxODU3OTEwMTU2MjUwMDAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19`,
        title:`Cradle of Diverse Wonders`
    },
    {
        name:`South America`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDA4MjgxMzcwMTgyMDM3MzUzNTE1NjI1MDAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19`,
        title:`Diverse Continent`
    }
]