import React from 'react';
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import {ChatFeed} from './components/ChatFeed';
import {LoginForm} from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('userName'))
    return <LoginForm />
  return (
    <ChatEngine 
      height="100vh"
      projectID="d877b74c-fcbe-4ea1-aab4-b548fd13a171"
      userName={localStorage.getItem('userName')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}
export default App;
