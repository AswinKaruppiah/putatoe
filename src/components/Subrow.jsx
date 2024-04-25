/* eslint-disable react/prop-types */
import { BiCart } from "react-icons/bi";
import { IoMdStar } from "react-icons/io";

export default function Subrow({ data, category }) {
  return (
    <div className="border-2 p-2  min-w-48  border-gray-300">
      <img src={data.img} alt="img" className="h-32 w-44 object-contain" />
      <p className="text-gray-400">{category}</p>
      <h1>{data.name + " " + data.quantity + " " + data.unit}</h1>
      <div className="flex justify-start  items-center py-3">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <IoMdStar
              key={i}
              className="star"
              size={16}
              color={ratingValue <= data.reviews ? "#FFF455" : "#e4e5e9"}
            />
          );
        })}
      </div>
      <div className="flex justify-between  items-center">
        <p className="text-green-500">$ {data.price}</p>
        <button className="bg-green-200 flex justify-center gap-1 items-center text-green-500 px-5 py-1">
          <BiCart /> Add
        </button>
      </div>
    </div>
  );
}
