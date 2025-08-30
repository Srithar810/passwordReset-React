import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";

const App = () => {
  const [token, setToken] = useState("");
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<Body/>}>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route
              path="/resetPassword/:id/:token"
              element={<ResetPassword />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
