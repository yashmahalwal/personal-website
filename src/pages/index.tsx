import React, { useState } from "react"
import { PageProps } from "gatsby"
import "../components/layout.css"
import "../components/overrides.css"
import Projects from "../components/Projects"
import { Helmet } from "react-helmet"
import Contact from "../components/Contact"
import About from "../components/About"
import Experience from "../components/Experience"
import Hero from "../components/Hero"
import clsx from "clsx"

export type ProjectNames = "Megatreopuz" | "Nirikshak"

const Index: React.FC<PageProps> = () => {
  const [isLoading, setLoading] = React.useState(true)
  return (
    <>
      <main>
        <Helmet>
          <title>Yash Mahalwal</title>
        </Helmet>
        <h1 className="hidden">Yash Mahalwal</h1>
        <Hero onLoad={() => setLoading(false)} />
        <div className={clsx(isLoading && "hidden-all")}>
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  )
}

export default Index
