import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { easternUPCities, carTypes } from "@/constants/cities";
import { packageTours } from "@/constants/destinations";
import { Calendar, Phone, Mail, MapPin, Car, Clock, FileText, Trash2, Edit3, Save, X } from "lucide-react";

const ManageBookingModal = ({ isOpen, onClose, booking, onBookingUpdate }) => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedBooking, setEditedBooking] = useState(booking || {});
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedBooking({ ...booking });
  };

  const handleSave = () => {
    // Validation
    if (!editedBooking.name || !editedBooking.email || !editedBooking.phone || !editedBooking.date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Update the booking in localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const updatedBookings = bookings.map(b => 
      b.bookingId === booking.bookingId ? { ...editedBooking } : b
    );
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // Update parent component
    onBookingUpdate(editedBooking);
    setIsEditing(false);
    
    toast({
      title: "Booking Updated",
      description: "Your booking has been successfully updated."
    });
  };

  const handleCancel = () => {
    setEditedBooking({ ...booking });
    setIsEditing(false);
  };

  const handleCancelBooking = () => {
    // Remove booking from localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const updatedBookings = bookings.filter(b => b.bookingId !== booking.bookingId);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // Update parent component
    onBookingUpdate(null, true); // Pass true to indicate deletion
    onClose();
    
    toast({
      title: "Booking Cancelled",
      description: "Your booking has been cancelled successfully."
    });
  };

  const handleInputChange = (field, value) => {
    setEditedBooking(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!booking) return null;

  const currentBooking = isEditing ? editedBooking : booking;
  const isPackageTour = packageTours.some(tour => tour.title === currentBooking.destination);
  const isCustomTour = currentBooking.destination === "Custom Tour";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Manage Booking - {currentBooking.bookingId}
          </DialogTitle>
          <DialogDescription>
            View, edit, or cancel your booking details
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Booking Status */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-orange-900">Booking Status</h3>
                <p className="text-orange-700 text-sm">Confirmed - Awaiting trip date</p>
              </div>
              <div className="text-right text-sm text-orange-600">
                <p>Booked on: {new Date(currentBooking.bookingDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Name {isEditing && "*"}
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={currentBooking.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{currentBooking.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email {isEditing && "*"}
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={currentBooking.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{currentBooking.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone {isEditing && "*"}
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={currentBooking.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full p-2 border rounded-md"
                  required
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">{currentBooking.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Travel Date {isEditing && "*"}
              </label>
              {isEditing ? (
                <input
                  type="date"
                  value={currentBooking.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="w-full p-2 border rounded-md"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              ) : (
                <p className="p-2 bg-gray-50 rounded-md">
                  {new Date(currentBooking.date).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>

          {/* Trip Details */}
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Trip Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Destination</label>
                <p className="p-2 bg-gray-50 rounded-md font-medium text-orange-600">
                  {currentBooking.destination}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Pickup City {isEditing && "*"}</label>
                {isEditing ? (
                  <select
                    value={currentBooking.fromDestination}
                    onChange={(e) => handleInputChange("fromDestination", e.target.value)}
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
                ) : (
                  <p className="p-2 bg-gray-50 rounded-md">{currentBooking.fromDestination}</p>
                )}
              </div>

              {currentBooking.toDestination && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Destination City</label>
                  {isEditing ? (
                    <select
                      value={currentBooking.toDestination}
                      onChange={(e) => handleInputChange("toDestination", e.target.value)}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Select destination city</option>
                      {easternUPCities.map((city, index) => (
                        <option key={index} value={city.name}>
                          {city.name} ({city.district})
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p className="p-2 bg-gray-50 rounded-md">{currentBooking.toDestination}</p>
                  )}
                </div>
              )}

              {currentBooking.carType && (
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Car Type
                  </label>
                  {isEditing ? (
                    <select
                      value={currentBooking.carType}
                      onChange={(e) => handleInputChange("carType", e.target.value)}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">Select car type</option>
                      {carTypes.map((car, index) => (
                        <option key={index} value={car.type}>
                          {car.type} - {car.description} ({car.capacity})
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p className="p-2 bg-gray-50 rounded-md">{currentBooking.carType}</p>
                  )}
                </div>
              )}

              {currentBooking.tripType && (
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Trip Type
                  </label>
                  {isEditing ? (
                    <div className="flex gap-4 p-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="one-way"
                          checked={currentBooking.tripType === "one-way"}
                          onChange={(e) => handleInputChange("tripType", e.target.value)}
                          className="mr-2"
                        />
                        One Way
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="round-trip"
                          checked={currentBooking.tripType === "round-trip"}
                          onChange={(e) => handleInputChange("tripType", e.target.value)}
                          className="mr-2"
                        />
                        Round Trip
                      </label>
                    </div>
                  ) : (
                    <p className="p-2 bg-gray-50 rounded-md capitalize">{currentBooking.tripType}</p>
                  )}
                </div>
              )}

              {currentBooking.returnDate && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Return Date</label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={currentBooking.returnDate}
                      onChange={(e) => handleInputChange("returnDate", e.target.value)}
                      className="w-full p-2 border rounded-md"
                      min={currentBooking.date || new Date().toISOString().split('T')[0]}
                    />
                  ) : (
                    <p className="p-2 bg-gray-50 rounded-md">
                      {new Date(currentBooking.returnDate).toLocaleDateString()}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Special Needs */}
          {(currentBooking.specialNeeds || isEditing) && (
            <div className="border-t pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Special Needs/Comments</label>
                {isEditing ? (
                  <textarea
                    value={currentBooking.specialNeeds || ""}
                    onChange={(e) => handleInputChange("specialNeeds", e.target.value)}
                    className="w-full p-2 border rounded-md h-24 resize-none"
                    placeholder="Any special requirements, pickup address, or comments..."
                  />
                ) : (
                  <p className="p-2 bg-gray-50 rounded-md min-h-[3rem]">
                    {currentBooking.specialNeeds || "No special requirements"}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center border-t pt-4">
          <div>
            {!showCancelConfirm ? (
              <Button
                variant="destructive"
                onClick={() => setShowCancelConfirm(true)}
                className="flex items-center gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Cancel Booking
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Are you sure?</span>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleCancelBooking}
                >
                  Yes, Cancel
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowCancelConfirm(false)}
                >
                  No
                </Button>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            {isEditing ? (
              <>
                <Button variant="outline" onClick={handleCancel} className="flex items-center gap-2">
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
                <Button onClick={handleSave} className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
                <Button onClick={handleEdit} className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2">
                  <Edit3 className="h-4 w-4" />
                  Edit Booking
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ManageBookingModal;