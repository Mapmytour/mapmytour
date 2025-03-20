import { faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faCircle, faEnvelope, faMapMarkerAlt, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const nav = useNavigate()
  return (
    <div className="bg-dark text-white-50 py-5 mt-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">
        <div className="mb-5">
          <a href="/" className="navbar-brand" >
            <img src="https://gqluohyewtjcjbntjfym.supabase.co/storage/v1/object/sign/logos/logoWithPunchLine.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvcy9sb2dvV2l0aFB1bmNoTGluZS5wbmciLCJpYXQiOjE3NDE1OTE3MjIsImV4cCI6MTg5OTI3MTcyMn0.2VDuzFc8T7wi6p-P6loRzozVYVZGPllBlVKUEj0jP1I"
            className="h-[50px] bg-gray-100"
            />
          </a>
          <p className='mt-4'>
          Our expertly curated tour packages ensure you experience the best destinations with ease.
          </p>
          <h6
            className="text-white uppercase mt-4 mb-3"
            style={{ letterSpacing: "5px" }}
          >
            Follow Us
          </h6>
          <div className="flex">
            {/* <a className="btn btn-outline-primary mr-2" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a> */}
            {/* <a className="btn btn-outline-primary mr-2" href="https://www.facebook.com/share/18D6nkSw6Z/?mibextid=wwXIfr" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a> */}
            <a className="btn btn-outline-primary mr-2" href="https://www.linkedin.com/company/106526320/admin/dashboard/" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a className="btn btn-outline-primary mr-2" href="https://www.instagram.com/mapmytour.in" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="btn btn-outline-primary" href="https://youtube.com/@mapmytour?si=pE_7wImIWIk7nhMq" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className="mb-5">
          <h5
            className="text-white uppercase mb-4"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h5>
          <div className="flex flex-col">
            <a className="text-white-50 mb-2 cursor-default" href="#">
              <FontAwesomeIcon icon={faCircle} className="mr-2" />
              Holidays Package
            </a>
            <a className="text-white-50 mb-2 cursor-default" href="#">
              <FontAwesomeIcon icon={faCircle} className="mr-2" />
             Cab Service
            </a>
            <a className="text-white-50 mb-2 cursor-default" href="#">
              <FontAwesomeIcon icon={faCircle} className="mr-2" />
              Ticket Booking
            </a>
            <a className="text-white-50 mb-2 cursor-default" href="#">
              <FontAwesomeIcon icon={faCircle} className="mr-2" />
              Guide Service
            </a>
            <a className="text-white-50 mb-2 cursor-default" href="#">
              <FontAwesomeIcon icon={faCircle} className="mr-2" />
              Destination Wedding
            </a>
            <a className="text-white-50 cursor-default" href="#">
              <FontAwesomeIcon icon={faCircle} className="mr-2" />
              Event Management
            </a>
          </div>
        </div>
        <div className="mb-5">
          <h5
            className="text-white uppercase mb-4"
            style={{ letterSpacing: "5px" }}
          >
            Useful Links
          </h5>
          <div className="flex flex-col">
            <a className="text-white-50 mb-2 cursor-pointer" onClick={()=>nav("/privacy-policy")}>
              <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
              Privacy Policy 
            </a>
            <a className="text-white-50 mb-2 cursor-pointer" onClick={()=>nav("/payment-policy")}>
              <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
              Payment Policy 
            </a>
            <a className="text-white-50 mb-2 cursor-pointer"  onClick={()=>nav("/terms-and-conditions")}>
              <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
              Terms & Conditions
            </a>
            <a className="text-white-50 mb-2 cursor-pointer" onClick={()=>nav("/terms-and-conditions/#cancellation")}>
              <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
              Cancellation & Refund Policy
            </a>
            <a className="text-white-50 mb-2 cursor-pointer" onClick={()=>nav("/faqs")}>
              <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
              FAQs
            </a>
            
          </div>
        </div>
        <div className="mb-5" >
          <h5
            className="text-white uppercase mb-4"
            style={{ letterSpacing: "5px" }}
          >
            Contact Us
          </h5>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Panchsheel Nagar, Chhindwara - 480001 (Near of Sdo Office Chhindwara Collectorate Office)
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            (+91) 9260927665
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            info@mapmytour.in
          </p>
          {/* <h6
            className="text-white uppercase mt-4 mb-3"
            style={{ letterSpacing: "5px" }}
          >
            Newsletter
          </h6>
          <div className="w-full">
            <div className="flex">
              <input
                type="text"
                className="w-2/3 p-4 border-0"
                placeholder="Your Email"
              />
              <div className="w-1/3">
                <button className="w-full h-full bg-primary text-white px-3">
                  Sign Up
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  )
}
