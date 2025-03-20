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
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import NavBar from "@/components/common/NavBar";
import PageHeader from "@/components/common/PageHeader";
import FooterNote from "@/components/common/FooterNote";
import PageWrapper from "@/components/PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
// import { BestDealForm } from "@/components/forms/BestDealForm";
// import { BookingForm } from "@/components/forms/BookingForm";

const packageData = {
  "1": {
    title: "Bali Bliss Package",
    subtitle: "5 Days of Tropical Paradise",
    price: 45000,
    location:"Bali, Indonesia",
    description:
      "Experience the magic of Bali with our carefully curated package that combines luxury, adventure, and relaxation. From pristine beaches to ancient temples, immerse yourself in the island's rich culture and natural beauty.",
    images: [
      "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      "https://images.unsplash.com/photo-1542897644-e04428948020",
    ],
    duration: "5 Days 4 Nights",
    services: {
      flight: true,
      hotel: "4 Star",
      transfer: true,
      meals: true,
      activities: true,
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome",
        activities: [
          "Airport pickup",
          "Check-in to 4-star resort",
          "Welcome dinner at beachfront restaurant",
          "Evening at leisure",
        ],
      },
      {
        day: 2,
        title: "Temple & Culture Tour",
        activities: [
          "Visit to Tanah Lot Temple",
          "Traditional dance performance",
          "Lunch at local restaurant",
          "Art market visit",
        ],
      },
      {
        day: 3,
        title: "Adventure Day",
        activities: [
          "White water rafting",
          "Rice terrace trek",
          "Spa treatment",
          "Dinner at resort",
        ],
      },
      {
        day: 4,
        title: "Beach & Water Activities",
        activities: [
          "Snorkeling trip",
          "Beach relaxation",
          "Sunset cruise",
          "Farewell dinner",
        ],
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Breakfast at resort",
          "Last-minute shopping",
          "Airport transfer",
          "Departure",
        ],
      },
    ],
  },
  "4": {
    title: "Luxury Maldives Getaway",
    subtitle: "7 Days of Paradise in the Indian Ocean",
    price: 150000,
    description:
      "Indulge in the ultimate luxury experience in the Maldives. Stay in overwater villas, enjoy world-class cuisine, and explore the vibrant marine life of the Indian Ocean. Perfect for honeymoons and special occasions.",
    images: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223",
    ],
    duration: "7 Days 6 Nights",
    services: {
      flight: true,
      hotel: "5 Star",
      transfer: true,
      meals: true,
      activities: true,
    },
    itinerary: [
      {
        day: 1,
        title: "Welcome to Paradise",
        activities: [
          "VIP arrival at Male International Airport",
          "Luxury speedboat transfer to resort",
          "Welcome drinks and resort orientation",
          "Sunset dinner at overwater restaurant",
        ],
      },
      {
        day: 2,
        title: "Ocean Adventure",
        activities: [
          "Gourmet breakfast in villa",
          "Guided snorkeling tour",
          "Traditional Maldivian cooking class",
          "Private beach dinner under the stars",
        ],
      },
      {
        day: 3,
        title: "Spa & Relaxation",
        activities: [
          "Breakfast at main restaurant",
          "Couple's spa treatment",
          "Afternoon tea service",
          "Sunset dolphin watching cruise",
        ],
      },
      {
        day: 4,
        title: "Island Exploration",
        activities: [
          "Breakfast at villa",
          "Local island tour",
          "Water sports activities",
          "BBQ dinner on private beach",
        ],
      },
      {
        day: 5,
        title: "Ocean Discovery",
        activities: [
          "Breakfast at main restaurant",
          "Scuba diving or submarine tour",
          "Luxury yacht sunset cruise",
          "Fine dining experience",
        ],
      },
      {
        day: 6,
        title: "Leisure Day",
        activities: [
          "Floating breakfast in villa pool",
          "Optional water sports activities",
          "Photography session",
          "Farewell gala dinner",
        ],
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Final breakfast in villa",
          "Resort photoshoot session",
          "Luxury transfer to airport",
          "Departure assistance",
        ],
      },
    ],
  },
  "8": {
    title: "Luxury Maldives",
    subtitle: "Experience Ultimate Luxury in Paradise",
    price: 180000,
    description:
      "Discover the epitome of luxury in our exclusive Maldives resort. This package offers the perfect blend of relaxation and adventure, featuring overwater villas, gourmet dining, and exclusive experiences.",
    images: [
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    ],
    duration: "7 Days 6 Nights",
    services: {
      flight: true,
      hotel: "5 Star",
      transfer: true,
      meals: true,
      activities: true,
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paradise",
        activities: [
          "VIP airport welcome",
          "Seaplane transfer to resort",
          "Villa check-in with champagne",
          "Welcome dinner at signature restaurant",
        ],
      },
      {
        day: 2,
        title: "Marine Life Discovery",
        activities: [
          "Breakfast in villa",
          "Private marine biologist tour",
          "Coral adoption program",
          "Underwater restaurant dinner",
        ],
      },
      {
        day: 3,
        title: "Wellness Journey",
        activities: [
          "Sunrise yoga session",
          "Spa treatments",
          "Mindfulness workshop",
          "Healthy cooking class",
        ],
      },
      {
        day: 4,
        title: "Ocean Adventure",
        activities: [
          "Luxury yacht excursion",
          "Private snorkeling session",
          "Jet ski safari",
          "Sunset fishing trip",
        ],
      },
      {
        day: 5,
        title: "Cultural Experience",
        activities: [
          "Local island visit",
          "Traditional craft workshop",
          "Maldivian cooking class",
          "Cultural performance dinner",
        ],
      },
      {
        day: 6,
        title: "Romance & Relaxation",
        activities: [
          "Couple's massage",
          "Private beach picnic",
          "Sunset cocktail cruise",
          "Private beach dinner",
        ],
      },
      {
        day: 7,
        title: "Farewell",
        activities: [
          "Champagne breakfast",
          "Last-minute shopping",
          "Photo session",
          "VIP departure transfer",
        ],
      },
    ],
  },
};

