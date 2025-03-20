import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import PageWrapper from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchFAQs } from "@/utils/supabaseQueries";

const FAQSkeletonLoader = () => {
  return (
    <div className="space-y-4 mt-10">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="border  overflow-hidden animate-pulse">
          <div className="w-full flex justify-between items-center text-left p-4 bg-gray-200 h-14  focus:outline-none"></div>
          {index == 0 && (
            <div className="p-4 bg-white border-t">
              <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 w-1/2"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const ErrorPage = ({ onRefresh }) => {
  return (
    <div className="max-w-4xl min-h-[500px] mx-auto p-6 text-center pt-[200px]">
      <h1 className="text-3xl font-bold text-red-600">No FAQs Found</h1>
      <p className="text-gray-600 my-4">
        Sorry, we couldn't find any FAQs at the moment. Please check back later
        or contact support.
      </p>
      <Button onClick={onRefresh}>Refresh</Button>
    </div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const {
    data: faqs = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["faqs"],
    queryFn: () => fetchFAQs(), // Fetch all faqs
  });

  return (
    <PageWrapper>
      {isError ? (
        <ErrorPage onRefresh={refetch} />
      ) : (
        <div className="max-w-4xl mx-auto p-6 mt-10">
          <h1 className="text-3xl font-bold text-center mb-6">
            Frequently Asked Questions (FAQ) – Map My Tour
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Here, you’ll find answers to some of the most common questions our
            customers have about our services. If you don’t find the information
            you’re looking for, feel free to contact us directly.
          </p>
          <div className="space-y-4">
            {isLoading ? (
              <FAQSkeletonLoader />
            ) : faqs.length > 0 ? (
              faqs.map((faq, index) => (
                <div key={index} className="border  overflow-hidden">
                  <button
                    className={`w-full flex justify-between items-center text-left p-4 bg-gray-${
                      openIndex === index ? 300 : 200
                    } hover:bg-gray-300 focus:outline-none `}
                    onClick={() => toggleFAQ(index)}
                  >
                    <h2 className="text-lg font-semibold text-black">
                      {faq?.question}
                    </h2>
                    {openIndex === index ? (
                      <FontAwesomeIcon icon={faPlus} />
                    ) : (
                      <FontAwesomeIcon icon={faMinus} />
                    )}
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white border-t text-gray-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))
            ) : (
              <ErrorPage onRefresh={refetch} />
            )}
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default FAQPage;
