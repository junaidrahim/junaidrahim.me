import React from "react"

import "./technologies.css"

export default function Technologies() {
    return (
        <div>
            <div id="skills" className="technologies_container">
                <div className="part_intro">
                    <h1>Stuff that excites me</h1>
                    <br></br>
                    <div className="interests_container">
                        <div
							className="card"
							style={{ borderBottom: '0.3rem solid #004d40' }}
                        >
                            <h2>Machine Learning Engineering</h2>
                            <br></br>
                            <i className="fas fa-database"></i>
                        </div>

                        <div
							className="card"
							style={{ borderBottom: '0.3rem solid #e53935' }}
                        >
                            <h2>Algorithms</h2>
                            <br></br>
                            <br></br>
                            <i className="fas fa-microchip"></i>
                        </div>

                        <div
							className="card"
							style={{ borderBottom: '0.3rem solid #01597b' }}
                        >
                            <h2>Web Development</h2>
                            <br></br>
                            <i
								style={{ marginLeft: '0rem' }}
                                className="fab fa-html5"
                            ></i>
                            <i
                                style={{ marginLeft: "0.7rem" }}
                                className="fab fa-css3-alt"
                            ></i>
                            <i
                                style={{ marginLeft: "0.7rem" }}
                                className="fab fa-js"
                            ></i>
                        </div>

                        <div
							className="card"
							style={{ borderBottom: '0.3rem solid #2e7d32' }}
                        >
                            <h2>
                                Linux <br></br> Kernel
                            </h2>
                            <br></br>
                            <i
                                style={{ fontSize: '2.8rem'}}
                                className="fab fa-linux"
                            ></i>
                        </div>

                        <div
							className="card"
							style={{ borderBottom: '0.3rem solid #ef6c00' }}
                        >
                            <h2>Technical Writing</h2>
                            <br></br>
                            <i className="fas fa-pencil-ruler"></i>
                        </div>

                        <div
							className="card"
							style={{ borderBottom: '0.3rem solid #304ffe' }}
                        >
                            <h2>Open Source Software</h2>
                            <br></br>
                            <i
                                style={{ fontSize: '2.8rem' }}
                                className="fab fa-osi"
                            ></i>
                        </div>
                    </div>
                </div>

                <div className="part_graph">
                    <h1>My Skills</h1>

                    <div className="skill_container">
                        <div className="card">
                            <i className="fas fa-microchip"></i>
                            <br></br>
                            <h2>Languages</h2>
                            <ul>
                                <li>Python</li>
                                <li>C/C++</li>
                                <li>Go</li>
                                <li>Java</li>
                            </ul>
                        </div>

                        <div className="card">
                            <i className="fas fa-tablet-alt"></i>
                            <h2>Web Dev</h2>
                            <ul>
                                <li>React</li>
                                <li>HTML, CSS, Javascript</li>
                                <li>Bootstrap, Materialize CSS</li>
                                <li>Flask, Echo, NodeJS</li>
                                <li>MongoDB, Firebase</li>
                            </ul>
                        </div>

                        <div className="card">
                            <i className="fas fa-toolbox"></i>
                            <h2>Others</h2>
                            <ul>
                                <li>Linux</li>
                                <li>Git</li>
                                <li>Scrum</li>
                                <li>Basic Android Development</li>
                                <li>Unit Testing</li>
                            </ul>
                        </div>
                    </div>

                    <br></br>

                    <h1>I am also familiar with</h1>
                    <p style={{fontFamily: 'Nunito Sans, sans-serif', fontWeight: 400}}>
                        Tools by JetBrains, Digital Ocean, Heroku etc.
                    </p>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    )
}
