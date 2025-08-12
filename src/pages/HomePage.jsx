import React from "react"
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Vacancies from "../components/Vacancies"
import JobPilot from "../components/JobPilot"
import PopularCategory from "../components/PopularCategory"
const HomePage = () => {
  return (
    <div className="w-full">
      <Navigation />
      <Hero />
      <Vacancies />
      <JobPilot />
      <PopularCategory />
    </div>
  )
}

export default HomePage
