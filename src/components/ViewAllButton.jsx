import React from "react"
import rightArrow from "../assets/fi_arrow-right.svg"
const ViewAllButton = () => {
  return (
    <a
      href=""
      className="text-darkBlue py-3 px-6 border border-paleBlue flex justify-between"
    >
      View All
      <img src={rightArrow} alt="right arrow" />
    </a>
  )
}

export default ViewAllButton
