import { loginAdminUser } from "../../helpers/axiosHelper";
import { setUser } from "./loginRegisterSlice";
import { toast } from "react-toastify";

export const loginAction = (obj) => async (dispatch) => {
  // Show toastify spinner
  // Call axios helper
  const resultPromise = loginAdminUser(obj);

  toast.promise(resultPromise, {
    pending: "Please wait ....",
  });

  const { status, message, result } = await resultPromise;

  toast[status](message);

  console.log(result);
  // Show toastify message, success or error
  // If the response is success then call setUser and pass the user data to send the data to the redux store
  status === "success" && dispatch(setUser(result));
};
