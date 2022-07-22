import React from "react";
import { UpdatePassword } from "../../components/user-profile/UpdatePassword";
import { UserProfile } from "../../components/user-profile/UserProfile";
import { AdminLayout } from "../../layout/AdminLayout";

const AdminProfile = () => {
  return (
    <AdminLayout>
      <h3 className="py-4">Admin Profile</h3>

      {/* User profile form */}
      <UserProfile />

      <hr />

      {/* User password update form */}
      <UpdatePassword />
    </AdminLayout>
  );
};

export default AdminProfile;
