import { setCategories } from "./catSlice";
import { fetchCategory } from "../../helpers/axiosHelper";

export const getCategoriesAction = (_id) => async (dispatch) => {
  const { status, result } = await fetchCategory(_id);

  status === "success" && dispatch(setCategories(result));
};
