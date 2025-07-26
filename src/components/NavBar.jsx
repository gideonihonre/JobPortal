import React from "react"
import PhoneImg from "../assets/PhoneCall.svg"
import UsFlag from "../assets/USFlag.svg"
const NavBar = () => {
  return (
    <div className="w-full h-[48px] flex justify-between items-center bg-lightGray px-[300px]">
      {/* Navigation Section */}
      <nav>
        <ul className="h-full flex flex-row gap-6">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Find Job</li>
          <li className="hover:text-blue-600 cursor-pointer">Employers</li>
          <li className="hover:text-blue-600 cursor-pointer">Candidates</li>
          <li className="hover:text-blue-600 cursor-pointer">Pricing Plans</li>
          <li className="hover:text-blue-600 cursor-pointer">
            Customer Supports
          </li>
        </ul>
      </nav>

      {/* Contact and Language Section */}
      <div className="flex items-center gap-4">
        <img src={PhoneImg} alt="Phone Icon" className="w-6 h-6" />
        <p className="text-sm font-medium">+1-202-555-0178</p>
        <img src={UsFlag} alt="US Flag" className="w-6 h-4" />
        <select
          name="languages"
          id="languages"
          className="bg-lightGray border-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          <option value="English">English</option>
        </select>
      </div>
    </div>
  )
}

export default NavBar
