import React from "react"
import { vacancies } from "../assets/assets"
const Vacancies = () => {
  return (
    <div className="bg-white py-[100px] px-[100px] lg:px-[300px]">
      <h2 className="text-4xl font-semibold mb-8">Most Popular Vacancies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {vacancies.map((job, index) => (
          <div key={index} className="text-center">
            <p
              className={`text-lg font-medium ${
                job.isHighlighted ? "text-blue-600 underline" : "text-gray-900"
              }`}
            >
              {job.title}
            </p>
            <p className="text-sm text-gray-500">
              {job.positions} Open Positions
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vacancies
