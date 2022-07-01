import React, { useEffect, useState } from "react";
import { MainLayout } from "../../layout/MainLayout";
import { useSearchParams } from "react-router-dom";
import { emailVerificationAdminUser } from "../../helpers/axiosHelper";
import { Alert, Spinner } from "react-bootstrap";

const EmailVerification = () => {
  let [searchParams] = useSearchParams();
  // console.log(searchParams.get("e"));
  // console.log(searchParams.get("c"));

  const [isLoading, setIsLoading] = useState(false);

  const [response, setResponse] = useState({});

  useEffect(() => {
    const email = searchParams.get("e");
    const verificationCode = searchParams.get("c");

    submitVerificationCode({ email, verificationCode });
  }, []);

  const submitVerificationCode = async (obj) => {
    setIsLoading(true);
    const result = await emailVerificationAdminUser(obj);
    setIsLoading(false);
    setResponse(result);
  };

  return (
    <MainLayout>
      <div className="verification mt-5 pt-5">
        <div className="message">
          <h1>Email verification</h1>
          {response?.message && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {" "}
              {response?.message}
            </Alert>
          )}
          {/* <Alert variant="success">{}</Alert> */}
          {isLoading && <Spinner variant="primary" animation="border" />}
        </div>
      </div>
    </MainLayout>
  );
};

export default EmailVerification;

// http://localhost:3000/admin-verification?e=b@gmail.com&c=dc19a35b-d354-46e1-a882-48517d578243
