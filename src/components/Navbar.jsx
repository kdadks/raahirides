import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-orange-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center group"
            aria-label="Raahi Rides Home"
          >
            <img
              src="/raahi_rides_logo.png"
              alt="Raahi Rides Logo"
              className="h-10 w-auto mr-2"
              style={{ maxHeight: "40px" }}
            />
            <span className="sr-only">Raahi Rides</span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleNavigation("/")}
              className="px-4 py-2 rounded-full text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/packages")}
              className="px-4 py-2 rounded-full text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium"
            >
              Tour Packages
            </button>
            <button
              onClick={() => handleNavigation("/destinations")}
              className="px-4 py-2 rounded-full text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium"
            >
              Destinations
            </button>
            <button
              onClick={() => handleNavigation("/about")}
              className="px-4 py-2 rounded-full text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium"
            >
              About Us
            </button>
            {user ? (
              <>
                <Link to="/members/bookings" className="px-4 py-2 rounded-full text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium">
                  My Bookings
                </Link>
                <Link to="/members/history" className="px-4 py-2 rounded-full text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium">
                  Travel History
                </Link>
                <Link to="/members/profile" className="px-4 py-2 rounded-full text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium">
                  Profile
                </Link>
                {/* <Link to="/members/rewards" className="px-4 py-2 rounded-full text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 font-medium">Rewards</Link> */}
                <Button
                  onClick={logout}
                  className="ml-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white rounded-full px-6 py-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button className="ml-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white rounded-full px-6 py-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="p-3 rounded-full hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition-all duration-300"
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
          <div className="md:hidden border-t border-orange-100/50 bg-white/95 backdrop-blur-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <button
                onClick={() => handleNavigation("/")}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300"
              >
                🏠 Home
              </button>
              <button
                onClick={() => handleNavigation("/packages")}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300"
              >
                📦 Tour Packages
              </button>
              <button
                onClick={() => handleNavigation("/destinations")}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300"
              >
                🗺️ Destinations
              </button>
              <button
                onClick={() => handleNavigation("/about")}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300"
              >
                ℹ️ About Us
              </button>
              {user ? (
                <>
                  <Link
                    to="/members/bookings"
                    className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    📋 My Bookings
                  </Link>
                  <Link
                    to="/members/history"
                    className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    🗓️ Travel History
                  </Link>
                  <Link
                    to="/members/profile"
                    className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    👤 Profile
                  </Link>
                  {/* <Link
                    to="/members/rewards"
                    className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    🎁 Rewards
                  </Link> */}
                  <Button
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                    className="w-full mt-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white rounded-xl py-3 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block w-full mt-4"
                  onClick={closeMenu}
                >
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white rounded-xl py-3 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
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
