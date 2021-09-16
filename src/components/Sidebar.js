import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "../firebase";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  const userData = useSelector((state) => state.user);
  //insted of hard coding sidebarChat we are gonna bring them from our firebase
  const [rooms, setRooms] = useState([]);

  //we want to get values from our database once our sidebar componenet loads
  useEffect(() => {
    //go to the rooms collection ,, basically snapshot is the list of all our rooms and it also listens to any changes in the room. what happens is when our rooms list changes or is modified it takes another snapshot and gives us the new list. everytime it is updated we get the latest snapshot
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      //docs is the list of elements
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={userData.photoURL} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
