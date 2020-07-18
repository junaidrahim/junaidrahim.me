import React from "react"

import './about-me.css'

export default function AboutMe() {
    return (
        <div>
            <div id="about_me" class="about-me_container">
                <div class="intro">
                    <h1>
                        Hey,<br class="breaker"></br> I am <span>Junaid</span>.
                    </h1>
                    <h2>CSE Freshman at KIIT, Bhubaneshwar</h2>
                    <br></br>
                    <p>
                        I am currently a freshman at KIIT, Bhubaneshwar studying
                        Computer Science and Engineering. Computers and
                        Technology have fascinated me since I was a little kid.
                        I started programming when I was 13 and eventually
                        became extremely curious and passionate about computing.
                        <br></br>
                        <br></br>I am currently working as a Web Developer at{" "}
                        <a href="http://dsckiit.in/">DSC KIIT.</a> I also work as
                        a part time Web Developer in the Sales Department of {" "}
                        <a
                            target="_blank" rel="noopener noreferrer"
                            href="http://www.desirefoundation.org/welcome/"
                        >
                            Desire Foundation
                        </a>
                        <br></br>
                        <br></br>
                        You can have a look at some of my work on my github. I
                        write regularly about programming, open source and my
                        experience as a university student on my blog.
                        <br></br>I read a lot. I love to learn new things and
                        build something cool. <br></br>
                        <br></br>
                        And yeah, if you want some cool insights on the code I
                        have written, visit{" "}
                        <a
                            target="_blank" rel="noopener noreferrer"
                            href="https://sourcerer.io/junaidrahim"
                        >
                            sourcerer.io/junaidrahim
                        </a>
                        <br></br>
                        <br></br>
                        Have something to say ? Want to work with me on some
                        exciting project ? Use the chat widget at the bottom of
                        the screen. I promise I'll reply soon :-)
                    </p>
                    <br></br>
                    <br></br>
                    <a
                        class="link resume"
                        target="_blank" rel="noopener noreferrer"
						href="https://rawcdn.githack.com/junaidrahim/resume/e08b5d7f845cf0264293c6ea4627fccdb977f4a7/June 2020/resume.pdf"
						style={{ marginLeft: '0rem', backgroundColor: '#2196fc'}}
                    >
                        <i class="far fa-file"></i> My Resume
                    </a>
                    <a
                        class="link blog"
                        target="_blank" rel="noopener noreferrer"
						href="https://medium.com/@junaidrahim"
						style={{ backgroundColor: '#ff6d00' }}
                    >
                        <i class="fas fa-cube"></i> My Blog
                    </a>
                    <span class="breaker">
                        <br></br>
                        <br></br>
                        <br></br>
                    </span>
                    <a
                        class="link github"
                        target="_blank" rel="noopener noreferrer"
						href="https://github.com/junaidrahim"
						style={{ backgroundColor: '#dd2c00' }}
                    >
                        <i class="fab fa-github"></i> My Github
                    </a>

                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                <div class="pic"></div>
            </div>
        </div>
    )
}
