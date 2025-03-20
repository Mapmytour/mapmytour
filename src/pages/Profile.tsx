
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import PageWrapper from "@/components/PageWrapper";

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <PageWrapper>
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="p-6">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">Profile Details</TabsTrigger>
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="space-y-4">
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="mt-1">{user.email}</p>
                  </div>
                  {user.user_metadata?.full_name && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Full Name</label>
                      <p className="mt-1">{user.user_metadata.full_name}</p>
                    </div>
                  )}
                  <div className="pt-4">
                    <Button onClick={() => signOut()} variant="outline">
                      Sign Out
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="bookings">
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>
                <div className="text-center py-8 text-gray-500">
                  <Package className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2">No bookings found</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => navigate('/packages')}
                  >
                    Browse Packages
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div></PageWrapper>
  );
};

export default Profile;