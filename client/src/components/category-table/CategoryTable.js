import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../pages/categories/catAction";

export const CategoryTable = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  return (
    <Row className="mt-5">
      <Col>
        <h4>50 Products found</h4>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <Form.Check />
              </th>
              <th>Status</th>
              <th> Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item) => (
              <tr>
                <td>
                  {" "}
                  <Form.Check />
                </td>
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td>
                  <Button variant="warning">Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
