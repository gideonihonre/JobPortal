import ViewAllButton from "./ViewAllButton"
import { categories } from "../assets/assets"
const PopularCategory = () => {
  return (
    <div className="bg-white py-[100px] px-[200px]">
      <div className="flex justify-between align-middle">
        <h2 className="font-inter text-[40px] text-left font-medium leading-[48px]  ">
          Popular Category
        </h2>
        <ViewAllButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 hover:">
        {categories.map((item, index) => (
          <div key={index} className="text-center flex items-center space-x-4">
            <img src={item.image} alt={item.title} />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-500 text-sm">
                {item.positions} Open Positions
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularCategory
