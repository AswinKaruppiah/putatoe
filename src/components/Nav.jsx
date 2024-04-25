import { IoIosNotifications } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

export default function Nav() {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="bg-green-300 relative text-green-500 w-full flex justify-between gap-5 items-center px-3 md:px-10 py-5">
      <h1 className="text-4xl">PUTATOE</h1>
      <input
        type="text"
        className="w-full rounded-full px-5 py-3 hidden md:block  lg:mx-11 focus:outline-none"
        placeholder="Seacrh"
      />
      <div className=" justify-between items-center hidden md:flex gap-5 md:gap-10">
        <MdOutlineShoppingCart size="1.8rem" />
        <TiMessages size="1.8rem" />
        <IoIosNotifications size="1.8rem" />

        <button className="border-2 px-4 py-1 rounded-md ">Login</button>
      </div>
      <div className="md:hidden flex flex-1  justify-end items-center">
        {toggle ? (
          <IoIosClose
            size="40px"
            onClick={() => settoggle(!toggle)}
            className="cursor-pointer"
          />
        ) : (
          <RiMenu2Fill
            size="30px"
            onClick={() => settoggle(!toggle)}
            className="cursor-pointer"
          />
        )}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } py-6 px-3 bg-green-600 fixed text-white  flex-col gap-9 top-0 left-0 w-[70%] h-screen z-50 rounded-r-xl `}
        >
          <input
            type="text"
            className="w-full px-2 h-12 focus:outline-none rounded-full"
            placeholder="Seacrh"
          />
          <button className="flex justify-start gap-1 items-center">
            <MdOutlineShoppingCart size="1.8rem" /> Cart
          </button>
          <button className="flex justify-start gap-1 items-center">
            <TiMessages size="1.8rem" />
            Message
          </button>
          <button className="flex justify-start gap-1 items-center">
            <IoIosNotifications size="1.8rem" /> Notification
          </button>
          <button className="border-2 px-4 py-1 rounded-md ">Login</button>
        </div>
      </div>
    </div>
  );
}
