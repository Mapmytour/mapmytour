import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function PageHeader() {
  return (
    <div className="hidden lg:block topbar pb-10" >
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="m-0">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            info@mapmytour.in
          </p>
          <p className="text-body px-3">|</p>
          <p className="m-0">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +91 9260927665
          </p>
        </div>
        <div className="flex items-center">
          <a href="https://www.facebook.com/share/18D6nkSw6Z/?mibextid=wwXIfr" target="_blank" className="text-primary px-3">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.linkedin.com/company/106526320/admin/dashboard/" target="_blank" className="text-primary px-3">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.instagram.com/mapmytour.in" target="_blank" className="text-primary px-3">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://youtube.com/@mapmytour?si=pE_7wImIWIk7nhMq" target="_blank" className="text-primary pl-3">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
