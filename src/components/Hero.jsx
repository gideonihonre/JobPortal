import React from "react"
import illustrationImg from "../assets/Illustration.svg"
import searchImg from "../assets/fi_search.svg"
import briefcaseImg from "../assets/briefcase.svg"
import candidateImg from "../assets/Candidates.svg"
import companiesImg from "../assets/Companies.svg"
const Hero = () => {
  return (
    <section className="w-full bg-lightGray py-10">
      <div className="flex mx-[300px] pt-[109px]">
        {/* Info Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <div className="">
            <p className="text-4xl font-semibold">
              Find a job that suits your interest & skills.
            </p>
            <p>
              {" "}
              <p className="text-base mt-10">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
              </p>
            </p>
          </div>
          <div className="gap-6 flex flex-col">
            <div className="mt-10 rounded-md bg-white h-20 flex items-center justify-between">
              <div className="ml-3 my-3 flex">
                <img src={searchImg} />
                <input
                  type="text"
                  className="outline-none ml-2"
                  placeholder="Job title, Keyword..."
                />
              </div>
              <button className="bg-darkBlue rounded-[4px] m-3 py-4 px-8 text-white font-semibold">
                Find Job
              </button>
            </div>
            <p className="text-base">
              Suggestion: Designer, Programing, Digital Marketing, Video,
              Animation.
            </p>
          </div>
        </div>

        {/* Illustration */}
        <div className="mt-10 ml-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src={illustrationImg}
            alt="Person on a laptop"
            className="w-[492px] h-[382px] object-contain"
          />
        </div>
      </div>
      <div className="px-[300px] lg:h-[112px] w-full mt-[100px] flex justify-between">
        <div className="bg-white h-full w-[250px] flex items-center gap-5 p-5 rounded-lg">
          <img src={briefcaseImg} alt="briefcase icon" />
          <div className="flex flex-col">
            <p className="font-semibold text-xl">175,324</p>
            <p className="font-extralight text-sm">Live Job</p>
          </div>
        </div>
        <div className="bg-white h-full w-[250px] flex items-center gap-5 p-5 rounded-lg">
          <img src={companiesImg} alt="briefcase icon" />
          <div className="flex flex-col">
            <p className="font-semibold text-xl">97,354</p>
            <p className="font-extralight text-sm">Companies</p>
          </div>
        </div>
        <div className="bg-white h-full w-[250px] flex items-center gap-5 p-5 rounded-lg">
          <img src={candidateImg} alt="briefcase icon" />
          <div className="flex flex-col">
            <p className="font-semibold text-xl">3,847,154</p>
            <p className="font-extralight text-sm">Candidates</p>
          </div>
        </div>
        <div className="bg-white h-full w-[250px] flex items-center gap-5 p-5 rounded-lg">
          <img src={briefcaseImg} alt="briefcase icon" />
          <div className="flex flex-col">
            <p className="font-semibold text-xl">7,532</p>
            <p className="font-extralight text-sm">New Jobs</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
