import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Tooltip } from "react-tooltip";
import { Card } from "@/components/ui/card";
import { Activity, Car, Hotel, Plane, Utensils } from 'lucide-react';

export default function ServiceInclude({basic_services}) {
  return (
    <Card className="p-6 mb-8 rounded-none">
    <h2 className="text-xl font-semibold mb-4">
      Included Services
    </h2>
    <div className="flex flex-wrap gap-2">
      {Object.keys(basic_services)?.map((e, i) => {
        const  tooltipMessage = basic_services[e]?.join(", ")
        return (
          <>
            <Badge
              key={i}
              variant="secondary"
              className="text-base py-2"
              id={`tooltip-${e}`}
            >
              {e == "flight" ? (
                <>
                  <Plane className="h-4 w-4 mr-2" /> Flight
                </>
              ) : e == "hotels" ? (
                <>
                  <Hotel className="h-4 w-4 mr-2" />{" "}
                  {basic_services?.[e]?.[0]}
                </>
              ) : e == "cabs" ? (
                <>
                  {" "}
                  <Car className="h-4 w-4 mr-2" /> Transfers
                </>
              ) : e == "food" ? (
                <>
                  {" "}
                  <Utensils className="h-4 w-4 mr-2" /> Meals
                </>
              ) : e == "activities" ? (
                <>
                  <Activity className="h-4 w-4 mr-2" /> Activities
                </>
              ) : null}
            </Badge>

            <Tooltip anchorSelect={`#tooltip-${e}`}>
              {tooltipMessage}
            </Tooltip>
          </>
        );
      })}
    </div>
  </Card>
  )
}
