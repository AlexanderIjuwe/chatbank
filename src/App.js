import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="a63b92b4-c1e8-4fcb-8c92-bdc926fe74dd"
            userName="alexx"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    )
}
export default App;