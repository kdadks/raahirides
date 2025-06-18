import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { easternUPCities, carTypes } from "@/constants/cities";
import { User, Lock, Settings, Bell, MapPin, Car, Phone, Mail, Save, Eye, EyeOff } from "lucide-react";

const Profile = () => {
  const { user, updateUser } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Profile form state
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    emergencyContact: "",
    emergencyPhone: ""
  });

  // Password form state
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Preferences form state
  const [preferencesData, setPreferencesData] = useState({
    preferredPickupCity: "",
    preferredCarType: "",
    defaultTripType: "one-way",
    emailNotifications: true,
    smsNotifications: true,
    promotionalEmails: false,
    bookingReminders: true
  });

  // Load user data on component mount
  useEffect(() => {
    if (user) {
      const savedProfile = JSON.parse(localStorage.getItem(`profile_${user.email}`) || "{}");
      const savedPreferences = JSON.parse(localStorage.getItem(`preferences_${user.email}`) || "{}");
      
      setProfileData({
        name: savedProfile.name || user.name || "",
        email: user.email || "",
        phone: savedProfile.phone || "",
        address: savedProfile.address || "",
        city: savedProfile.city || "",
        emergencyContact: savedProfile.emergencyContact || "",
        emergencyPhone: savedProfile.emergencyPhone || ""
      });

      setPreferencesData({
        preferredPickupCity: savedPreferences.preferredPickupCity || "",
        preferredCarType: savedPreferences.preferredCarType || "",
        defaultTripType: savedPreferences.defaultTripType || "one-way",
        emailNotifications: savedPreferences.emailNotifications !== false,
        smsNotifications: savedPreferences.smsNotifications !== false,
        promotionalEmails: savedPreferences.promotionalEmails || false,
        bookingReminders: savedPreferences.bookingReminders !== false
      });
    }
  }, [user]);

  const handleProfileInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePasswordInputChange = (field, value) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePreferencesInputChange = (field, value) => {
    setPreferencesData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProfileSave = () => {
    // Validation
    if (!profileData.name || !profileData.email) {
      toast({
        title: "Missing Information",
        description: "Name and email are required fields",
        variant: "destructive"
      });
      return;
    }

    // Save to localStorage
    localStorage.setItem(`profile_${user.email}`, JSON.stringify(profileData));
    
    // Update user context if name changed
    if (profileData.name !== user.name) {
      updateUser({ ...user, name: profileData.name });
    }

    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully"
    });
  };

  const handlePasswordChange = () => {
    // Validation
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast({
        title: "Missing Information",
        description: "Please fill in all password fields",
        variant: "destructive"
      });
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "New password and confirm password do not match",
        variant: "destructive"
      });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast({
        title: "Password Too Short",
        description: "Password must be at least 6 characters long",
        variant: "destructive"
      });
      return;
    }

    // For demo purposes, we'll just show success
    // In a real app, you'd verify current password and update in backend
    toast({
      title: "Password Updated",
      description: "Your password has been changed successfully"
    });

    // Clear password fields
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  const handlePreferencesSave = () => {
    // Save to localStorage
    localStorage.setItem(`preferences_${user.email}`, JSON.stringify(preferencesData));

    toast({
      title: "Preferences Saved",
      description: "Your booking preferences have been updated"
    });
  };

  const tabs = [
    { id: "profile", label: "Profile Info", icon: User },
    { id: "password", label: "Password", icon: Lock },
    { id: "preferences", label: "Preferences", icon: Settings },
    { id: "notifications", label: "Notifications", icon: Bell }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account and preferences</p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "border-orange-500 text-orange-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "profile" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleProfileInputChange("name", e.target.value)}
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleProfileInputChange("email", e.target.value)}
                      className="w-full p-3 border rounded-md bg-gray-50"
                      placeholder="your@email.com"
                      disabled
                    />
                    <p className="text-xs text-gray-500">Email cannot be changed</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleProfileInputChange("phone", e.target.value)}
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      City
                    </label>
                    <select
                      value={profileData.city}
                      onChange={(e) => handleProfileInputChange("city", e.target.value)}
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select your city</option>
                      {easternUPCities.map((city, index) => (
                        <option key={index} value={city.name}>
                          {city.name} ({city.district})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-medium">Address</label>
                    <textarea
                      value={profileData.address}
                      onChange={(e) => handleProfileInputChange("address", e.target.value)}
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 h-24 resize-none"
                      placeholder="Your complete address"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Emergency Contact Name</label>
                    <input
                      type="text"
                      value={profileData.emergencyContact}
                      onChange={(e) => handleProfileInputChange("emergencyContact", e.target.value)}
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Emergency contact person"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Emergency Contact Phone</label>
                    <input
                      type="tel"
                      value={profileData.emergencyPhone}
                      onChange={(e) => handleProfileInputChange("emergencyPhone", e.target.value)}
                      className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Emergency contact number"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleProfileSave}
                  className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Profile
                </Button>
              </motion.div>
            )}

            {activeTab === "password" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-gray-900">Change Password</h2>
                
                <div className="max-w-md space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Current Password *</label>
                    <div className="relative">
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        value={passwordData.currentPassword}
                        onChange={(e) => handlePasswordInputChange("currentPassword", e.target.value)}
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-10"
                        placeholder="Enter current password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showCurrentPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">New Password *</label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        value={passwordData.newPassword}
                        onChange={(e) => handlePasswordInputChange("newPassword", e.target.value)}
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-10"
                        placeholder="Enter new password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showNewPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">Password must be at least 6 characters long</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Confirm New Password *</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={passwordData.confirmPassword}
                        onChange={(e) => handlePasswordInputChange("confirmPassword", e.target.value)}
                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 pr-10"
                        placeholder="Confirm new password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <Button 
                    onClick={handlePasswordChange}
                    className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2"
                  >
                    <Lock className="h-4 w-4" />
                    Update Password
                  </Button>
                </div>
              </motion.div>
            )}

            {(activeTab === "preferences" || activeTab === "notifications") && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {activeTab === "preferences" ? "Booking Preferences" : "Notification Settings"}
                </h2>
                
                {activeTab === "preferences" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Preferred Pickup City
                        </label>
                        <select
                          value={preferencesData.preferredPickupCity}
                          onChange={(e) => handlePreferencesInputChange("preferredPickupCity", e.target.value)}
                          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="">No preference</option>
                          {easternUPCities.map((city, index) => (
                            <option key={index} value={city.name}>
                              {city.name} ({city.district})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2">
                          <Car className="h-4 w-4" />
                          Preferred Car Type
                        </label>
                        <select
                          value={preferencesData.preferredCarType}
                          onChange={(e) => handlePreferencesInputChange("preferredCarType", e.target.value)}
                          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="">No preference</option>
                          {carTypes.map((car, index) => (
                            <option key={index} value={car.type}>
                              {car.type} - {car.description}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Default Trip Type</label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              value="one-way"
                              checked={preferencesData.defaultTripType === "one-way"}
                              onChange={(e) => handlePreferencesInputChange("defaultTripType", e.target.value)}
                              className="mr-2"
                            />
                            One Way
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              value="round-trip"
                              checked={preferencesData.defaultTripType === "round-trip"}
                              onChange={(e) => handlePreferencesInputChange("defaultTripType", e.target.value)}
                              className="mr-2"
                            />
                            Round Trip
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">Notification Preferences</h3>
                  
                  <div className="space-y-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferencesData.emailNotifications}
                        onChange={(e) => handlePreferencesInputChange("emailNotifications", e.target.checked)}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">Email notifications for bookings</span>
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferencesData.smsNotifications}
                        onChange={(e) => handlePreferencesInputChange("smsNotifications", e.target.checked)}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">SMS notifications for updates</span>
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferencesData.bookingReminders}
                        onChange={(e) => handlePreferencesInputChange("bookingReminders", e.target.checked)}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">Booking reminders before travel date</span>
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferencesData.promotionalEmails}
                        onChange={(e) => handlePreferencesInputChange("promotionalEmails", e.target.checked)}
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="ml-3 text-sm text-gray-700">Promotional emails and special offers</span>
                    </label>
                  </div>
                </div>

                <Button 
                  onClick={handlePreferencesSave}
                  className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Preferences
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;