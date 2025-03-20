import React from "react";
import PageHeader from "./common/PageHeader";
import NavBar from "./common/NavBar";
import FooterNote from "./common/FooterNote";
import BookNowDialog from "./BookNowDialog";
import { useBookNowDialog } from "@/hooks/useBookNowDialog";

export default function PageWrapper({
  children,
  isHome,
}: {
  children: React.ReactNode;
  isHome?: boolean;
}) {

  const { isOpen, openDialog, closeDialog,isFromEnquiry } = useBookNowDialog();

  const handleBookNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openDialog(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
       {/* Book Now Dialog */}
       <BookNowDialog isFromEnquiry={isFromEnquiry} isOpen={isOpen} onClose={closeDialog} />

      {/* Topbar Start */}
      <PageHeader />
      {/* Topbar End */}

      {/* Navbar Start */}
      <NavBar isHome={isHome} />
      {/* Navbar End */}

      {/* page content */}
      {children}
      {/* page content end */}

      <FooterNote />

      <div className="fixed bottom-4 left-2 lg:left-5 z-50">
        <a target="_black" href="https://wa.me/919260927665/?text=I%27m%20interested%20in%20[xyz]%20package">
          <img src="/img/whatsapp.svg" className="w-[40px] h-[40px]" />
        </a>
      </div>
      <div className="fixed bottom-4 right-2 lg:right-5 z-50 bg-black py-3 px-6 cursor-pointer"  onClick={handleBookNowClick}>
          <p className="text-white text-uppercase font-bold">Enquire Now</p>
      </div>
    </div>
  );
}
