import { updateAdminProfile } from "../../helpers/axiosHelper";
import { setUser } from "../login-registration/loginRegisterSlice";
import { toast } from "react-toastify";

export const updateAdminProfileAction = (obj) => async (dispatch) => {
  const resultPromise = updateAdminProfile(obj);

  toast.promise(resultPromise, { pending: "Please wait ...." });

  const { status, message, user } = await resultPromise;
  toast[status](message);

  status === "success" && setUser(user);
};
