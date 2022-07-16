import { toast } from "react-toastify";
import {
  deletePaymentMethod,
  fetchPaymentMethods,
} from "../../helpers/axiosHelper";
import { setPaymentMethods } from "./paymentMethodSlice";

export const getPaymentMethodsAction = () => async (dispatch) => {
  const { status, result } = await fetchPaymentMethods();
  console.log(result);
  status === "success" && dispatch(setPaymentMethods(result));
};

export const deletePaymentMethodAction = (_id) => async (dispatch) => {
  const responsePromise = deletePaymentMethod(_id);

  toast.promise(responsePromise, { pending: "Please wait..." });

  const { status, message } = await responsePromise;

  toast[status](message);

  status === "success" && dispatch(getPaymentMethodsAction());
};
