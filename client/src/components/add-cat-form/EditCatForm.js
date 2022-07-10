import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  postCategoryAction,
  updateCategoryAction,
} from "../../pages/categories/catAction";
import { CustomInput } from "../custom-input/CustomInput";

const initialState = {
  status: "inactive",
  name: "",
  parentCatId: null,
};

export const EditCatForm = ({ selectedCat }) => {
  // console.log(selectedCat);

  const dispatch = useDispatch();
  // Local state to store the input field value
  const [form, setForm] = useState(initialState);

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    setForm(selectedCat);
  }, [selectedCat]);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { name, _id, parentCatId, status } = form;
    dispatch(updateCategoryAction({ name, _id, parentCatId, status }));

    console.log(form);
  };

  // console.log(form);

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        {/* <h4>Update category</h4> */}

        <Row className="g-2 mt-3">
          <Col md="2">
            <FormGroup controlId="formGridState">
              <Form.Check
                label="status"
                type="switch"
                name="status"
                onChange={handleOnChange}
                checked={form.status === "active"}
              />
            </FormGroup>
          </Col>

          <Col md="3">
            <FormGroup controlId="formGridState">
              <Form.Select
                defaultValue=""
                name="parentCatId"
                onChange={handleOnChange}
              >
                <option value="">Select Parent Category</option>
                {categories.map(
                  (item) =>
                    item.parentCatId === null && (
                      <option
                        key={item._id}
                        value={item._id}
                        selected={item._id === form.parentCatId}
                      >
                        {item.name}
                      </option>
                    )
                )}
              </Form.Select>
            </FormGroup>
          </Col>

          <Col md="4">
            <CustomInput
              name="name"
              placeholder="Category Name"
              onChange={handleOnChange}
              value={form.name}
              required
            />
          </Col>

          <Col md="3">
            <Button type="submit">Update Category</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
