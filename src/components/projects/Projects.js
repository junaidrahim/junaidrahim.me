import React from "react"

import "./projects.css"

export default function Projects() {
    return (
        <div>
            <div id="projects" class="projects_container">
                <h1 class="is-large">My Projects</h1>
                <h3>
                    Check out some of my recent work. Almost all of it is on
                    Github.
                </h3>

                <div class="cards_container">
                    <div class="card">
                        <h2 class="title">javascriptquizgame.wtf</h2> <br></br>
                        <div style={{paddingLeft: '1.3rem'}}>
                            <span class="caption">
                                A game built on top of the famous Javascript
                                Questions by Lydia Hallie. Implemented a backend
                                server in Golang to parse data from a README
                                file and store it in a database, paired with a
                                web frontend in React <br></br>
                            </span>
                            <br></br>
                        </div>
                        <div class="link_container">
                            <a
                                href="https://www.github.com/junaidrahim/program-homework-solver"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <i class="fab fa-github"></i> Have a look !
                            </a>
                        </div>
                    </div>

                    <div class="card">
                        <h2 class="title">Program Homework Solver</h2> <br></br>
                        <div style={{paddingLeft: '1.3rem'}}>
                            <span class="caption">
                                A simple command line application written in{" "}
                                <b>C++</b> that identifies the mathematical
                                function from the first few terms and generates
                                source code to print till the nth term of that
                                function. Used Lagrange’s Interpolation Method
                                for function estimation.
                            </span>
                            <br></br>
                        </div>
                        <div class="link_container">
                            <a
                                href="https://www.github.com/junaidrahim/program-homework-solver"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <i class="fab fa-github"></i> Have a look !
                            </a>
                        </div>
                    </div>

                    <div class="card">
                        <h2 class="title">KBC-webapp</h2> <br></br>
                        <div style={{paddingLeft: '1.3rem'}}>
                            <span class="caption">
                                I should have come up with a better name,
                                anyway, It's a simple Server + Android App
                                system which can be used to conduct a quiz game.
                                I built this because my society wanted to
                                conduct a small quiz event for the children on
                                the eve of Children's Day.
                            </span>
                        </div>
                        <div class="link_container">
                            <a
                                href="https://github.com/junaidrahim/KBC-webapp"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <i class="fab fa-github"></i> Have a look !
                            </a>
                        </div>
                        <br></br>
                    </div>

                    <div class="card">
                        <h2 class="title">Download Gator</h2> <br></br>
                        <div style={{paddingLeft: '1.3rem'}}>
                            <span class="caption">
                                A Web App to Start a file download remotely on
                                the server. Server is written in <b>Python3</b>{" "}
                                using <b>Flask</b> hosted using ngrok and
                                connecting it to a Telegram Bot can notify about
                                server activities
                            </span>
                        </div>
                        <div class="link_container">
                            <a
                                href="https://www.github.com/junaidrahim/downloadgator"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <i class="fab fa-github"></i> Have a look !
                            </a>
                        </div>
                    </div>
                </div>

                <br></br>
                <br></br>
            </div>
        </div>
    )
}
