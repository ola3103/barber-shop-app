import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./component/Layout";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/verify-email"
          element={
            <Layout>
              <VerifyEmail />
            </Layout>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
