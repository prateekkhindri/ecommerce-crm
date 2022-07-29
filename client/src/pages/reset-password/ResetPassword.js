import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { CustomInput } from "../../components/custom-input/CustomInput";
import { requestOTP, resetPassword } from "../../helpers/axiosHelper";
import { MainLayout } from "../../layout/MainLayout";

const initialState = {
  otp: "",
  password: "",
  confirmPassword: "",
};
const ResetPassword = () => {
  const [showForm, setShowForm] = useState("otp"); // otp || password

  const [email, setEmail] = useState("");

  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    let hasError = "";

    if (name === "password" || name === "confirmPassword") {
      !disableBtn && setDisableBtn(true);
    }

    setForm({
      ...form,
      [name]: value,
    });

    if (name === "confirmPassword") {
      const { password } = form;

      if (password !== value) {
        hasError = "Password does not match";
      }

      if (password.length < 6) {
        hasError = "Password must be longer than 6 characters";
      }

      if (!/[a-z]/.test(password)) {
        hasError = "Password must contain a lower case character";
      }

      if (!/[A-Z]/.test(password)) {
        hasError = "Password must contain an upper case character";
      }

      if (!/[0-9]/.test(password)) {
        hasError = "Password must contain a number";
      }

      if (!password) {
        hasError = "New password must be provided";
      }

      setError(hasError);

      !hasError && setDisableBtn(false);
    }
  };

  const handleOnOTPRequest = async (e) => {
    e.preventDefault();

    const responsePromise = requestOTP({ email });
    toast.promise(responsePromise, { pending: "Please wait ..." });

    const { status, message } = await responsePromise;
    toast[status](message);

    status === "success" && setShowForm("password");
    // alert(email);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const { confirmPassword, ...rest } = form;
    const responsePromise = resetPassword({ ...rest, email });
    toast.promise(responsePromise, { pending: "Please wait ..." });
    const { status, message } = await responsePromise;
    toast[status](message);

    status === "success" && setForm(initialState);
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
      value: form.otp,
    },
    {
      label: "New Password",
      name: "password",
      placeholder: "******",
      type: "password",
      required: true,
      value: form.password,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      placeholder: "******",
      type: "password",
      required: true,
      value: form.confirmPassword,
    },
  ];

  //   console.log(form);
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
          <Form className="mb-4" onSubmit={handleOnSubmit}>
            <h3>Reset Password </h3>
            <hr />
            <div className="py-3">Reset your new password</div>

            {fields.map((field, i) => (
              <CustomInput key={i} {...field} onChange={handleOnChange} />
            ))}

            <Form.Group>
              {" "}
              <Form.Text muted>
                New password should contain at least one uppercase, one
                lowercase, a number and a minimum of 6 characters
              </Form.Text>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Text className="text-danger fs-3 fw-bolder">
                {error}
              </Form.Text>
            </Form.Group>

            <CustomInput
              type="submit"
              className="btn btn-danger"
              value="Update password"
              disabled={disableBtn}
            />

            <div
              className="text-right mt-5"
              onClick={() => setShowForm("otp")}
              style={{ cursor: "pointer" }}
            >
              {" "}
              Request OTP again
            </div>

            <div className="text-end">
              <a href="/">Login</a> now
            </div>
          </Form>
        )}
      </div>
    </MainLayout>
  );
};

export default ResetPassword;
