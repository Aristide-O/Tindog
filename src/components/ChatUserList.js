import React from 'react';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoib3JhbmdlLXdhdGVyLTEifQ.DxpRVISJV7fFwDPJ5KWvDz0fRGLOl-TD9wa0rTxY7dc';

chatClient.setUser(
  {
    id: 'orange-water-1',
    name: 'Orange water',
    image: 'https://getstream.io/random_svg/?id=orange-water-1&name=Orange+water'
  },
  userToken,
);

const filters = { type: 'messaging', members: { $in: ['orange-water-1'] } };
const sort = { last_message_at: -1 };
const channels = chatClient.queryChannels(filters, sort);

const ChatUserList = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <ChannelList
      filters={filters}
      sort={sort}
    />
    <Channel>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default ChatUserList; 