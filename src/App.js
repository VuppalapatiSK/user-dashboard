import React from "react";
import Home from "./pages/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Update from "./pages/Update";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/userDetail/:id" element={<UserDetail />} />
    </Routes>
    </HashRouter>
  );
}

export default App;
