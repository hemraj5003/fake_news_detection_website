import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Menu, X, ShieldCheck, LogIn, UserPlus, LogOut, User
} from 'lucide-react';
import { motion } from 'framer-motion';

const TOKEN_KEY = 'token';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check auth status when route changes
  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    setIsLoggedIn(!!token);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setIsLoggedIn(false);
    navigate('/'); // optional: redirect after logout
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Detect News', path: '/detect' },
  ];

  return (
    <motion.nav
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ShieldCheck className="h-8 w-8 text-neutral" />
              <span className="ml-2 text-xl font-bold text-neutral-dark">NewsGuard</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium",
                  location.pathname === link.path
                    ? "text-neutral-dark"
                    : "text-gray-600 hover:text-neutral-dark"
                )}
              >
                {link.name}
              </Link>
            ))}

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-600">
                  <User className="h-4 w-4 mr-1" />
                  <span>Profile</span>
                </div>
                <Button variant="outline" className="flex items-center" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline" className="flex items-center">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-neutral hover:bg-neutral-dark flex items-center">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium",
                location.pathname === link.path
                  ? "bg-neutral-light text-neutral-dark"
                  : "text-gray-600 hover:bg-gray-100 hover:text-neutral-dark"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <>
              <div className="flex items-center px-3 py-2 text-base font-medium text-gray-600">
                <User className="h-5 w-5 mr-2" />
                <span>Profile</span>
              </div>
              <Button
                variant="outline"
                className="w-full justify-start mt-2"
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
              >
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full justify-start mt-2">
                  <LogIn className="h-5 w-5 mr-2" />
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full justify-start mt-2 bg-neutral hover:bg-neutral-dark">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
