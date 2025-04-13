import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Users,
  Hotel,
  Utensils,
  Plane,
  Car,
  Activity,
  Calendar,
  PhoneCall,
  Mail,
  Clock,
  MoveRight,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { fetchItinerary } from "@/utils/supabaseQueries";
import Package from "@/components/emptyscreen/Package";
import BookNowDialog from "@/components/BookNowDialog";
import { useBookNowDialog } from "@/hooks/useBookNowDialog";

const PackageDetails = () => {
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
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

              <Card className="mb-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    {itinerary.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video relative">
                          <img
                            src={image}
                            alt={`${itinerary.itinerary_name}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </Card>

              <Card className="p-6 mb-8 rounded-none">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-600">{itinerary.description}</p>
              </Card>

              <Card className="p-6 mb-8 rounded-none">
                <h2 className="text-xl font-semibold mb-4">
                  Included Services
                </h2>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(itinerary?.basic_services)?.map((e, i) => {
                    if (e == "flight")
                      return (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-base py-2"
                        >
                          <Plane className="h-4 w-4 mr-2" /> Flight
                        </Badge>
                      );
                    if (e == "hotels")
                      return (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-base py-2"
                        >
                          <Hotel className="h-4 w-4 mr-2" />{" "}
                          {itinerary.basic_services?.[e]?.[0]}
                        </Badge>
                      );
                    if (e == "cabs")
                      return (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-base py-2"
                        >
                          <Car className="h-4 w-4 mr-2" /> Transfers
                        </Badge>
                      );
                    if (e == "food")
                      return (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-base py-2"
                        >
                          <Utensils className="h-4 w-4 mr-2" /> Meals
                        </Badge>
                      );
                    if (e == "activities")
                      return (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-base py-2"
                        >
                          <Activity className="h-4 w-4 mr-2" /> Activities
                        </Badge>
                      );
                  })}
                </div>
              </Card>

              <Card className="p-6 rounded-none">
                <Accordion
                  type="single"
                  className="w-full"
                  defaultValue={`day-${itinerary.day_wise_activity[0].day}`}
                >
                  {itinerary.day_wise_activity.map((day) => (
                    <AccordionItem key={day.day} value={`day-${day.day}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          <span>
                            Day {day.day}: {day.title}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>{day.activities}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-2 rounded-none">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Stay Connected
                    </h2>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <PhoneCall className="h-5 w-5" />
                      <span>+91 9260927665</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="h-5 w-5" />
                      <span>info@mapmytour.in</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2 border-t mt-4 pt-4">
                      <Clock className="h-5 w-5" />
                      <span>{itinerary.duration}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 ">
                    <div className="text-sm text-gray-600 mb-1">
                      Starting from
                    </div>
                    <div className="text-3xl font-bold text-primary mb-6">
                      ₹{itinerary.package_cost.toLocaleString("en-IN")}{" "}
                      <span className="text-sm text-gray-600 font-medium">
                        /per adult
                      </span>
                    </div>
                    <div className="space-y-3">
                      <Button
                        className="w-full rounded-none"
                        size="lg"
                        onClick={handleBookNowClick}
                      >
                        Book Now
                      </Button>
                      {/* <Button
                      className="w-full rounded-none"
                      variant="outline"
                      size="lg"
                      onClick={handleGetBestDeal}
                    >
                      Get Best Deal
                    </Button> */}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
        {!loading && !itinerary?.id && <Package />}
      </div>
    </PageWrapper>
  );
};

export default PackageDetails;
