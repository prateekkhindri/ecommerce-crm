import React from "react";
import { Button } from "react-bootstrap";
import { PaymentMethodTable } from "../../components/payment-method/PaymentMethodTable";
import { AdminLayout } from "../../layout/AdminLayout";

const PaymentMethod = () => {
  return (
    <AdminLayout>
      <h3 className="py-3">Payment Methods</h3>

      <div className="text-end">
        <Button variant="primary">
          <i class="fa-solid fa-plus"></i> Add new payment method
        </Button>
      </div>

      <PaymentMethodTable />
    </AdminLayout>
  );
};

export default PaymentMethod;
