import React from "react";
import CreateMemoir from "../CreateMemoirPage/CreateMemoirForm";
import Navbar from "../DashboardPage/NavbarComponent";

export default function CreateMemoirPage() {
  return (
    <div className="generateMemoir-bg generateMemoir-bg-css 2xl:w-screen 2xl:h-screen">
      <Navbar />
      <CreateMemoir />
    </div>
  );
}
