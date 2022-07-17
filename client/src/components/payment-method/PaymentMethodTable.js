import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePaymentMethodAction,
  getPaymentMethodsAction,
} from "../../pages/payment-method/paymentMethodAction";
import { toggleShowModal } from "../../pages/system-state/SystemSlice";
import { CustomModal } from "../custom-modal/CustomModal";
import { AddPaymentMethodForm } from "./AddPaymentMethodForm";
import { EditPaymentMethodForm } from "./EditPaymentMethodForm";

export const PaymentMethodTable = ({ showForm, setShowForm }) => {
  const dispatch = useDispatch();

  // const [showForm, setShowForm] = useState(false);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({});

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

  const handleOnEdit = (item) => {
    // console.log(_id);
    setSelectedPaymentMethod(item);
    setShowForm("edit");
    dispatch(toggleShowModal(true));
  };

  const whichForm = {
    add: <AddPaymentMethodForm />,
    edit: (
      <EditPaymentMethodForm selectedPaymentMethod={selectedPaymentMethod} />
    ),
  };

  // console.log(paymentMethods);
  return (
    <div className="table">
      {showForm && whichForm[showForm]}

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
                <Button variant="warning" onClick={() => handleOnEdit(item)}>
                  Edit
                </Button>{" "}
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
