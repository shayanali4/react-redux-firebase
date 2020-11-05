import React, { Component } from 'react';
import '../ChatUser/style.css';

export default class ChatUser extends Component {

    render() {
        // console.log("props==>",this.props)
        return (
            <li className="user-li ">
            <div className="li-content flex">
                <div className="user flex">
                    <div classname="user-img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png" alt="" width="40" /></div>
                    <div className="user-data mx-3">
                        <p className="fontb s18">{this.props.name}</p>
                        <p className=" s14 ">{this.props.message}</p>
                    </div>
                </div>
                <div className="time">{this.props.time}</div>
            </div>
        </li>
        )
    }
}
