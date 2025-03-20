import React from 'react'

export default function BlogSection() {
  return (
 <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Blog
          </h6>
          <h1 className="text-3xl">Latest From Our Blog</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((blog, index) => (
            <div key={index} className="blog-item">
              <div className="relative">
                <img
                  className="w-full h-60 object-cover"
                  src={`/img/blog-${blog}.jpg`}
                  alt="Blog"
                />
                <div className="blog-date absolute top-4 right-4 bg-primary text-white w-16 h-16 flex flex-col items-center justify-center">
                  <h6 className="font-bold mb-0">01</h6>
                  <small className="uppercase">Jan</small>
                </div>
              </div>
              <div className="bg-white p-4">
                <div className="flex mb-2">
                  <a className="text-primary uppercase no-underline" href="#">
                    Admin
                  </a>
                  <span className="text-primary px-2">|</span>
                  <a className="text-primary uppercase no-underline" href="#">
                    Tours & Travel
                  </a>
                </div>
                <a
                  className="text-xl font-medium no-underline hover:text-primary"
                  href="#"
                >
                  Dolor justo sea kasd lorem clita justo diam amet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div> 
  )
}
