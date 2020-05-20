import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import "./home.css"


export default function Home() {
    return (
        <div>
            <nav>
                <ul className="topnav">
                    <li className="brand">Junaid Rahim</li>
                    <li className="nav_element">
                        <a onClick={() => scrollTo('#contact')}>Contact</a>
                    </li>
                    <li className="nav_element">
                        <a onClick={() => scrollTo('#my_blog')}>My Blog</a>
                    </li>
                    <li className="nav_element">
                        <a onClick={() => scrollTo('#projects')}>Projects</a>
                    </li>
                    <li className="nav_element">
                        <a onClick={() => scrollTo('#skills')}>Skills</a>
                    </li>
                    <li className="nav_element">
                        <a onClick={() => scrollTo('#about_me')}>About me</a>
                    </li>
                </ul>
            </nav>

            <div className="home_container">
                <h1>
                    Hi, I am <br></br>
                    <span className="name">Junaid</span>
                </h1>
                <h2>CSE Undergrad. Web Developer. ML Enthusiast.</h2>

                <div className="social_media_container">
                    <a
                        title="github.com/junaidrahim"
                        href="https://www.github.com/junaidrahim"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img src="https://img.icons8.com/color/96/000000/github.png"></img>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/junaidrahim"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img src="https://img.icons8.com/color/96/000000/linkedin.png"></img>
                    </a>

                    <a
                        title="instagram.com/junaidrahim31"
                        href="https://www.instagram.com/junaidrahim31"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img src="https://img.icons8.com/color/96/000000/instagram.png"></img>
                    </a>

                    <a
                        title="twitter.com/junaidrahim31"
                        href="https://www.twitter.com/junaidrahim31"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img src="https://img.icons8.com/color/96/000000/twitter.png"></img>
                    </a>
                </div>

                <h2 className="email">junaidrahim5a@gmail.com</h2>
                <h2 className="blog">
                    <a href="https://medium.com/@junaidrahim" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-cube"></i> My Blog
                    </a>
                </h2>
                <br></br>
                <br></br>
                <h2 className="chat_notif">
                    Have Ideas to discuss ? Want to chat ? <br></br> Use the
                    chat widget at the bottom to send me a message :-)
                </h2>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}
