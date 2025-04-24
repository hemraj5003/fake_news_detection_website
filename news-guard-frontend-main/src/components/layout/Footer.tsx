import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <ShieldCheck className="h-8 w-8 text-neutral" />
              <span className="ml-2 text-xl font-bold text-neutral-dark">NewsGuard</span>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Helping you identify fake news with advanced AI technology.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neutral transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neutral transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neutral transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neutral transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-neutral-dark transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base text-gray-600 hover:text-neutral-dark transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/detect" className="text-base text-gray-600 hover:text-neutral-dark transition-colors">
                  Detect News
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-neutral-dark transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-neutral-dark transition-colors">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-neutral-dark transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-neutral-dark transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-neutral-dark transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-neutral-dark transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} NewsGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
