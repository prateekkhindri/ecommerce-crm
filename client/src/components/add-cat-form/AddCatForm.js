import React from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";

export const AddCatForm = () => {
  return (
    <div>
      <Form>
        <h4>Add new category</h4>

        <Row className="g-2 mt-3">
          <Col md="2">
            <FormGroup controlId="formGridState">
              <Form.Check label="status" type="switch" />
            </FormGroup>
          </Col>

          <Col md="3">
            <FormGroup controlId="formGridState">
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </FormGroup>
          </Col>

          <Col md="4">
            <CustomInput name="name" placeholder="Category Name" />
          </Col>

          <Col md="3">
            <Button type="submit">Add Category</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
