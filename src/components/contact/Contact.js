import React from "react"

import "./contact.css"

export default function Contact() {
    return (
        <div>
            <div id="contact" class="contact_container">
                <h1>Contact Me</h1>
                <h3>Let's get in touch.</h3>

                <div class="icon_container" style={{textAlign: 'center'}}>
                    <a
                        title="github.com/junaidrahim"
                        href="https://www.github.com/junaidrahim"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img
                            class="icon"
                            src="https://img.icons8.com/color/96/000000/github.png"
                        ></img>
                    </a>

                    <a
                        title="junaidrahim5a@gmail.com"
                        href="mailto:junaidrahim5a@gmail.com"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img
                            class="icon"
                            src="https://img.icons8.com/color/96/000000/gmail.png"
                        ></img>
                    </a>

                    <a
                        title="instagram.com/junaidrahim31"
                        href="https://www.instagram.com/junaidrahim31"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img
                            class="icon"
                            src="https://img.icons8.com/color/96/000000/instagram.png"
                        ></img>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/junaidrahim"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img
                            class="icon"
                            src="https://img.icons8.com/color/96/000000/linkedin.png"
                        ></img>
                    </a>

                    <a
                        title="twitter.com/junaidrahim31"
                        href="https://www.twitter.com/junaidrahim31"
                        target="_blank" rel="noopener noreferrer"
                    >
                        <img
                            class="icon"
                            style={{ marginLeft: '5px' }}
                            src="https://img.icons8.com/color/96/000000/twitter.png"
                        ></img>
                    </a>
                    <br></br>
                </div>

                <p class="copyright">
                    &#xa9; Junaid H Rahim. All Rights Reserved
                </p>
                <br></br>
            </div>
        </div>
    )
}
