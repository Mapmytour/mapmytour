
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchDestinations } from '@/utils/supabaseQueries';
import { useToast } from '@/hooks/use-toast';

export default function TopDestination() {
  const nav = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        setLoading(true);
        const data = await fetchDestinations();
        setDestinations(data);
      } catch (error) {
        console.error("Error loading destinations:", error);
        toast({
          title: "Error",
          description: "Failed to load destinations. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadDestinations();
  }, [toast]);

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-8">
        <h6
          className="text-primary uppercase"
          style={{ letterSpacing: "5px" }}
        >
          Destination
        </h6>
        <h1 className="text-3xl">Explore Top Destination</h1>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
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
                onClick={() => nav(`/city/${index}/${dest.name}`, { state: { destinationId: dest.id } })}
                className="destination-overlay text-white no-underline"
              >
                <h5 className="text-white text-lg" style={{
                  textShadow:"0 0 10px #000"
                }}>{dest.name}</h5>
                <span>{dest.cities}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
