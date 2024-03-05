import axios from "axios";
import notification from "./notification";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/auth/sign-up`,
      formData
    );
    console.log(response);
    notification({
      message:
        "Kindly check your email inbox and click on the verification link that has been sent to confirm your account",
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

// export const handleVerifyEmail = async (formData) => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/api/v1/auth/verify-user`,
//       formData
//     );
//     // return response;
//   } catch (error) {
//     console.log(error);
//     notification({ message: error.response.data.message, status: "error" });
//   }
// };

export const handleUserAndAuth = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/auth/me`, {
      withCredentials: true,
    });
    console.log(response);
    return response;
  } catch (error) {
    notification({ message: error.response.data.message, status: "error" });
  }
};

export const handleSignIn = async (formData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/auth/sign-in`,
      formData,
      { withCredentials: true }
    );
    notification({ message: "Sign in successfully", status: "success" });
    return response;
  } catch (error) {
    notification({ message: error.response.data.message, status: "error" });
  }
};
