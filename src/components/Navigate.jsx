import React from "react"
import searchImg from "../assets/fi_search.svg"
import briefcaseImg from "../assets/briefcase 1.svg"
import IndiaFlag from "../assets/IndiaFlag.svg"
const Navigate = () => {
  return (
    <div className="h-[90px] w-full py-5 flex justify-between px-[300px]">
      <div
        className="flex flex-row h-[50px] gap-8 lg:w-[826px]
      "
      >
        <div className="flex items-center mr-6">
          <img src={briefcaseImg} className="w-10 h-10" alt="MyJob logo" />
          <p className="font-semibold text-2xl ml-2">MyJob</p>
        </div>

        <div className="border border-slate-300 rounded lg:w-[668px] flex px-4 py-2 items-center">
          {/* Country Selector */}
          <div className="flex items-center gap-3">
            <img src={IndiaFlag} alt="India Flag" className="w-6 h-4" />
            <select
              name="countries"
              id="countries"
              aria-label="Select a country"
              className="w-[97px] text-sm font-medium"
            >
              <option value="India">India</option>
              <option value="Nigeria">Nigeria</option>
              <option value="United States">United States</option>
            </select>
          </div>

          {/* Divider */}
          <div className="bg-gray-300 h-8 w-[1px] mx-6"></div>

          {/* Search Input */}
          <div className="flex items-center gap-3 w-full">
            <img src={searchImg} alt="Search Icon" className="h-6 w-6" />
            <input
              type="text"
              placeholder="Job title, keyword, company"
              aria-label="Job search input"
              className="flex-grow text-base focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className=" flex gap-3">
        <button className="w-[101px] h-[48px] rounded-[3px] border-[1px] border-blue-200 text-blue-700">
          Sign In
        </button>
        <button className="w-[140px] h-[48px] rounded-[3px] bg-blue-800 text-white">
          Post A Jobs
        </button>
      </div>
    </div>
  )
}

export default Navigate
