import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { postAdminUser } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";

export const RegistrationForm = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    // console.log(e);

    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);

    if (form.password !== form.confirmPassword) {
      return toast.error("Password and confirm password do not match");
    }

    const { confirmPassword, ...rest } = form;
    const { status, message } = await postAdminUser(rest);

    toast[status](message);
    // console.log(result);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h3>Registration Form</h3>
      <hr />
      <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="fName"
          placeholder="Sam"
          required
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lName"
          placeholder="Smith"
          required
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          placeholder="0444444444"
          required
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>DOB</Form.Label>
        <Form.Control
          type="date"
          name="dob"
          placeholder=""
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="1 Sydney"
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="1 Sydney"
          required
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="******"
          required
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="******"
          required
          onChange={handleOnChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>

      <div className="text-end">
        Already registered ? <Link to="/">Login</Link> Now
      </div>
    </Form>
  );
};
