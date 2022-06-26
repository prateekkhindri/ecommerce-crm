import React, { useEffect } from "react";
import { MainLayout } from "../../layout/MainLayout";
import { useSearchParams } from "react-router-dom";
import { emailVerificationAdminUser } from "../../helpers/axiosHelper";

const EmailVerification = () => {
  let [searchParams] = useSearchParams();
  // console.log(searchParams.get("e"));
  // console.log(searchParams.get("c"));

  useEffect(() => {
    const email = searchParams.get("e");
    const verificationCode = searchParams.get("c");

    emailVerificationAdminUser({ email, verificationCode });
  }, []);

  return (
    <MainLayout>
      <h1>EmailVerification to do</h1>
    </MainLayout>
  );
};

export default EmailVerification;

// http://localhost:3000/admin-verification?e=b@gmail.com&c=dc19a35b-d354-46e1-a882-48517d578243
