import React from 'react'
import { Card } from "@/components/ui/card";
import { Clock, Mail, PhoneCall } from 'lucide-react';
import { Button } from "@/components/ui/button";


export default function StickyCard({duration,package_cost,handleBookNowClick}) {
  return (
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
                      <span>{duration}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 ">
                    <div className="text-sm text-gray-600 mb-1">
                      Starting from
                    </div>
                    <div className="text-3xl font-bold text-primary mb-6">
                      ₹{package_cost.toLocaleString("en-IN")}{" "}
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
  )
}
