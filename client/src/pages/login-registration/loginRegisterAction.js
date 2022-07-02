import { loginAdminUser } from "../../helpers/axiosHelper";
import { setUser } from "./loginRegisterSlice";

export const loginAction = (obj) => async (dispatch) => {
  // Show toastify spinner
  // Call axios helper
  const result = await loginAdminUser(obj);
  console.log(result);
  // Show toastify message, success or error
  // If the response is success then call setUser and pass the user data to send the data to the redux store
  result.status === "success" && dispatch(setUser(result.result));
};
