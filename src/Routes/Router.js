import loadable from "@loadable/component";
import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";

const Router = () => {
  const SignIn = loadable(() => import("./SignIn"), {
    fallback: <Loading height="100%" />,
  });

  return (
    <Routes>
      <Route path="/signin" Component={SignIn} />

      {/* <Route path="/dashboard" component={Dashboard} /> */}

      <Route path="/*" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
};

export default Router;
