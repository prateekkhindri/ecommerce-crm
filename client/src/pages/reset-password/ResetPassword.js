import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { requestOTP } from "../../helpers/axiosHelper";
import { MainLayout } from "../../layout/MainLayout";

const ResetPassword = () => {
  const [showForm, setShowForm] = useState("otp");

  const [email, setEmail] = useState("");

  const handleOnOTPRequest = async (e) => {
    e.preventDefault();

    const responsePromise = requestOTP({ email });
    toast.promise(responsePromise, { pending: "Please wait ..." });

    const { status, message } = await responsePromise;
    toast[status](message);

    status === "success" && setShowForm("password");
    // alert(email);
  };

  const otpRequest = {
    label: "Request OTP",
    name: "email",
    type: "email",
    placeholder: "email@your.com",
    required: true,
  };

  const fields = [
    {
      label: "OTP",
      name: "otp",
      placeholder: "123456",
      type: "number",
      required: true,
    },
    {
      label: "New Password",
      name: "password",
      placeholder: "******",
      type: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      placeholder: "******",
      type: "password",
      required: true,
    },
  ];

  return (
    <MainLayout>
      <div className="reg-form d-flex justify-content-center mt-5">
        {/* Form here */}
        {showForm === "otp" && (
          <Form onSubmit={handleOnOTPRequest}>
            <h3>Forgot Password ?</h3>
            <hr />
            <div className="py-3">Request an OTP to reset your password</div>
            <CustomInput
              {...otpRequest}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(e.target.value);
              }}
            />
            <CustomInput
              type="submit"
              className="btn-outline-danger"
              value="Request OTP"
            />
          </Form>
        )}

        {showForm === "password" && (
          <Form>
            <h3>Reset Password </h3>
            <hr />
            <div className="py-3">Reset your new password</div>

            {fields.map((field, i) => (
              <CustomInput key={i} {...field} />
            ))}

            <CustomInput
              type="submit"
              className="btn-btn-danger"
              value="Update password"
            />

            <div
              className="text-right"
              onClick={() => setShowForm("otp")}
              style={{ cursor: "pointer" }}
            >
              {" "}
              Request OTP again
            </div>
          </Form>
        )}
      </div>
    </MainLayout>
  );
};

export default ResetPassword;
