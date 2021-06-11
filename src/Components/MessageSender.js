import { Avatar, Input } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import './MessageSender.css'


const MessageSender = () => {
    const [input, setInput] = useState(''); 
    const [image, setImage] = useState(null);

    const handleChange = (e) =>{
        if(e.target.file[0]){
            setImage(e.target.file[0]);
        }
    }

    const handleSubmit = () =>{
        console.log('Submitted!'); 
    }
    return (

        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://cuteanimaltab.com/wp-content/uploads/2017/05/9-46.jpg"/>
            <form action="">
                <input type="text" className="messageSender__input" placeholder="what's on your mind" value={input} onChange={(e)=>setInput(e.target.value)} />

                <input type="file" className="messageSender__fileSelector" onChange={handleChange}/>
                <button type="submit" onClick={handleSubmit}>Hidden Submit</button>
            </form>
            </div>
        </div>
    )
}

export default MessageSender
