import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import LoginRoute from "./routes/LoginRoute";
import RegisterRoute from "./routes/RegisterRoute";
// this is the dashboard Route
import DashboardRoute from "./routes/DashboardRoute";
import CreatePage from "./components/CreatePage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginRoute />} />
      <Route path="register" element={<RegisterRoute />} />
      <Route path="dashboard/id" element={<DashboardRoute />} />
      <Route path="create/id" element={<CreatePage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
