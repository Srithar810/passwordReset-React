import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/login";
import Register from "./Components/register";
import Profile from "./Components/Profile";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./Components/forgotPassword";
import ResetPassword from "./Components/resetPassword";

const App = () => {
  const [token,setToken]= useState("")
  return (
    <>
  <div>
    <ToastContainer />
  </div>
    <BrowserRouter basename="/">
      <Routes>
          <Route path="/" element={<Body />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
          <Route path="/resetPassword/:id/:token" element={<ResetPassword/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
   
    </>
  );
};

export default App;
