
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md shadow-md transition-colors">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
