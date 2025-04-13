import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Plane, MoveRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { fetchItinerary } from "@/utils/supabaseQueries";
import Package from "@/components/emptyscreen/Package";
import BookNowDialog from "@/components/BookNowDialog";
import { useBookNowDialog } from "@/hooks/useBookNowDialog";
import DayWiseActivities from "@/components/packageDetails/DayWiseActivities";
import ServiceInclude from "@/components/packageDetails/ServiceInclude";
import ImageCarousel from "@/components/packageDetails/ImageCarousel";
import StickyCard from "@/components/packageDetails/StickyCard";
import TabBar from "@/components/packageDetails/TabBar";
import Overview from "@/components/packageDetails/Overview";
import CalculatePriceScreen from "@/components/packageDetails/CalculatePriceScreen";

const tabs = [
  { id: "activities", label: "Activities" },
  { id: "overview", label: "Overview" },
  { id: "calculate", label: "Calculate Price" },
];

const PackageDetails = () => {
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const { toast } = useToast();
  const { isOpen, openDialog, closeDialog } = useBookNowDialog();
  let { id } = useParams();

  if (id.includes(":")) {
    id = id.slice(1);
  }

  useEffect(() => {
    const loadPackages = async () => {
      try {
        setLoading(true);
        const data = await fetchItinerary(id);
        if (data) setItinerary(data[0]);
        else {
          setItinerary({});
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

    if (id) loadPackages();
  }, [id, toast]);

  const handleBookNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openDialog();
  };

  const handleUpdateTab = (e) => {
    setActiveTab(e);
  };

  return (
    <PageWrapper>
      <BookNowDialog isOpen={isOpen} onClose={closeDialog} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 ">
        {loading && (
          <div className="flex justify-center items-center h-60">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
        {itinerary?.id && (
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 lg:mt-0 mt-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {itinerary.itinerary_name}
              </h1>
              <div className="flex items-center  text-gray-600">
                <span className="flex items-center gap-1 flex-wrap">
                  <Plane className="h-4 w-4 mr-2" />
                  {itinerary?.all_destinations?.split(",").map((e, i) => {
                    return (
                      <span className="flex items-center ">
                        {i != 0 && <MoveRight className="h-4 w-4 mr-2" />}
                        {e.trim()}
                      </span>
                    );
                  })}
                  <Plane className="h-4 w-4 mr-2" />
                </span>
              </div>

              <hr className="w-full h-1 my-3" />

              <ImageCarousel
                images={itinerary.images}
                itinerary_name={itinerary.itinerary_name}
              />

              <Card className="p-6 mb-8 rounded-none">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-600">{itinerary.description}</p>
              </Card>

              {itinerary?.basic_services && (
                <ServiceInclude basic_services={itinerary.basic_services} />
              )}
              <TabBar
                tabs={tabs}
                activeTab={activeTab}
                handleUpdateTab={handleUpdateTab}
              />
              {activeTab == "activities" ? (
                <DayWiseActivities
                  day_wise_activity={itinerary?.day_wise_activity}
                />
              ) : activeTab == "overview" ? (
                <Overview
                  highlights={itinerary?.highlights}
                  inclusions={itinerary?.inclusions}
                  exclusions={itinerary?.exclusions}
                />
              ) : activeTab == "calculate" ? (
                <CalculatePriceScreen />
              ) : null}
            </div>

            <StickyCard
              duration={itinerary.duration}
              package_cost={itinerary.package_cost}
              handleBookNowClick={handleBookNowClick}
            />
          </div>
        )}
        {!loading && !itinerary?.id && <Package />}
      </div>
    </PageWrapper>
  );
};

export default PackageDetails;
