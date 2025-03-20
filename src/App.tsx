
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import CityList from "./pages/CityList";
import PackagesList from "./pages/PackagesList";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PackageDetails from "./pages/PackageDetails";
import FAQPage from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PaymentPolicy from "./pages/PaymentPolicy";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./pages/Profile";
import PasswordReset from "./components/auth/PasswordReset";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* These routes will be implemented later as needed */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<NotFound />} />
          <Route path="/package" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/single" element={<NotFound />} />
          <Route path="/destination" element={<NotFound />} />
          <Route path="/guide" element={<NotFound />} />
          <Route path="/testimonial" element={<NotFound />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reset-password/" element={<PasswordReset/>} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/payment-policy" element={<PaymentPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/city/:id/:name" element={<CityList />} />
          <Route path="/packages/:destinationId" element={<PackagesList />} />
          <Route path="/package-details/:id" element={<PackageDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
