import PageWrapper from "@/components/PageWrapper";
import FooterNote from "@/components/common/FooterNote";
import NavBar from "@/components/common/NavBar";
import PageHeader from "@/components/common/PageHeader";
import Package from "@/components/emptyscreen/Package";
import { fetchSubDestinations, fetchSubInternational } from "@/utils/supabaseQueries";
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { getPackageName } from "@/utils/getPackageName";

export default function CityList() {
  const nav = useNavigate();
  const { name } = useParams();

  const location = useLocation();
  const [subDestinations, setSubDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Get destinationId from location state or use the index as a fallback
  const destinationId = location.state?.destinationId;
  const is_international = location.state?.is_international;
 
  useEffect(() => {
    const loadSubDestinations = async () => {
      try {
        setLoading(true);
        if (destinationId) {
          let  data= null
          if(is_international ){
             data = await fetchSubInternational(destinationId);
          }else{
             data = await fetchSubDestinations(destinationId);
          }
          setSubDestinations(data);
        } else {
          // If no destinationId is provided, show empty state
          setSubDestinations([]);
        }
      } catch (error) {
        console.error("Error loading sub-destinations:", error);
        toast({
          title: "Error",
          description: "Failed to load destinations. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadSubDestinations();
  }, [destinationId, is_international, toast]);

  function handleNavigation(id:number, name:string, is_international,is_international_package){
if(is_international){
  nav(`/city/0/${name}`, { state: { destinationId: id, is_international } })
}else{
  nav(`/packages/${id}`, {
    state: { subDestinationName: name ,isInternationalPackage: is_international_package},
  })
}
  }

  return (
    <PageWrapper>
      <div className="container mx-auto py-12 mt-6">
        <div className="text-center mb-8">
          <h6
            className="text-primary uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Destination
          </h6>
          <h1 className="text-3xl">{getPackageName(name)} Tour Packages</h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : subDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subDestinations.map((dest) => (
              <div
                key={dest.id}
                className="destination-item relative overflow-hidden mb-4 cursor-pointer"
              >
                <img
                  className="w-full h-60 object-cover"
                  src={dest.img}
                  alt={dest.name}
                />
                <div
                  onClick={()=>handleNavigation(dest.id, dest.name,dest.is_international,dest.is_international_package)}
                  className="destination-overlay text-white no-underline"
                >
                  <h5 className="text-white">{dest.name}</h5>
                  <span>{dest.packages_count}</span>
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
