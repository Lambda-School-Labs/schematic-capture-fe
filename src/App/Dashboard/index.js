import React, { Fragment } from "react";
import NavBar from "./Navbar";

import DropdownButton from "../../shared/components/DropdownButton";

const items = [
  {
    to: "/invite/admin",
    text: "Administration"
  },
  {
    to: "/invite/employee",
    text: "Employee"
  },
  {
    to: "/invite/technician",
    text: "Technician"
  }
];

const Dashboard = () => {
  return (
    <Fragment>
      <NavBar />
      <h1>You made it to the dashboard!</h1>;
      <DropdownButton
        items={items}
        text="Create New"
        aria-haspopup="true"
        aria-expanded="false"
      />
    </Fragment>
  );
};

export default Dashboard;