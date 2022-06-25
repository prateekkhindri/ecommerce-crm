import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const RegistrationForm = () => {
  return (
    <Form>
      <h3>Registration Form</h3>
      <hr />
      <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="fName" placeholder="Sam" />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lName" placeholder="Smith" />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" name="phone" placeholder="0444444444" />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" name="dob" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" placeholder="1 Sydney" />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="1 Sydney" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="******"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};
