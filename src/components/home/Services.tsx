import { faHotel, faRoute, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Services() {
  return (
    <div className="container mx-auto py-12">
    <div className="text-center mb-8">
      <h6
        className="text-primary uppercase"
        style={{ letterSpacing: "5px" }}
      >
        Services
      </h6>
      <h1 className="text-3xl">Tours & Travel Services</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      <div className="service-item bg-white text-center px-6 flex items-center justify-center flex-col">
        <FontAwesomeIcon icon={faRoute} className="text-3xl mx-auto mb-4" />
        <h5 className="mb-2 font-medium text-xl">Travel Guide</h5>
        <p className="m-0 text-gray-500">
        Explore new destinations with expert travel guides who provide insights, local knowledge, and seamless experiences.
        </p>
      </div>
     <div className="service-item bg-white text-center px-6 flex items-center justify-center flex-col">
        <FontAwesomeIcon
          icon={faTicketAlt}
          className="text-3xl mx-auto mb-4"
        />
       <h5 className="mb-2 font-medium text-xl">Ticket Booking</h5>
        <p className="m-0 text-gray-500">
        Book flights, trains, and buses effortlessly with our reliable service, ensuring the best prices and smooth travel.
        </p>
      </div>
     <div className="service-item bg-white text-center px-6 flex items-center justify-center flex-col">
        <FontAwesomeIcon icon={faHotel} className="text-3xl mx-auto mb-4" />
       <h5 className="mb-2 font-medium text-xl">Hotel Booking</h5>
        <p className="m-0 text-gray-500">
        Find and book top-rated hotels with great amenities, ensuring a comfortable and stress-free stay
        </p>
      </div>
    </div>
  </div>
  )
}
