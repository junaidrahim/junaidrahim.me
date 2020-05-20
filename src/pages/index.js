import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/seo"

import Home from "../components/home/Home"
import AboutMe from "../components/about-me/AboutMe"
import Technologies from "../components/technologies/Technologies"
import Projects from "../components/projects/Projects"
import Blog from "../components/blog/Blog"
import Contact from '../components/contact/Contact'

import "./index.css"

const IndexPage = () => (
    <div>
        <Helmet>
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
                integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
                crossorigin="anonymous"
            ></link>
            <link
                href="https://fonts.googleapis.com/css?family=Caveat|Nunito+Sans:200,300,400,700,800,900"
                rel="stylesheet"
            ></link>
        </Helmet>

        <SEO title="Junaid Rahim" />
        
        <Home></Home>
        <AboutMe></AboutMe>
        <Technologies></Technologies>
        <Projects></Projects>
        <Blog></Blog>
        <Contact></Contact>
    </div>
)

export default IndexPage
