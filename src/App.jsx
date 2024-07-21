import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import React from "react";
import ChatApp from "./Pages/ChatApp";
import HomePage from "./Pages/HomePage";
import "./App.css";
import Chatpage from "./Pages/ChatPage";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
};

export default App;
