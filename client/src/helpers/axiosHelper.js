import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const loginRegisterEP = rootUrl + "/register-login";

// Creating the login endpoint
const loginEP = loginRegisterEP + "/login";

// Categories EP
const catEp = rootUrl + "/categories";

const apiProcessor = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: "error.message",
    };
  }
};

export const postAdminUser = (obj) => {
  return apiProcessor("post", loginRegisterEP, obj);
};

export const emailVerificationAdminUser = (obj) => {
  return apiProcessor("patch", loginRegisterEP, obj);
};

export const loginAdminUser = (obj) => {
  return apiProcessor("post", loginEP, obj);
};

// Category API endpoint
export const fetchCategory = (_id) => {
  const url = _id ? catEp + "/" + _id : catEp;
  return apiProcessor("get", url);
};
