import { supabase } from "@/integrations/supabase/client";

// Fetch all destinations
export const fetchDestinations = async () => {
  const { data, error } = await supabase
    .from("destinations")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching destinations:", error);
    return [];
  }

  return data || [];
};

// Fetch sub-destinations for a specific destination
export const fetchSubDestinations = async (destinationId: string) => {
  const { data, error } = await supabase
    .from("sub_destinations")
    .select("*")
    .eq("destination_id", destinationId)
    .order("name");

  if (error) {
    console.error("Error fetching sub-destinations:", error);
    return [];
  }

  return data || [];
};
// Fetch sub-destinations for a specific destination
export const fetchSubInternational = async (destinationId: string) => {
  const { data, error } = await supabase
    .from("sub_international")
    .select("*")
    .eq("sub_destinations", destinationId)
    .order("name");

  if (error) {
    console.error("Error fetching sub-destinations:", error);
    return [];
  }

  return data || [];
};

// Fetch all sub-destinations (for compatibility with existing code)
export const fetchAllSubDestinations = async () => {
  const { data, error } = await supabase
    .from("sub_destinations")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching all sub-destinations:", error);
    return [];
  }

  return data || [];
};

// Fetch packages for a specific sub-destination
export const fetchPackages = async (
  subDestinationId: string,
  isInternationalPackage
) => {
  const queryName = isInternationalPackage ? "sub-itr" : "sub_destination_id";
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .eq(queryName, subDestinationId)
    .order("place");

  if (error) {
    console.error("Error fetching packages:", error);
    return [];
  }

  return data || [];
};

// Fetch packages by enum_id (for compatibility with existing code)
export const fetchPackagesByEnumId = async (enumId: number) => {
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .eq("enum_id", enumId)
    .order("place");

  if (error) {
    console.error("Error fetching packages by enum ID:", error);
    return [];
  }

  return data || [];
};

// Fetch featured packages (for the homepage and all packages page)
export const fetchFeaturedPackages = async (limit = 6) => {
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .limit(limit)
    .order("rating_average", { ascending: false });

  if (error) {
    console.error("Error fetching featured packages:", error);
    return [];
  }

  return data || [];
};

export const fetchFAQs = async () => {
  const { data, error } = await supabase.from("faqs").select("*");
  if (error) {
    console.error("Error fetching featured packages:", error);
    return [];
  }

  return data || [];
};

export const fetchItinerary = async (id: number) => {
  const { data, error } = await supabase
    .from("itinerary")
    .select("*")
    .eq("package_id", id);

  if (error) {
    console.error("Error fetching packages by enum ID:", error);
    return [];
  }

  return data || [];
};
