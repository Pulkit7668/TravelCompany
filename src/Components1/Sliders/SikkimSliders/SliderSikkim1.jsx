import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderSikkim1() {
  const [hidePrev, setHidePrev] = useState(true);
  const [hideNext, setHideNext] = useState(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    beforeChange: (current, next) => {
      setHidePrev(next === 0);
      setHideNext(next >= data.length - settings.slidesToShow);
    },
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
      <h1 className='text-2xl text-center xs:text-lg md:text-left md:text-4xl font-bold ml-2'>Top locations across Sikkim</h1>
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

export default SliderSikkim1;


const data = [
    {
        name:`Gangtok`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjQ3MTUwMjc5NzczMDA4ODIzMzk0Nzc1MzkwNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Mountains, Adventure, Treks`,
        price:`From ₹5,093/- per day`
    },
    {
        name:`Lachung`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MDk3NDYwMjY5MTY2MzY5NDM4MTcxMzg2NzE4OC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Mountains, Trekking, Nature`,
        price:`From ₹5,463/- per day`
    },
    {
        name:`Lachen`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MDk3NDYyNDAxMDI2MjIwMzIxNjU1MjczNDM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Mountains, Treks, Nature`,
        price:`From ₹5,341/- per day`
    },
    {
        name:`Pelling`,
        image:`https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSzgAt7RDJtrANmzpnGg2H8iOxw8XYmlCUAoW-MFaqr5sGiJVY2xJnHtltPcGD7LAmXk_WnB81klIHUoRNx31xNkJoUrKRjJYfaWJ-O1A`,
        title:`Treks, Mountains, Monasteries`,
        price:`From ₹4,909/- per day`
    },
    {
        name:`Namchi`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzE0NDYyNzUxMTA5MDg5ODUxMzc5Mzk0NTMxMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Mountains, Monasteries, Views`,
    },
    {
        name:`Yuksom`,
        image:`https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzE0NDc3MDExNDI5MzA3NDYwNzg0OTEyMTA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==`,
        title:`Treks, Himalayas`
    }
]