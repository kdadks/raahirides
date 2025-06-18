import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const DevTestCredentials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  // Only show in development mode
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const testUsers = [
    {
      name: "Test User",
      email: "test@raahirides.com",
      password: "test123",
      description: "Basic test user"
    },
    {
      name: "John Traveler",
      email: "john@example.com",
      password: "password123",
      description: "Sample traveler account"
    },
    {
      name: "Admin User",
      email: "admin@raahirides.com",
      password: "admin123",
      description: "Admin test account"
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
      duration: 2000,
    });
  };

  const quickLogin = (user) => {
    try {
      login(user.email, user.password);
      toast({
        title: "Quick Login Successful!",
        description: `Logged in as ${user.name}`,
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors mb-2"
        title="Show Test Credentials"
      >
        🔧
      </button>

      {/* Credentials Panel */}
      {isVisible && (
        <div className="bg-white border border-gray-300 rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold text-gray-800">🧪 Test Login Credentials</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-3">
            {testUsers.map((user, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded border">
                <div className="text-sm font-medium text-gray-800 mb-1">
                  {user.name}
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  {user.description}
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Email:</span>
                    <button
                      onClick={() => copyToClipboard(user.email)}
                      className="text-xs bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded text-blue-700"
                      title="Click to copy"
                    >
                      {user.email}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Password:</span>
                    <button
                      onClick={() => copyToClipboard(user.password)}
                      className="text-xs bg-green-100 hover:bg-green-200 px-2 py-1 rounded text-green-700"
                      title="Click to copy"
                    >
                      {user.password}
                    </button>
                  </div>
                </div>
                
                {/* Quick Login Button */}
                <button
                  onClick={() => quickLogin(user)}
                  className="w-full mt-2 text-xs bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 rounded transition-colors"
                  title="Quick login with this user"
                >
                  🚀 Quick Login
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-3 text-xs text-gray-500 border-t pt-2">
            💡 Click email/password to copy • Click 🚀 for instant login
          </div>
        </div>
      )}
    </div>
  );
};

export default DevTestCredentials;
