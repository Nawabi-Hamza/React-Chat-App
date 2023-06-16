    import React from 'react'
    import "./App.css"
    import { ChatEngine } from "react-chat-engine"
    import ChatFeed from './components/ChatFeed'
    import LoginForm from './components/LoginForm'

    export default function App() {
        if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="980caa9a-07c5-4d8b-972f-ea1de4e155b3"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
    }