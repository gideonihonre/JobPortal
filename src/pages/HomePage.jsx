import React from "react"
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Vacancies from "../components/Vacancies"
import JobPilot from "../components/JobPilot"
const HomePage = () => {
  return (
    <div className="w-full">
      <Navigation />
      <Hero />
      <Vacancies />
      <JobPilot />
    </div>
  )
}

export default HomePage
