import React, { Component } from 'react';
import '../ChatMessage/style.css';
import '../../App.css'
import ChatUser from '../ChatUser';

export default class ChatMessage extends Component {

    render() {
        return (
            <div className="box">
                {/* <div>
                    <img src={require("../../UI/profile.jpg")}/>
                </div>
                <div>
                    <h6>Shayan Ali</h6>
                    <br/>
                    <p>hello bro !</p>
                </div>
                <div>
                    time
                </div> */}
                <ul className="user-ul white flex">
                    <ChatUser name="Shayan Ali" message="Hello Sir !" time="07:06 pm" />
                    <ChatUser name="Shaheer Ali" message="Kese ho ?" time="08:01 pm" />
                    <ChatUser name="Muzammil Ahmed" message="Nhi bhai tm sunao" time="08:20 pm" />
                    <ChatUser name="Ayan Ali" message="ok sir." time="08:40 pm" />
                    <ChatUser name="Hunain Ayaz" message="Acha" time="09:06 pm" />
                    <ChatUser name="Hasnain Ayaz" message="Acha theek hai" time="09:20 pm" />
                    <ChatUser name="Hasnain Ayaz" message="Acha theek hai" time="09:20 pm" />

                </ul>
            </div>
        )
    }
}
