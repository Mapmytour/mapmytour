import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleUp,
  faMoneyBillWave,
  faTrophy,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/globals.css";
import HeaderCarousel from "../components/HeaderCarousel";
import BookingForm from "../components/BookingForm";
import BookNowDialog from "../components/BookNowDialog";
import { useBookNowDialog } from "../hooks/useBookNowDialog";
import TopDestination from "@/components/home/TopDestination";
import Services from "@/components/home/Services";
import Packages from "@/components/home/Packages";
import Footer from "@/components/home/Footer";
import OfferSection from "@/components/home/OfferSection";
import About from "@/components/home/About";
import PageWrapper from "@/components/PageWrapper";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, openDialog, closeDialog } = useBookNowDialog();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBookNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openDialog();
  };

  return (
    <PageWrapper isHome={true}>
      
      {/* Book Now Dialog */}
      <BookNowDialog isOpen={isOpen} onClose={closeDialog} />

     

      {/* Carousel Start */}
      <HeaderCarousel bookNowClick={handleBookNowClick} />
      {/* Carousel End */}

      {/* Booking Start */}
      <BookingForm />
      {/* Booking End */}

      {/* About Start */}
      <section id="about">
        <About handleBookNowClick={handleBookNowClick} />
      </section>
      {/* About End */}

      {/* Feature Start */}
      <div className="container mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex mb-4">
            <div className="flex-shrink-0 flex items-center justify-center bg-primary mr-3 h-[100px] w-[100px]">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="text-2xl text-white"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="font-semibold">Competitive Pricing</h5>
              <p className="m-0 text-gray-500">
                Get the best travel deals at unbeatable prices without
                compromising on quality.
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-shrink-0 flex items-center justify-center bg-primary mr-3 h-[100px] w-[100px]">
              <FontAwesomeIcon
                icon={faTrophy}
                className="text-2xl text-white"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="font-semibold">Best Services</h5>
              <p className="m-0 text-gray-500">
                Enjoy hassle-free travel with our expert support, premium
                packages, and customer-first approach
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-shrink-0 flex items-center justify-center bg-primary mr-3 h-[100px] w-[100px]">
              <FontAwesomeIcon
                icon={faGlobeAmericas}
                className="text-2xl text-white"
              />
            </div>
            <div className="flex flex-col">
              <h5 className="font-semibold">Worldwide Coverage</h5>
              <p className="m-0 text-gray-500">
                Explore destinations across the globe with our extensive travel
                network and services
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Destination Start */}
      <section id="destination">
        <TopDestination />
      </section>
      {/* Destination End */}

      {/* Service Start */}
      <section id="service">
        <Services />
      </section>
      {/* Service End */}

      {/* Packages Start */}
      <section id="package">
        <Packages handleBookNowClick={handleBookNowClick} />
      </section>
      {/* Packages End */}

      {/* Registration Start */}
      <OfferSection handleBookNowClick={handleBookNowClick} />
      {/* Registration End */}

      {/* Team Start */}
      {/* <TravelGuides /> */}
      {/* Team End */}

      {/* Testimonial Start */}
      {/* <Testimonial/> */}
      {/* Testimonial End */}

      {/* Blog Start */}
      {/* <BlogSection/> */}
      {/* Blog End */}

      {/* Footer Start */}
      <Footer />
      
      {/* Footer End */}

      {/* Back to Top */}
      {showBackToTop && (
        <a
          onClick={scrollToTop}
          className="btn btn-lg btn-primary btn-lg-square back-to-top cursor-pointer pt-2"
        >
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </a>
      )}
    </PageWrapper>
  );
};

export default Index;
