import React from 'react';
import { Card } from "@/components/ui/card";

const CheckIcon = () => (
  <svg className="mt-[4px] w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg className="mt-[4px] w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Section = ({ title, items, type }) => (
  <div className="mb-6">
    <h2 className="text-xl font-medium text-black mb-3">{title}</h2>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start align-center text-gray-700">
          {type === 'inclusion' && <CheckIcon />}
          {type === 'exclusion' && <CrossIcon />}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const TourPackageOverview = ({highlights,inclusions,exclusions}) => {
  return (
    <Card className="p-6 rounded-none">
      <Section title="Highlights" items={highlights} type={""} />
      <Section title="Inclusions" items={inclusions} type="inclusion" />
      <Section title="Exclusions" items={exclusions} type="exclusion" />
    </Card>
  );
};

export default TourPackageOverview;
