import React, { useEffect } from "react"

import "./blog.css"

// TODO Add recent Posts logic

const getDate = date => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "Spetempber",
        "October",
        "November",
        "December",
    ]

    let d = date.split(" ")[0].split("-")
    let month = months[parseInt(d[1]) - 1]

    let day

    if (d[2] == "2") {
        day = "2nd"
    } else if (d[2] == "3") {
        day = "3rd"
    } else {
        day = d[2] + "th"
    }

    return `${day} ${month} ${d[0]}`
}

export default function Blog() {
    useEffect(() => {
        fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40junaidrahim"
        )
            .then(data => data.json())
            .then(data => {
                const posts = data["items"]

                const cardCSS =
                    "border-radius: 0.5rem; padding: 1rem; margin-top: 2rem; background-color: white; box-shadow: 0 0 5px rgba(0,0,0,.03), 0 5px 22px -8px rgba(0,0,0,.1); z-index: 2;"
                const cardLinkCSS =
                    "font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: 1.7rem; color: black; text-decoration: none; margin: 0rem; padding: 0rem;"
                const cardpCSS =
                    "font-family: 'Nunito Sans', sans-serif; font-weight: 300; font-size: 1rem; margin: 0rem; padding: 0rem; margin-bottom: 0.9rem; margin-top: 0.2rem;"

                for (var i = 0; i < 3; i++) {
                    const title = posts[i]["title"]
                    const link = posts[i]["link"]
                    const date = getDate(posts[i]["pubDate"])

                    var card_string = `
                <div class="card" style="${cardCSS}">
                        <a style="${cardLinkCSS}" href="${link}">${title}</a>
                        <p style="${cardpCSS}" >Published ${date}</p>
                        <i class="fab fa-medium-m"></i>
                </div>
                `

                    document.getElementById(
                        "recent_posts_container_id"
                    ).innerHTML += card_string
                }
            })
    })

    return (
        <div>
            <div id="my_blog" class="blog_container">
                <div class="blog_intro_container">
                    <h1>My Blog</h1>

                    <p class="quote">
                        "There is no greater agony than bearing an untold story
                        inside you."<br></br> ― Maya Angelou
                    </p>
                    <br></br>
                    <p class="blog_intro">
                        I mostly write about Tech, Programming, Open Source and
                        other stuff that excites me. <br></br> Come have a look
                        on how I see this world :-)
                    </p>

                    <a
                        href="https://medium.com/@junaidrahim"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit My Medium
                    </a>
                    <br></br>
                    <br></br>
                </div>

                <div class="recent_posts_container">
                    <div class="recent_posts_container__bg"></div>
                    <br></br>
                    <br></br>
                    <h1>Recent Posts</h1>
                    <br></br>
                    <div
                        id="recent_posts_container_id"
                        class="posts_container"
                    ></div>
                </div>
            </div>
        </div>
    )
}
