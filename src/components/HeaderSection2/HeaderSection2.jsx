import React from 'react';

const HeaderSection2 = () => {
  return (
    <div className="bg-white ml-10 mr-10 py-16">
      <h2 className="text-4xl font-bold mb-8 ml-16">How it works?</h2>
      <div className="flex flex-wrap justify-center gap-10 md:gap-24">
        <div className="max-w-sm text-center mb-10">
          <div className="my-4">
            <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS93aHl1cy0xLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==" alt="Handpick Selection" className="mx-auto h-60 w-60" />
          </div>
          <h3 className="font-semibold text-xl">Handpick Your Selection</h3>
          <p className="text-md font-normal mt-2">
            From solo travel to workcation, <br /> honeymoon to family travel, tell us <br /> about your mood, budget & timeline.
          </p>
        </div>
        <div className="max-w-sm text-center mb-10">
          <div className=" my-4">
            <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS93aHl1cy0yLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==" alt="AI Itinerary Wizardry" className="mx-auto h-60 w-60" />
          </div>
          <h3 className="font-semibold text-xl">Unleash AI’s Itinerary <br /> Wizardry!</h3>
          <p className="text-md font-normal mt-2">
            Get a unique itinerary completely <br /> personalized for you, with all bookings <br /> in one place.
          </p>
        </div>
        <div className="max-w-sm text-center mb-10">
          <div className="my-4">
            <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS93aHl1cy0zLndlYnAiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDAsImZpdCI6ImNvdmVyIn19fQ==" alt="Easy Bookings" className="mx-auto h-60 w-60" />
          </div>
          <h3 className="font-semibold text-xl">Easy Bookings with 24x7 <br /> Concierge</h3>
          <p className="text-md font-normal mt-2">
            From your stays to activities, book-it- <br /> all in one click, and enjoy 24x7 <br /> assistance while you explore.
          </p>
        </div>
        <div className="max-w-xl text-center mb-10">
          <div className="my-4">
            <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9ob3c0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTAwLCJoZWlnaHQiOjUwMCwiZml0IjoiY292ZXIifX19" alt="No Commissions" className="mx-auto h-60 w-60" />
          </div>
          <h3 className="font-semibold text-xl">No Commissions - Pay for <br /> what you get</h3>
          <p className="text-md font-normal mt-2">
            No hidden charges during & after <br /> bookings. Pay For What You Get.
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center'> 
        <button className="mt-8 bg-yellow-300 hover:bg-black text-black hover:text-white border border-black text-center transition-all font-bold py-2 px-24 rounded-lg">
          Plan Itinerary For Free
        </button>
      </div>
    </div>
  );
};

export default HeaderSection2;
