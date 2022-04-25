import React from "react";
import StreamingPage from "./pages/StreamingPage";
import SubscribePage from "./pages/SubscribePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const WebSDKRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StreamingPage />} />
        <Route exact path="/subscribe" element={<SubscribePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WebSDKRoutes;
