import React from "react";

import { NavbarLeft, Icon, Item, ItemText, Bottom } from "./Style";

const Navbar = () => {
  const removeKeys = () => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("user");
    localStorage.removeItem("state");
  };
  return (
    <NavbarLeft>
      <Item to="/dashboard">
        <Icon className="fas fa-home" size={20} />
        <ItemText>Dashboard</ItemText>
      </Item>
      <Item to="/client/new">
        <Icon className="fas fa-plus" size={22} />
        <ItemText>Create&nbsp;Client</ItemText>
      </Item>
      <Item to="/invite">
        <Icon className="fas fa-users" size={20} />
        <ItemText>Invite&nbsp;New&nbsp;User</ItemText>
      </Item>
      <Bottom>
        <Item to="/" onClick={removeKeys}>
          <Icon className="fas fa-sign-out-alt" size={22} />
          <ItemText>Logout</ItemText>
        </Item>
      </Bottom>
    </NavbarLeft>
  );
};

export default Navbar;
