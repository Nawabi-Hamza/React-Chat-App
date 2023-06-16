import MessageFrom from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";



const ChatFeed  = (props)=>{
    // console.log(props)
    const { chats,activeChat,userName,messages } = props;
    const chat = chats && chats[activeChat];
    // console.log(chat , userName , messages)

    const renderReadReceipts = (message,isMyMessage) => {
       return chat.people.map((person,index) => person.last_read === message.id && (
            // console.log(person?.person?.avatar)
            <div key={`read_${index}`} className="read-receipt" style={{ float:isMyMessage? 'right':'left' ,backgroundImage:`url(${person?.person?.avatar})` }} />
        ))
    }

    const renderMessage = ()=>{
        const keys = Object.keys(messages)
        // console.log(keys)
        return keys.map((key,index)=>{
            const message = messages[key]
            const lastMessageKey = index === 0 ? null: keys[index-1]
            const isMyMessage = userName === message.sender.username;
            return(<div key={`msg_${index}`} style={{width:"100%"}}>
                <div className="message-block">
                    {
                        isMyMessage?
                        <MyMessage message={message}/>
                        :
                        <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                    }
                </div>
                <div className="read-receipts" style={{marginRight: isMyMessage? "18px":"0px" , marginLeft: isMyMessage? "0px":"66px"}}>
                    {renderReadReceipts(message,isMyMessage)}
                </div>

            </div>)

        })
    }
    const handleLogout = (e)=>{
        e.preventDefault()
        localStorage.clear()
        window.location.reload()
    }
    // renderMessage()
    if(!chat) return "Loading..." ;
    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat?.title} 
                    <button className="ce-primary-button" style={{padding:"10px",float:"right",color:'white',cursor:'pointer'}} onClick={handleLogout}>Logout</button>
                </div>
                <div className="chat-subtitle">
                    {chat.people.map((person)=> ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessage()}
            <div style={{height:"100px"}} />
            <div className="message-form-container">
                <MessageFrom  {...props} chatId={activeChat}/>
            </div>
        </div>
    )

}

export default ChatFeed;