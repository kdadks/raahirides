
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { easternUPCities, carTypes } from "@/constants/cities";
import { packageTours } from "@/constants/destinations";
import emailjs from 'emailjs-com';

// Initialize EmailJS
emailjs.init("kdadks@outlook.com");

const BookingModal = ({ isOpen, onClose, destination }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fromDestination: "",
    toDestination: "",
    packageTour: "",
    carType: "",
    date: "",
    returnDate: "",
    tripType: "one-way",
    specialNeeds: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: value
      };
      
      // If package tour is selected, clear destination fields
      if (name === "packageTour" && value) {
        newData.toDestination = "";
      }
      
      return newData;
    });
  };

  const sendNotificationEmail = async (bookingData) => {
    try {
      const templateParams = {
        to_email: 'kdadks@outlook.com',
        destination: bookingData.destination || bookingData.packageTour || `${bookingData.fromDestination} to ${bookingData.toDestination}`,
        customer_name: bookingData.name,
        customer_email: bookingData.email,
        customer_phone: bookingData.phone,
        from_destination: bookingData.fromDestination,
        to_destination: bookingData.toDestination || 'Package Tour',
        package_tour: bookingData.packageTour || 'N/A',
        car_type: bookingData.carType,
        trip_type: bookingData.tripType,
        booking_date: bookingData.date,
        return_date: bookingData.returnDate || 'N/A',
        special_needs: bookingData.specialNeeds || 'None',
        booking_time: new Date().toLocaleString()
      };

      await emailjs.send(
        'service_rgieaxb',
        'template_qggcatv',
        templateParams,
        'vL9qSWBrX4zZSU2qP'
      );
    } catch (error) {
      console.error('Failed to send notification email:', error);
      toast({
        title: "Email Notification Failed",
        description: "Booking was successful but we couldn't send the notification email.",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to book a tour",
        variant: "destructive"
      });
      navigate("/login");
      onClose();
      return;
    }

    // Check if it's a custom tour booking (Start Your Journey)
    const isCustomTourBooking = destination === "Custom Tour";
    
    // Check if it's a package tour booking
    const isPackageTourBooking = destination && packageTours.some(tour => tour.title === destination);

    // Validation for custom tour booking
    if (isCustomTourBooking) {
      if (!formData.name || !formData.email || !formData.phone || !formData.fromDestination || !formData.date) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return;
      }

      // If package tour is not selected, validate point-to-point fields
      if (!formData.packageTour) {
        if (!formData.toDestination || !formData.carType) {
          toast({
            title: "Missing Information",
            description: "Please select destination and car type for point-to-point booking",
            variant: "destructive"
          });
          return;
        }

        if (formData.tripType === "round-trip" && !formData.returnDate) {
          toast({
            title: "Missing Return Date",
            description: "Please select a return date for round trip",
            variant: "destructive"
          });
          return;
        }

        if (formData.fromDestination === formData.toDestination) {
          toast({
            title: "Invalid Route",
            description: "From and To destinations cannot be the same",
            variant: "destructive"
          });
          return;
        }
      }
    } 
    // Validation for package tour booking
    else if (isPackageTourBooking) {
      if (!formData.name || !formData.email || !formData.phone || !formData.fromDestination || !formData.date) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields including pickup city",
          variant: "destructive"
        });
        return;
      }
    }
    // Validation for point-to-point booking (legacy)
    else {
      if (!formData.name || !formData.email || !formData.phone || !formData.fromDestination || !formData.toDestination || !formData.carType || !formData.date) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive"
        });
        return;
      }

      if (formData.tripType === "round-trip" && !formData.returnDate) {
        toast({
          title: "Missing Return Date",
          description: "Please select a return date for round trip",
          variant: "destructive"
        });
        return;
      }

      if (formData.fromDestination === formData.toDestination) {
        toast({
          title: "Invalid Route",
          description: "From and To destinations cannot be the same",
          variant: "destructive"
        });
        return;
      }
    }

    try {
      // Save booking data to localStorage for demo
      const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const newBooking = {
        ...formData,
        destination,
        userId: user.email,
        bookingDate: new Date().toISOString(),
        bookingId: `RR${Date.now()}`
      };
      bookings.push(newBooking);
      localStorage.setItem("bookings", JSON.stringify(bookings));

      // Send notification email
      await sendNotificationEmail(newBooking);

      onClose();
      toast({
        title: "Booking Successful",
        description: `Booking ID: ${newBooking.bookingId}. We'll contact you shortly to confirm your booking.`
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        fromDestination: "",
        toDestination: "",
        packageTour: "",
        carType: "",
        date: "",
        returnDate: "",
        tripType: "one-way",
        specialNeeds: ""
      });
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Determine booking type
  const isCustomTourBooking = destination === "Custom Tour";
  const isPackageTourBooking = destination && packageTours.some(tour => tour.title === destination);
  const isPointToPointBooking = !destination || (!isCustomTourBooking && !isPackageTourBooking);

  // For custom tour, check if package tour is selected
  const showPackageTourFields = isCustomTourBooking && formData.packageTour;
  const showPointToPointFields = (isCustomTourBooking && !formData.packageTour) || isPointToPointBooking;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isCustomTourBooking 
              ? "Start Your Journey" 
              : isPackageTourBooking 
                ? `Book ${destination} Package` 
                : "Book Your Ride"
            }
          </DialogTitle>
          <DialogDescription>
            {isCustomTourBooking 
              ? "Choose between our package tours or create a custom point-to-point journey"
              : isPackageTourBooking 
                ? "Fill in your details to book this amazing package tour"
                : "Fill in your details to book a point-to-point journey"
            }
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Your phone number"
              required
            />
          </div>

          {/* Package Tour Selection for Custom Tour */}
          {isCustomTourBooking && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Package Tour (Optional)</label>
              <select
                name="packageTour"
                value={formData.packageTour}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Choose a package tour or leave blank for custom journey</option>
                {packageTours.map((tour, index) => (
                  <option key={index} value={tour.title}>
                    {tour.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Pickup City - Always shown */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Pickup City *</label>
            <select
              name="fromDestination"
              value={formData.fromDestination}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select pickup city</option>
              {easternUPCities.map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name} ({city.district})
                </option>
              ))}
            </select>
          </div>

          {/* Point-to-Point Fields */}
          {showPointToPointFields && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">Destination City *</label>
                <select
                  name="toDestination"
                  value={formData.toDestination}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select destination city</option>
                  {easternUPCities.map((city, index) => (
                    <option key={index} value={city.name}>
                      {city.name} ({city.district})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Car Type *</label>
                <select
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select car type</option>
                  {carTypes.map((car, index) => (
                    <option key={index} value={car.type}>
                      {car.type} - {car.description} ({car.capacity})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Trip Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="tripType"
                      value="one-way"
                      checked={formData.tripType === "one-way"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    One Way
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="tripType"
                      value="round-trip"
                      checked={formData.tripType === "round-trip"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Round Trip
                  </label>
                </div>
              </div>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {showPointToPointFields ? "Travel Date *" : "Preferred Date *"}
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            {showPointToPointFields && formData.tripType === "round-trip" && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Return Date *</label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  min={formData.date || new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Special Needs/Comments</label>
            <textarea
              name="specialNeeds"
              value={formData.specialNeeds}
              onChange={handleChange}
              className="w-full p-2 border rounded-md h-24 resize-none"
              placeholder="Any special requirements, pickup address, or comments..."
            />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-orange-600 text-white" onClick={handleSubmit}>
            Book Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
