import React from "react";
import { Menu, Button, Text, Avatar } from "@mantine/core";

const ProfileMenu = ({ user, logout }) => {
  return (
    <Menu shadow="md" width={150}>
      <Menu.Target>
        <Avatar src={user?.picture} alt="user img" radius={"xl"} />
      </Menu.Target>
      <Menu.Dropdown px={5}>
        <Menu.Item>Favourites</Menu.Item>
        <Menu.Item>Bookings</Menu.Item>
        <Menu.Item
          onClick={() => {
            localStorage.clear();
            logout();
          }}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
