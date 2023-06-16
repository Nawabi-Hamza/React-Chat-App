    import React from 'react'
    import "./App.css"
    import { ChatEngine } from "react-chat-engine"
    import ChatFeed from './components/ChatFeed'

    export default function App() {
    return (
        <ChatEngine
            height="100vh"
            projectID="980caa9a-07c5-4d8b-972f-ea1de4e155b3"
            userName="hamza"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
    }