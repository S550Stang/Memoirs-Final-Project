import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import LoginRoute from "./routes/LoginRoute";
import RegisterRoute from "./routes/RegisterRoute";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="login" element={<LoginRoute />} />
      <Route path="register" element={<RegisterRoute />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
