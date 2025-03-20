
import React from 'react';
import OwlCarousel from './OwlCarousel';

const TestimonialCarousel: React.FC = () => {
  const carouselOptions = {
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  };

  return (
    <OwlCarousel options={carouselOptions} className="testimonial-carousel">
      {[1, 2, 3, 4].map((testimonial, index) => (
        <div key={index} className="testimonial-item" style={{
          padding:"0 10px 0 10px",
          maxWidth:"400px"
        }}>
          <div className="text-center ">
            
            <img className="mx-auto   z-10" src={`/img/testimonial-${testimonial}.jpg`} alt="Client" style={{
              height:"100px",
              width:"100px",
              position:"relative"
            }} />
            <div className="bg-white p-4 pt-[50px] mt-[-50px] relative shadow-md z-0">
              <p className="mt-5 text-gray-500 text-base">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <h5 className="truncate text-lg mt-3">Client Name</h5>
              <span className='text-gray-500'>Profession</span>
            </div>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default TestimonialCarousel;
