import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PageWrapper from "@/components/PageWrapper";
import { whatWeOffer, whyChooseUs } from "@/constant";

const AboutUs = () => {
  return (
    <PageWrapper>
      {/* Navbar & Hero */}
      <div className="relative">
        {/* Hero Header */}
        <div className="bg-primary py-20 about-container">
          <div className="container  mx-auto text-center">
            <h1 className="text-5xl font-bold text-white animate-slideInDown">
              About Us
            </h1>
            <nav className="mt-4">
              <ol className="flex justify-center space-x-2">
                <li>
                  <a href="#" className="text-white hover:text-primary-dark">
                    Home
                  </a>
                </li>
                <li>
                  <span className="text-white"> / </span>
                </li>
                <li className="text-primary-dark">About</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-20">
        <div className="">
          {/* <h6 className="text-primary text-lg font-semibold">About Us</h6> */}
          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome to <span className="text-primary">Map My Tour</span>
          </h1>
          <p className="text-gray-600">
            Welcome to Map My Tour, your ultimate travel companion in
            discovering the world! We are a passionate and dedicated travel
            company that believes in creating unforgettable travel experiences
            for every wanderlust-driven individual. Whether you're exploring
            hidden gems, booking your dream vacation, or planning the adventure
            of a lifetime, we’re here to make it happen.
          </p>
          <h2 className="text-2xl font-bold text-primary mt-10 text-center">
            Our Mission
          </h2>
          <p className="text-gray-600">
            At Map My Tour, our mission is simple: to help you explore the world
            in the most exciting, stress-free, and personalized way possible. We
            curate unique travel experiences that cater to your specific
            interests, preferences, and needs, making each journey a memorable
            one. Whether you’re looking for relaxing beach escapes, thrilling
            adventures, cultural explorations, or luxury retreats, we’ve got you
            covered.
          </p>
          <h2 className="text-2xl font-bold text-primary mt-10 mb-4 text-center">
            What We Offer
          </h2>
          <div className="container mx-auto pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whatWeOffer.map((e, idx) => (
                <div className="flex mb-4" key={`${e.id}_${idx}`}>
                  <div className="flex-shrink-0 flex items-center justify-center bg-primary mr-3 h-[100px] w-[100px]">
                    <FontAwesomeIcon
                      icon={e.icon}
                      className="text-2xl text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-semibold">{e.heading}</h5>
                    <p className="m-0 text-gray-500">{e.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary my-4 text-center">
            Why Choose Map My Tour?
          </h2>
          <div className="container mx-auto pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((e, idx) => (
                <div className="flex mb-4" key={`${e.id}_${idx}`}>
                  <div className="flex-shrink-0 flex items-center justify-center bg-primary mr-3 h-[100px] w-[100px]">
                    <FontAwesomeIcon
                      icon={e.icon}
                      className="text-2xl text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="font-semibold">{e.heading}</h5>
                    <p className="m-0 text-gray-500">{e.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600 mt-8 ">
            <i>
              "Join the Map My Tour family today and let us help you create the
              trip of a lifetime. Start your journey with us, and let’s map out
              the adventure you’ve been dreaming of!"
            </i>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutUs;
