import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "../ui/use-toast";
import GetCallBack from "../common/GetCallBack";

export default function OfferSection({ handleBookNowClick }) {

   

  return (
    <div className="py-12 my-12 bg-registration">
      <div className="container mx-auto py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="mb-5 lg:mb-0">
            <div className="mb-4 ">
              <h6
                className="text-primary uppercase bg-[rgba(255,255,255,0.7)] inline px-2"
                style={{ letterSpacing: "5px" }}
              >
                Mega Offer
              </h6>
              <h1 className="text-white text-4xl mt-2 font-semibold">
                Get up to{" "}
                <span
                  style={{
                    color: "rgba(245, 49, 49)",
                  }}
                >
                  50%{" "}
                </span>
                Discount
              </h1>
            </div>
            <p className="text-white">
              Save big on your next trip with our exclusive discounts! Enjoy up
              to 50% off on tour packages, tickets, and hotels. Book now and
              make your dream vacation affordable!
            </p>
            <ul className="list-none text-white m-0 mt-3">
              <li className="py-1">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-3" />
                Exclusive tour package discounts
              </li>
              <li className="py-1">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-3" />
                Lowest prices on flight, train, and bus tickets
              </li>
              <li className="py-1">
                <FontAwesomeIcon icon={faCheck} className="text-primary mr-3" />
                Great deals on premium hotel stays
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="#"
                onClick={handleBookNowClick}
                className="bg-primary text-white py-3 px-6 inline-block"
              >
                Book Now
              </a>
            </div>
          </div>
         <GetCallBack/>
        </div>
      </div>
    </div>
  );
}
