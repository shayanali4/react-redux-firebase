import React, { Component } from 'react'
import '../Home/style.css'
import { RiDeleteBin2Line } from 'react-icons/ri';
import { GoSearch } from 'react-icons/go';
import ChatMessage from '../ChatMessage';


export default class Home extends Component {
    render() {
        return (
            <div className="content">
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-md-4 list'>
                            <div className="hr">
                                <div className="hr-row">
                                    <div className="search-box">
                                        <div className="s18 p-1"><GoSearch /></div>
                                        <input type="search" placeholder="Search Any User"></input>
                                    </div>
                                </div>
                            </div>
                            <ChatMessage />
                        </div>
                        <hr />

                        <div className='col-md-8 chats'>
                            <div className="hr">
                                <div className="hr-row">
                                    <div className="title p">
                                       <h4>Shayan Ali</h4> 
                                       </div>
                                    <div className="s22 p">
                                        <RiDeleteBin2Line />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
