// import React from "react"
import Navbar from "../components/Navbar";
import Footer from  './Footer/Footer';
import ChatUserList from "./ChatUserList.js";

import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGF0ZS1zaGFkb3ctOCJ9.POw53kpc2YmJQJYlhs0ubyO0HtGrVEkj5kKM_8oHiU8';

chatClient.setUser(
  {
       id: 'late-shadow-8',
       name: 'Late shadow',
       image: 'https://getstream.io/random_svg/?id=late-shadow-8&name=Late+shadow'
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'godevs', {
  // add as many custom fields as you'd like
  image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'Talk about Go',
});

const Message = () => (
  <div>
    <Navbar />
    <ChatUserList />
    <Footer />
  </div>
);

export default Message;