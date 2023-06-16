
import React,{ useState } from 'react'
import { sendMessage,isTyping } from "react-chat-engine"

export default function MessageFrom(props) {
  const [ value,setValue ] = useState('')
  const { chatId,creds } = props;
  // console.log(creds)
  const handleSubmit = (e)=>{
    e.preventDefault()
    const text = value.trim()
    if(text.length > 0 ) sendMessage(creds,chatId,{text})
    setValue('')
    
  }

  const handleChange = (e)=>{
    setValue(e.target.value)
    isTyping(props,chatId);
  }
  return (
    <form className="message-form" onSubmit={handleSubmit} > 
      <input type="text" className='message-input' placeholder='Send a message ... ' value={value} onChange={handleChange} onSubmit={handleSubmit}/>
      
    </form>
  )
}
