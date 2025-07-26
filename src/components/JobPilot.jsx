import React from "react"
import createAccount from "../assets/createAccount.svg"
const JobPilot = () => {
  return (
    <div className="bg-lightGray px-12 lg:px-[300px] py-16 gap-12">
      <p className="font-inter text-[40px] font-medium leading-[48px]  ">
        How jobpilot works
      </p>
      <div className="my-4">
        <div>
          <img src={createAccount} alt="create account image" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default JobPilot
