import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";
import "./SidebarChat.css";

const SidebarChat = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name of the chat");

    if (roomName) {
      // some stuff
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  //=== to pull out last message===

  // first we pull out all msgs
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    // if(id) is just for protection,, here id is same as roomId->that weve been using before
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMsgs(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  //===============================

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{msgs[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
};

export default SidebarChat;
