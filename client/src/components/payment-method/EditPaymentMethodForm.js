import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postPaymentMethodAction } from "../../pages/payment-method/paymentMethodAction";

import { CustomInput } from "../custom-input/CustomInput";
import { CustomModal } from "../custom-modal/CustomModal";

export const EditPaymentMethodForm = () => {
  const dispatch = useDispatch();

  const initialState = {
    status: "inactive",
    name: "",
    description: "",
  };

  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    // console.log(name, value, checked);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(postPaymentMethodAction(form));
    setForm(initialState);
    console.log(form);
  };

  const inputFields = [
    {
      label: "Payment method name",
      name: "name",
      placeholder: "i.e pay by credit card",
      required: true,
      type: "text",
      value: form.name,
    },
    {
      label: "Description",
      name: "description",
      required: true,
      type: "text",
      as: "textarea",
      placeholder: "Write more details about the payment method",
      value: form.description,
    },
    {
      type: "submit",
      className: "btn btn-primary",
      value: "Update payment method",
    },
  ];

  return (
    <div>
      <CustomModal title={"Update new payment method"}>
        <Form onSubmit={handleOnSubmit}>
          <FormGroup controlId="formGridState">
            <Form.Check
              label="status"
              type="switch"
              name="status"
              onChange={handleOnChange}
              checked={form.status === "active"}
            />
          </FormGroup>
          {inputFields.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
        </Form>
      </CustomModal>
    </div>
  );
};
