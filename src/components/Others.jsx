import { othersdetails } from "../assets/products.js";

export default function Others() {
  return (
    <div className="sm:px-10 py-8 ">
      <h1 className="text-4xl sm:text-5xl font-medium">More</h1>
      <div className="flex justify-center pt-4 items-center gap-5 flex-wrap">
        {othersdetails.map((item, i) => (
          <div
            key={i}
            className="border-2 cursor-pointer p-2 rounded-xl px-16 py-8 flex justify-center items-center flex-col gap-6  border-gray-300"
          >
            <img
              src={item.img}
              alt="img"
              className="h-20 w-24 object-contain"
            />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
