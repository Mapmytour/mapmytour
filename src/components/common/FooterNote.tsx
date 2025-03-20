import React from 'react'

export default function FooterNote() {
  return (
    <div className="bg-dark text-white border-t py-4 border-gray-700">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="text-center lg:text-left mb-3 lg:mb-0">
          <p className="m-0 text-white-50">
            Copyright &copy;{" "}
            <a href="/">
              M<span style={{ color: "rgb(245, 49, 49)" }}>a</span>pMyTour
            </a>
            . All Rights Reserved.
          </p>
        </div>
        <div className="text-center lg:text-right">
          {/* <p className="m-0 text-white-50">
            Designed by </a>
          </p> */}
        </div>
      </div>
    </div>
  </div>
  )
}
