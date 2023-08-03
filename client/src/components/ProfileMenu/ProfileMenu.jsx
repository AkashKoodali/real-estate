import React from "react";
import { Menu, Avatar } from "@mantine/core";
import { logout } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "../../redux/store";

const ProfileMenu = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch(logout());
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Menu shadow="md" width={150}>
      <Menu.Target>
        <Avatar color="blue" radius="xl">
          {user.name?.charAt(0).toUpperCase()}
        </Avatar>
      </Menu.Target>
      <Menu.Dropdown px={5}>
        <Menu.Item onClick={() => navigate("/favourites", { replace: true })}>
          Favourites
        </Menu.Item>
        <Menu.Item onClick={() => navigate("/bookings", { replace: true })}>
          Bookings
        </Menu.Item>
        <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
