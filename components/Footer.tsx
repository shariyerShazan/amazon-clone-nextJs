"use client";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {/* Get to Know Us */}
        <div>
          <h3 className="font-bold text-lg mb-3">Get to Know Us</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">About Amazon</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Press Releases</Link></li>
            <li><Link href="#" className="hover:underline">Amazon Science</Link></li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div>
          <h3 className="font-bold text-lg mb-3">Connect with Us</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Facebook</Link></li>
            <li><Link href="#" className="hover:underline">Twitter</Link></li>
            <li><Link href="#" className="hover:underline">Instagram</Link></li>
          </ul>
        </div>

        {/* Make Money with Us */}
        <div>
          <h3 className="font-bold text-lg mb-3">Make Money with Us</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Sell on Amazon</Link></li>
            <li><Link href="#" className="hover:underline">Affiliate Program</Link></li>
            <li><Link href="#" className="hover:underline">Advertise Your Products</Link></li>
            <li><Link href="#" className="hover:underline">Fulfillment by Amazon</Link></li>
          </ul>
        </div>

        {/* Let Us Help You */}
        <div>
          <h3 className="font-bold text-lg mb-3">Let Us Help You</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Your Account</Link></li>
            <li><Link href="#" className="hover:underline">Returns Centre</Link></li>
            <li><Link href="#" className="hover:underline">Help</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Amazon Clone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
