import React from 'react'
import TestimonialCarousel from '../TestimonialCarousel'

export default function Testimonial() {
  return (
 <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Testimonial
          </h6>
          <h1 className="text-3xl">What Say Our Clients</h1>
        </div>
        <TestimonialCarousel />
      </div>
  )
}
