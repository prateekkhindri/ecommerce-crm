import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CustomModal } from "../../components/custom-modal/CustomModal";
import { AddPaymentMethodForm } from "../../components/payment-method/AddPaymentMethodForm";
import { PaymentMethodTable } from "../../components/payment-method/PaymentMethodTable";
import { AdminLayout } from "../../layout/AdminLayout";
import { toggleShowModal } from "../system-state/SystemSlice";

const PaymentMethod = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState("");

  const handleOnShowForm = () => {
    setShowForm("add");
    dispatch(toggleShowModal(true));
  };
  return (
    <AdminLayout>
      <h3 className="py-3">Payment Methods</h3>

      <div className="text-end">
        <Button variant="primary" onClick={handleOnShowForm}>
          <i class="fa-solid fa-plus"></i> Add new payment method
        </Button>
      </div>

      {/* {showForm && (
        <CustomModal title={"Add new payment method"}>
          <AddPaymentMethodForm />
        </CustomModal>
      )} */}

      <PaymentMethodTable showForm={showForm} setShowForm={setShowForm} />
    </AdminLayout>
  );
};

export default PaymentMethod;
