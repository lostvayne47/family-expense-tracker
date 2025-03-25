import React from "react";
import { MdDateRange } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { PiMoneyFill } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function Expense({ expense }) {
  function handleDelete() {}
  function handleEdit() {}
  console.log(expense);
  return (
    <div>
      <div className="flex justify-end justify-between gap-3 my-1 ">
        <FaRegEdit
          className="hover:scale-125 hover:text-green-400 cursor-pointer"
          size={18}
          onClick={handleEdit}
        />
        <MdDeleteForever
          className="hover:scale-125 hover:text-red-400 cursor-pointer"
          size={18}
          onClick={handleDelete}
        />
      </div>
      <div className="p-3 bg-gray-100 text-black rounded-lg shadow-md flex flex-wrap justify-between items-center text-l hover:bg-cyan-300">
        <div className="font-semibold w-full md:w-1/4 flex items-center gap-2">
          <MdDateRange size={30} />
          <p>{expense.expenseDateFormatted}</p>
        </div>

        <div className="font-semibold w-full md:w-1/4 flex items-center gap-2">
          <IoPerson size={30} />
          <p>{expense.expenseOwner}</p>
        </div>

        <div className="font-semibold w-full md:w-1/4 flex items-center gap-2">
          <MdOutlineDescription size={30} />
          <p>{expense.expenseName}</p>
        </div>

        <div className="font-semibold w-full md:w-1/4 flex items-center gap-2 text-xl text-red-600">
          <PiMoneyFill size={30} color="black" />
          <p>₹{expense.expenseAmount}</p>
        </div>
      </div>
    </div>
  );
}
