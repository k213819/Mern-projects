import './chat.css';
import socketIo from 'socket.io-client';
import Message from "./Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import { useEffect,useState} from 'react';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';

let socket;

function Chat(){
    
    const location = useLocation();
    const {chatProfile} = location.state;
    const [id, setid] = useState("");
    const [messages, setMessages] = useState([]);
    const [name,setName] = useState('AREX');
    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        document.getElementById('chatInput').value = "";
    }
    
    useEffect(()=>{
        
        socket = socketIo('http://localhost:8000',{transports: ['websocket']});

        socket.on("connect",()=>{
            setid(socket.id);
        })

        socket.emit("joined",{name});
        socket.on("welcome",(data)=>{
        setMessages([...messages, data]);
        })
        socket.on('userjoined',(data)=>{
        setMessages([...messages, data]);
        })
        socket.on('leave',(data)=>{
        setMessages([...messages, data]);
        })

        return ()=>{

             socket.off();
        }
    },[])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message, data.id);
        })
        return () => {
            socket.off();
        }
    }, [messages])
    
    return(

        <div>
            <NavBar />
            <div className='chatPage'>
                <div className='socheinge'>

                </div>
                <div className='chatContainer'>
                       
                       <div className='header'>
                       <div className='profileInfo'>
                       <img src={chatProfile.image} className='chatimg' alt="Profile" />
                       <h2 className='sname'>{chatProfile.name}</h2>
                 </div>
                       </div>
                       <ReactScrollToBottom className="chatBox">
                       {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                       </ReactScrollToBottom>
                       <div className='inputBox'>
                       <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" placeholder='type a message....'/>
                    <button onClick={send} className="sendBtn"><img src='send.png' alt="Send" /></button>
                       </div>
                </div>
                <div className='chatProfile'>
                     <img src={chatProfile.image} className='Primage' />
                     <h2 className='Prname'>{chatProfile.name}</h2>
                     <button className='Prbutton'>Invite</button>
                     <div className='Prdiscp-container'>
                     <p className='Prdiscp'>{chatProfile.discp}</p>
                     </div>
                     
                </div>
            </div>
        </div>
    );
}

export default Chat;