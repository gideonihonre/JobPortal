import React from "react"
import createAccount from "../assets/createAccount.svg"
import uploadCV from "../assets/uploadCV.svg"
import findJob from "../assets/jobSearch.svg"
import applyJob from "../assets/applyJob.svg"
import { useState } from "react"

const JobPilot = () => {
  const [clickedBox, setClickedBox] = useState(null)
  const handleBoxClick = (boxNumber) => {
    setClickedBox(boxNumber)
  }
  return (
    <div className="bg-lightGray px-12 lg:px-[300px] py-16 gap-12">
      <h2 className="font-inter text-[40px] text-center font-medium leading-[48px]  ">
        How jobpilot works
      </h2>
      <div className="my-4 flex justify-between gap-6">
        <div
          onClick={() => handleBoxClick(1)}
          className={`p-8 flex flex-col hover:bg-gray-50  rounded-lg shadow-sm text-center cursor-pointer  items-center min-h-[300px] flex-1 ${
            clickedBox === 1 ? "bg-gray-50" : "bg-lightgray"
          }`}
        >
          <img src={createAccount} alt="create account image" />
          <h3 className="text-lg font-semibold mb-2">Create account</h3>
          <p>Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
        </div>
        <div
          onClick={() => handleBoxClick(2)}
          className={`p-8 flex flex-col hover:bg-gray-50 rounded-lg shadow-sm text-center cursor-pointer items-center min-h-[300px] flex-1 ${
            clickedBox === 2 ? "bg-gray-50" : "bg-lightgray"
          }`}
        >
          <img src={uploadCV} alt="upload CV image" />
          <h3 className="text-lg font-semibold mb-2">Upload CV/Resume</h3>
          <p>
            Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales
          </p>
        </div>
        <div
          onClick={() => handleBoxClick(3)}
          className={`p-8 flex flex-col hover:bg-gray-50 rounded-lg shadow-sm text-center cursor-pointer items-center min-h-[300px] flex-1 ${
            clickedBox === 3 ? "bg-gray-50" : "bg-lightgray"
          }`}
        >
          <img src={findJob} alt="Find job image" />
          <h3 className="text-lg font-semibold mb-2">Find Suitable Job</h3>
          <p>Phasellus quis eleifend ex. Morbi nec fringilla nibh.</p>
        </div>
        <div
          onClick={() => handleBoxClick(4)}
          className={`p-8 flex flex-col hover:bg-gray-50 rounded-lg shadow-sm text-center cursor-pointer items-center min-h-[300px] flex-1 ${
            clickedBox === 4 ? "bg-gray-50" : "bg-lightgray"
          }`}
        >
          <img src={applyJob} alt="apply job image" />
          <h3 className="text-lg font-semibold mb-2">Apply job</h3>
          <p>
            Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales
            purus.
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobPilot
