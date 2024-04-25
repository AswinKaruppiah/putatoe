import { products } from "../assets/products";

import Subrow from "./Subrow";

products;

export default function Row() {
  return (
    <div className="sm:px-10">
      {products.map((item, index) => (
        <div key={index} className="pt-10">
          <h1 className="text-4xl sm:text-5xl font-medium">{item.category}</h1>

          <div className="flex overflow-x-scroll overflow-y-hidden gap-3 py-5 row ml-5 sm:ml-14 mr-3  ">
            {item.items.map((items, index) => (
              <Subrow
                data={items}
                index={index}
                key={index}
                category={item.category}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
