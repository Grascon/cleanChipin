import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, FacebookShareButton, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, } from 'react-share';

import "./Sidebar.css";
import CreateEventsModal from "../CreateEventModal";

const Sidebar = props => (

    <nav id="sidebar">

        <ul className="list-unstyled components">
            <img src={props.imageString} className="rounded mx-auto d-block" alt="..." height="175px" width="175px" />
            <h2 align="center">{props.name}</h2>
            <li>
                <Link to="/Dashboard" className={
                    props.currentPage === "/Dashboard" ? "active" : ""
                }
                >
                    Attending Events</Link>
            </li>
            <li>
                <Link to="/Dashboard/Saved" className={
                    props.currentPage === "/Dashboard/Saved" ? "active" : ""
                }
                >
                    Saved Events</Link>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Hosting</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <Link to="/Dashboard/Host" className={
                            props.currentPage === "/Dashboard/Host" ? "active" : ""
                        }
                        >
                            My Events</Link>
                    </li>
                    <li className="modalButton" align="center">
                        <CreateEventsModal />
                    </li>
                </ul>
            </li>
        </ul>

        <div align="center" className="hoursPoints">
            {/* Hours: <span id="hours">{props.hours}</span> ||  */}
            ChipIn Points:  <span id="points">{props.points}</span>
        </div>
        <br></br>
        <div className="shareTitle" align="center">
            <h4>Share your points</h4>
        </div>

        <div className="socialcontainer" align="center">
            <div className="mediadiv">
                <FacebookShareButton
                    className="socialBtn"
                    url='https://chipin-project.herokuapp.com/'
                    quote={props.socialmsg}
                    hashtag='#Chipin'>
                    <FacebookIcon className="fbIcon"
                        size={30} 
                        round/>
                </FacebookShareButton>
            </div>
            <div className="mediadiv">
                <TwitterShareButton
                    className="socialBtn"
                    url="https://chipin-project.herokuapp.com/"
                    title={props.socialmsg}>
                    <TwitterIcon
                        size={30}
                        round />
                </TwitterShareButton>
            </div>
            <div className="mediadiv">
                <LinkedinShareButton
                    url="https://chipin-project.herokuapp.com/"
                    className="socialBtn"
                    title={props.socialmsg}
                    windowWidth={650}
                    windowHeight={500}>
                    <LinkedinIcon
                        size={30}
                        round />
                </LinkedinShareButton>
            </div>
        </div>
    </nav>
);

export default Sidebar;
