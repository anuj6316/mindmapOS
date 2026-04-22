import React from 'react';
import Navbar from '../components/layout/Navbar';

export default function SimpleDocsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-32 px-8">
      <Navbar />
      <h1 className="text-4xl font-bold">Documentation Page Test</h1>
      <p className="mt-4">If you can see this, the routing is working correctly.</p>
    </div>
  );
}
