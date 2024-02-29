import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./component/Layout";

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
      </Routes>
    </>
  );
}

export default App;
