import React from 'react';

const AnnouncementBanner = () => {
  const title = "We’re under maintenance";
  const message = "Our website is currently undergoing maintenance. We’ll be back shortly.";
  const number = '+91 9260927665';
  const linkUrl = `tel:${number}`;
  const linkText = "For booking queries please call";

  return (
    <div className="w-full bg-black text-white text-sm py-4 px-4 flex justify-center items-center text-center animate-pulse">
        <div>
          {message}{' '}
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-blue-100"
          >
            {linkText} → {number}
          </a>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
