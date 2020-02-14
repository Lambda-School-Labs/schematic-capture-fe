import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../App/Auth/Register";
import Login from "../App/Auth/Login";
import ForgotPassword from "../App/Auth/ForgotPassword";
import Dashboard from "../App/Dashboard";
import PageError from "../shared/components/PageError";
import PrivateRoute from "../shared/components/PrivateRoute";
import InviteReg from "../shared/components/Modals/AdminSendInvite/InviteReg";
import ImageUpload from "../shared/components/Modals/JobSheet/Upload/UploadModal";
import UploadTest from "../shared/components/Modals/JobSheet/Upload/UploadTest";

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register/:inviteToken?" component={Register} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={Login} />
      <Route path="/invitereg" component={InviteReg} />
      <Route path="/test" component={UploadTest} />
      <Route path="*" component={PageError} />
    </Switch>
  );
};

export default Router;
