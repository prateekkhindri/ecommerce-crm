import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";

const initialState = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};
export const UpdatePassword = () => {
  const [form, setForm] = useState(initialState);

  const [error, setError] = useState("");

  const [disableBtn, setDisableBtn] = useState(true);

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    if (name === "password" || name === "confirmPassword") {
      setError("");

      !disableBtn && setDisableBtn(true);
    }

    setForm({
      ...form,
      [name]: value,
    });

    if (name === "confirmPassword") {
      const { password } = form;

      password !== value && setError("Password does not match");
      password.length < 6 &&
        setError("Password must be longer than 6 characters");

      !/[a-z]/.test(password) &&
        setError("Password must contain a lower case character");
      !/[A-Z]/.test(password) &&
        setError("Password must contain an upper case character");
      !/[0-9]/.test(password) && setError("Password must contain a number");

      !password && setError("New password must be provided");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const btnDisable = () => {
    !error && setDisableBtn(false);
  };

  const inputFields = [
    {
      label: "Current Password",
      name: "currentPassword",
      required: true,
      type: "password",
      value: form.currentPassword,
    },

    {
      label: "Password",
      name: "password",
      required: true,
      type: "password",
      value: form.password,
    },

    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      type: "password",
      value: form.confirmPassword,
      onBlur: btnDisable,
    },
  ];
  return (
    <div className="mt-5">
      <h4>Update your password</h4>
      <hr />

      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <Form.Group>
          <Form.Text muted>
            New password should contain at least one uppercase, one lowercase, a
            number and a minimum of 6 characters
          </Form.Text>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Text className="text-danger fs-3 fw-bolder">{error}</Form.Text>
        </Form.Group>

        <Form.Group className="mt-5">
          <Form.Control
            type="submit"
            value="Update Password"
            className="btn btn-danger mb-2"
            disabled={disableBtn}
          />
        </Form.Group>
      </Form>
    </div>
  );
};
