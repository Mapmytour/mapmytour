import { useOpenAuthModal } from "@/hooks/useOpenAuthModal";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthModal } from "../auth/AuthModal";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";

export default function NavBar({ isHome }: { isHome?: boolean }) {
  const nav = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (route?: string) => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (route) {
      nav(route);
    }
  };

  const {
    isOpenAuth,
    openDialog: openAuthDialog,
    closeDialog,
  } = useOpenAuthModal();

  const { session } = useAuth();
  return (
    <>
      <AuthModal isOpen={isOpenAuth} onOpenChange={closeDialog} />
      <nav className={`navbar top-0 lg:top-12 bg-transparent`}>
        <div
          // w-full lg:w-4/5
          className={`container mx-auto  p-0  lg:px-[26px]`}
        >
          <div className="flex justify-between bg-white items-center py-3 px-4 shadow-md  shadow-2xl">
            <a
              onClick={() => nav("/")}
              className="navbar-brand flex flex-col items-center"
            >
              <img className="h-[25px]" src="/img/logo.png" />
              <p className="text-[8px] uppercase tracking-[0.4px]"><b>travel world with class</b></p>
            </a>
            <button
              className="lg:hidden text-dark"
              onClick={() => toggleMobileMenu()}
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
            <div className="hidden lg:flex items-center">
              <a
                className="px-4 py-2 nav-item nav-link cursor-pointer active"
                onClick={() => nav("/")}
              >
                Home
              </a>
              <a
                className="px-4 py-2 nav-item nav-link cursor-pointer"
                onClick={() => nav("/about")}
              >
                About
              </a>
              {isHome && (
                <>
                  <a
                    className="px-4 py-2 nav-item nav-link cursor-pointer"
                    href="#service"
                  >
                    Services
                  </a>
                  <a
                    className="px-4 py-2 nav-item nav-link cursor-pointer"
                    href="#destination"
                  >
                    Tour Packages
                  </a>
                </>
              )}
              {/* <div className="relative nav-item dropdown group">
                <a href="#" className="px-4 py-2 nav-link dropdown-toggle">
                  Pages
                </a>
                <div className="absolute hidden group-hover:block mt-1 bg-white border-0 rounded-none w-48 z-10 shadow-lg">
                  <a
                    className="block px-4 py-2 dropdown-item hover:bg-light"
                    href="/blog"
                  >
                    Blog Grid
                  </a>
                  <a
                    className="block px-4 py-2 dropdown-item hover:bg-light"
                    href="/single"
                  >
                    Blog Detail
                  </a>
                  <a
                    className="block px-4 py-2 dropdown-item hover:bg-light"
                    href="/destination"
                  >
                    Destination
                  </a>
                  <a
                    className="block px-4 py-2 dropdown-item hover:bg-light"
                    href="/guide"
                  >
                    Travel Guides
                  </a>
                  <a
                    className="block px-4 py-2 dropdown-item hover:bg-light"
                    href="/testimonial"
                  >
                    Testimonial
                  </a>
                </div>
              </div> */}
              <span
                className="px-4 py-2 nav-item nav-link cursor-pointer"
                onClick={() => nav("/contact")}
              >
                Contact
              </span>

              {session ? (
                <span
                  className="ml-2 nav-item nav-link cursor-pointer w-9 h-9 flex justify-center items-center bg-black rounded-[40px]"
                  onClick={() => {
                    nav("/profile");
                  }}
                >
                  <FontAwesomeIcon icon={faUser} className="text-white" />
                </span>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="ml-4 "
                    onClick={() => openAuthDialog()}
                    style={{
                      border: "2px solid black",
                    }}
                  >
                    Sign In
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* </div> </div> */}
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu lg:hidden ">
        <div className="bg-white  p-[15px]">
          <a
            className="block px-4 py-2 nav-item nav-link active"
            onClick={() => toggleMobileMenu("/")}
          >
            Home
          </a>
          <a
            className="block px-4 py-2 nav-item nav-link"
            onClick={() => toggleMobileMenu("/about")}
          >
            About
          </a>
          {isHome && (
            <>
              <a
                className="block px-4 py-2 nav-item nav-link"
                onClick={() => toggleMobileMenu()}
                href="#service"
              >
                Services
              </a>
              <a
                className="block px-4 py-2 nav-item nav-link"
                onClick={() => toggleMobileMenu()}
                href="#destination"
              >
                Tour Packages
              </a>
            </>
          )}
          {/* <a className="block px-4 py-2 nav-item nav-link" href="/pages">
            Pages
          </a> */}
          <a
            className="block px-4 py-2 nav-item nav-link"
            onClick={() => {
              toggleMobileMenu("/contact");
            }}
          >
            Contact
          </a>
          {session ? (
            <a
              className="block px-4 py-2 nav-item nav-link"
              onClick={() => {
                toggleMobileMenu("/profile");
              }}
            >
              View Profile
            </a>
          ) : (
            <a
              className="block px-4 py-2 nav-item nav-link"
              onClick={() => {
                setMobileMenuOpen(false);
                openAuthDialog();
              }}
            >
             Sign In
            </a>
          )}
        </div>
      </div>
      )}
    </>
  );
}
