import React from 'react'
import { Card } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { Calendar } from 'lucide-react';

export default function DayWiseActivities({day_wise_activity}) {
  return (
    <Card className="p-6 rounded-none">
    <Accordion
      type="single"
      className="w-full"
      defaultValue={`day-${day_wise_activity?.[0].day}`}
    >
      {day_wise_activity.map((day) => (
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
  )
}
