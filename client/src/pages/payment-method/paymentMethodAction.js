import { fetchPaymentMethods } from "../../helpers/axiosHelper";
import { setPaymentMethods } from "./paymentMethodSlice";

export const getPaymentMethodsAction = () => async (dispatch) => {
  const { result } = await fetchPaymentMethods();
  console.log(result);
  result && result.length && dispatch(setPaymentMethods(result));
};
