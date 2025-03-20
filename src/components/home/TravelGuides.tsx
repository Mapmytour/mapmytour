import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function TravelGuides() {
  return (
    <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Guides
          </h6>
          <h1 className="text-3xl">Our Travel Guides</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((guide, index) => (
            <div key={index} className="team-item bg-white mb-4 group">
              <div className="relative overflow-hidden">
                <img
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                  src={`/img/team-${guide}.jpg`}
                  alt="Guide"
                />
                <div className="team-social absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 hover:bg-[rgba(0,0,0,0.5)] transition duration-500">
                  <a
                    className="mx-1 bg-white p-2  hover:bg-primary hover:text-white"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    className="mx-1 bg-white p-2  hover:bg-primary hover:text-white"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    className="mx-1 bg-white p-2  hover:bg-primary hover:text-white"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    className="mx-1 bg-white p-2  hover:bg-primary hover:text-white"
                    href="#"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
              <div className="text-center py-4">
                <h5 className="truncate font-semibold">Mukesh Buwade</h5>
                <p className="m-0 text-gray-500">Guide</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
