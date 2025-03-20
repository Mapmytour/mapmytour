
import React, { useState } from 'react';
import NavBar from '@/components/common/NavBar';
import PageHeader from '@/components/common/PageHeader';
import FooterNote from '@/components/common/FooterNote';
import { useQuery } from '@tanstack/react-query';
import { fetchFeaturedPackages } from '@/utils/supabaseQueries';
import { useToast } from '@/hooks/use-toast';
import { useBookNowDialog } from '@/hooks/useBookNowDialog';
import BookNowDialog from '@/components/BookNowDialog';

const AllPackages = () => {
  const { toast } = useToast();
  const { isOpen, openDialog, closeDialog } = useBookNowDialog();
  const [priceFilter, setPriceFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');

  const { data: packages = [], isLoading } = useQuery({
    queryKey: ['packages'],
    queryFn: () => fetchFeaturedPackages(100), // Fetch all packages
  });

  const filteredPackages = packages.filter(pkg => {
    const price = parseInt(pkg.price.replace(/[^0-9]/g, ''));
    const duration = parseInt(pkg.duration);
    
    const matchesPrice = priceFilter === 'all' ||
      (priceFilter === 'low' && price < 20000) ||
      (priceFilter === 'mid' && price >= 20000 && price <= 30000) ||
      (priceFilter === 'high' && price > 30000);

    const matchesDuration = durationFilter === 'all' ||
      (durationFilter === 'short' && duration <= 3) ||
      (durationFilter === 'medium' && duration > 3 && duration <= 5) ||
      (durationFilter === 'long' && duration > 5);

    return matchesPrice && matchesDuration;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <BookNowDialog isOpen={isOpen} onClose={closeDialog} />
      <PageHeader />
      <NavBar />
      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h6 className="text-primary uppercase" style={{ letterSpacing: "5px" }}>
            Packages
          </h6>
          <h1 className="text-3xl">All Tour Packages</h1>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <select 
            className="px-4 py-2 border rounded-md"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">Under ₹20,000</option>
            <option value="mid">₹20,000 - ₹30,000</option>
            <option value="high">Above ₹30,000</option>
          </select>

          <select 
            className="px-4 py-2 border rounded-md"
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
          >
            <option value="all">All Durations</option>
            <option value="short">1-3 Days</option>
            <option value="medium">4-5 Days</option>
            <option value="long">6+ Days</option>
          </select>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-60">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="package-item bg-white mb-4 shadow-sm">
                <img
                  className="w-full h-48 object-cover"
                  src={pkg.src}
                  alt={pkg.place}
                />
                <div className="p-4">
                  <div className="flex justify-between mb-3">
                    <small className="m-0">
                      <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                      {pkg.place}
                    </small>
                    <small className="m-0">
                      <i className="fa fa-calendar-alt text-primary mr-2"></i>
                      {pkg.duration}
                    </small>
                    <small className="m-0">
                      <i className="fa fa-user text-primary mr-2"></i>
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
                        <i className="fa fa-star text-primary mr-2"></i>
                        {pkg.rating_average}{" "}
                        <small>({pkg.rating_total})</small>
                      </h6>
                      <h5 className="m-0">{pkg.price}</h5>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <button
                    onClick={openDialog}
                    className="bg-primary text-white w-full py-2 hover:bg-opacity-90 transition-all"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <FooterNote />
    </div>
  );
};

export default AllPackages;
