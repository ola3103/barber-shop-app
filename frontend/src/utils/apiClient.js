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
