import React from "react"
import Particles from "react-tsparticles"
import particlesOptions from "../particles.json"
import "../styles/index.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { loadFull } from "tsparticles";
import Seo from "../components/Seo"
import { Container } from "../components/Container"
import { ContactForm } from "../components/ContactForm"

library.add(fab)

export default function Home() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Container>
      
        <Seo Sitetitle="Home" />
        <Particles init={particlesInit} options={particlesOptions} />
        <div className="flex-container">
          <div className="row">
            <h1 className="flex-item">schmiegelt.it</h1>
            <h2 className="flex-item">Family Website</h2>
            
          </div>
        </div>
        <ContactForm />
    </Container>
  )
}
