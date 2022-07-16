import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePaymentMethodAction,
  getPaymentMethodsAction,
} from "../../pages/payment-method/paymentMethodAction";

export const PaymentMethodTable = () => {
  const dispatch = useDispatch();

  const { paymentMethods } = useSelector((state) => state.paymentMethod);

  useEffect(() => {
    dispatch(getPaymentMethodsAction());
  }, []);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      //   console.log(_id);

      // dispatch action
      dispatch(deletePaymentMethodAction(_id));
    }
  };

  console.log(paymentMethods);
  return (
    <div className="table">
      <div>{paymentMethods.length} Payment methods found</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Status</th>
            <th> Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>

              <td>
                <Button variant="warning">Edit</Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
