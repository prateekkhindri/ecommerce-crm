import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/login-registration/loginRegisterSlice";
import systemReducer from "./pages/system-state/SystemSlice";

const store = configureStore({
  reducer: {
    userStore: loginReducer,
    system: systemReducer,
  },
});

export default store;
