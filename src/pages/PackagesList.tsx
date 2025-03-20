import BookNowDialog from "@/components/BookNowDialog";
import FooterNote from "@/components/common/FooterNote";
import NavBar from "@/components/common/NavBar";
import PageHeader from "@/components/common/PageHeader";
import Package from "@/components/emptyscreen/Package";
import { fetchPackages } from "@/utils/supabaseQueries";
import { useBookNowDialog } from "@/hooks/useBookNowDialog";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PageWrapper from "@/components/PageWrapper";
import { getPackageName } from "@/utils/getPackageName";

export default function PackagesList() {
  const { destinationId } = useParams();
  const location = useLocation();
  const { isOpen, openDialog, closeDialog } = useBookNowDialog();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Get subDestinationName from location state
  const  subDestinationName = getPackageName(location.state?.subDestinationName )|| "Tour";


  useEffect(() => {
    const loadPackages = async () => {
      try {
        setLoading(true);
        // destinationId here is actually the sub_destination_id from the route
        if (destinationId) {
          const data = await fetchPackages(destinationId);
          setPackages(data);
        } else {
          setPackages([]);
        }
      } catch (error) {
        console.error("Error loading packages:", error);
        toast({
          title: "Error",
          description: "Failed to load packages. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadPackages();
  }, [destinationId, toast]);

  const handleBookNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openDialog();
  };
  const nav = useNavigate();
  const navigateToDetails = (packageId) => {
    // nav("/package-details/:1");
  };

  return (
    <PageWrapper>
      <BookNowDialog isOpen={isOpen} onClose={closeDialog} />

      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Packages
          </h6>
          <h1 className="text-3xl">{subDestinationName} Tour Packages</h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : packages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="package-item bg-white mb-4 shadow-sm"
                onClick={navigateToDetails}
              >
                <img
                  className="w-full h-48 object-cover"
                  src={pkg.src}
                  alt={pkg.place}
                />
                <div className="p-4">
                  <div className="flex justify-between mb-3">
                    <small className="m-0">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-primary mr-2"
                      />
                      {pkg.place}
                    </small>
                    <small className="m-0">
                      <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="text-primary mr-2"
                      />
                      {pkg.duration}
                    </small>
                    <small className="m-0">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-primary mr-2"
                      />
                      {pkg.person}
                    </small>
                  </div>
                  <a
                    href="#"
                    className="text-lg font-medium no-underline hover:text-primary"
                  >
                    {pkg.info}
                  </a>
                  <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between">
                      <h6 className="m-0">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-primary mr-2"
                        />
                        {pkg.rating_average} <small>({pkg.rating_total})</small>
                      </h6>
                      <h5 className="m-0">{pkg.price}</h5>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <a
                    href="#"
                    className="bg-primary text-white w-full py-2 inline-block text-center"
                    onClick={handleBookNowClick}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Package />
        )}
      </div>
    </PageWrapper>
  );
}
