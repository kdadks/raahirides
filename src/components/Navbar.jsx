import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600">Raahi Rides</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600">About Us</Link>
            {user ? (
              <>
                <Link to="/members/bookings" className="text-gray-700 hover:text-orange-600">My Bookings</Link>
                <Link to="/members/history" className="text-gray-700 hover:text-orange-600">Travel History</Link>
                <Link to="/members/rewards" className="text-gray-700 hover:text-orange-600">Rewards</Link>
                <Button 
                  onClick={logout}
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                onClick={closeMenu}
              >
                About Us
              </Link>
              {user ? (
                <>
                  <Link
                    to="/members/bookings"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    onClick={closeMenu}
                  >
                    My Bookings
                  </Link>
                  <Link
                    to="/members/history"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    onClick={closeMenu}
                  >
                    Travel History
                  </Link>
                  <Link
                    to="/members/rewards"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    onClick={closeMenu}
                  >
                    Rewards
                  </Link>
                  <Button 
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                    className="w-full mt-2 bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block w-full mt-2"
                  onClick={closeMenu}
                >
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;