const PackageDetails = () => {
  let { id } = useParams();
  console.log("id", id);
  if (id.includes(":")) {
    id = id.slice(1);
  }
  const packageInfo = packageData[id as keyof typeof packageData];
  const [showDealForm, setShowDealForm] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const { toast } = useToast();

  if (!packageInfo) return <div>Package not found</div>;

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  const handleGetBestDeal = () => {
    setShowDealForm(true);
  };

  //   const handleDealFormSubmit = (formData: any) => {
  //     toast({
  //       title: "Request Received",
  //       description: "We'll send you our best offer for this package soon!",
  //     });
  //     console.log("Form submitted:", formData);
  //   };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {packageInfo.title}
            </h1>
            <p className="text-gray-600 ">{packageInfo.subtitle}</p>

            <hr className="w-full h-1 my-3" />
            {/* <div>
  <div>

  </div>
</div> */}
            <Card className="mb-8">
              <Carousel className="w-full">
                <CarouselContent>
                  {packageInfo.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video relative">
                        <img
                          src={image}
                          alt={`${packageInfo.title} - Image ${index + 1}`}
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
              <p className="text-gray-600">{packageInfo.description}</p>
            </Card>

            <Card className="p-6 mb-8 rounded-none">
              <h2 className="text-xl font-semibold mb-4">Included Services</h2>
              <div className="flex flex-wrap gap-2">
                {packageInfo.services.flight && (
                  <Badge  variant="secondary" className="text-base py-2">
                    <Plane className="h-4 w-4 mr-2" /> Flight
                  </Badge>
                )}
                {packageInfo.services.hotel && (
                  <Badge variant="secondary" className="text-base py-2">
                    <Hotel className="h-4 w-4 mr-2" />{" "}
                    {packageInfo.services.hotel}
                  </Badge>
                )}
                {packageInfo.services.transfer && (
                  <Badge variant="secondary" className="text-base py-2">
                    <Car className="h-4 w-4 mr-2" /> Transfers
                  </Badge>
                )}
                {packageInfo.services.meals && (
                  <Badge variant="secondary" className="text-base py-2">
                    <Utensils className="h-4 w-4 mr-2" /> Meals
                  </Badge>
                )}
                {packageInfo.services.activities && (
                  <Badge variant="secondary" className="text-base py-2">
                    <Activity className="h-4 w-4 mr-2" /> Activities
                  </Badge>
                )}
              </div>
            </Card>

            <Card className="p-6 rounded-none">
              <Accordion
                type="single"
                className="w-full"
                defaultValue={`day-${packageInfo.itinerary[0].day}`}
              >
                {packageInfo.itinerary.map((day) => (
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
            <Card className="p-6 sticky top-24 rounded-none">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Stay Connected</h2>
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
                    <span>{packageInfo.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>{packageInfo.location}</span>
                  </div>
                </div>

                <div className="border-t pt-4 ">
                  <div className="text-sm text-gray-600 mb-1">
                    Starting from
                  </div>
                  <div className="text-3xl font-bold text-primary mb-6">
                    ₹{packageInfo.price.toLocaleString("en-IN")}
                  </div>
                  <div className="space-y-3">
                    <Button
                      className="w-full rounded-none"
                      size="lg"
                      onClick={handleBookNow}
                    >
                      Book Now
                    </Button>
                    <Button
                      className="w-full rounded-none"
                      variant="outline"
                      size="lg"
                      onClick={handleGetBestDeal}
                    >
                      Get Best Deal
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      {/* <BestDealForm 
        isOpen={showDealForm}
        onOpenChange={setShowDealForm}
        packageTitle={packageInfo.title}
        destination="Maldives"
        onSubmit={handleDealFormSubmit}
      />
      
      <BookingForm 
        isOpen={showBookingForm}
        onOpenChange={setShowBookingForm}
        packageDetails={{
          id: parseInt(id!, 10),
          name: packageInfo.title,
          duration: packageInfo.duration,
          price: packageInfo.price
        }}
      /> */}
    </PageWrapper>
  );
};

export default PackageDetails;
