import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login-registration/loginRegisterSlice";
import systemReducer from "./pages/system-state/SystemSlice";
import categoryReducer from "./pages/categories/catSlice";

const store = configureStore({
  reducer: {
    userStore: loginReducer,
    system: systemReducer,
    categories: categoryReducer,
  },
});

export default store;
