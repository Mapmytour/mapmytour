import React from 'react'

export default function About({handleBookNowClick}) {
  return (
    <div className="container mx-auto py-12 mt-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
      <div className="h-[700px] relative z-0">
        <img
          className="absolute w-full h-full object-cover"
          src="/img/about.jpg"
          alt="About"
        />
      </div>
      <div className="lg:-ml-10 z-10 flex items-center justify-center">
        <div className="bg-white p-8 shadow-lg my-auto">
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            About Us
          </h6>
          <h1 className="text-4xl mb-3 font-semibold">
            We Provide Best Tour Packages In Your Budget
          </h1>
          <p className="font-light text-gray-500">
          “Map My Tour” is a travel company that specializes in creating personalized travel experiences for individuals and groups. Offering a variety of services, from guided tours to self-planned itineraries, the company aims to make travel more convenient and enjoyable. Whether you’re seeking adventure, relaxation, or cultural exploration, Map My Tour provides tailored travel plans to suit every type of traveler.
          </p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div>
              <img className="w-full" src="/img/about-1.jpg" alt="" />
            </div>
            <div>
              <img className="w-full" src="/img/about-2.jpg" alt="" />
            </div>
          </div>
          <a
            href="#"
            className="bg-primary text-white px-4 py-2 inline-block mt-1"
            onClick={handleBookNowClick}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
