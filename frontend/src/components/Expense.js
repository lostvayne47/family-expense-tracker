import React, { useState } from "react";
import { MdDateRange } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/actions/expense";
import ExpenseModal from "./ExpenseModal";

export default function Expense({ expense }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  function handleDelete() {
    dispatch(deleteExpense(expense));
  }
  function handleEdit() {
    setShowModal(true);
  }
  return (
    <>
      <div>
        <div className="flex justify-end justify-between gap-3 my-1 items-center">
          <FaEdit
            className="p-1 hover:scale-125 hover:text-green-400  cursor-pointer"
            size={30}
            onClick={handleEdit}
          />
          <div className="p-3 w-full bg-gray-100 text-black rounded-lg shadow-md flex flex-wrap justify-between items-center text-l hover:bg-cyan-200">
            <div className="font-semibold w-full md:w-1/4 flex items-center gap-2">
              <MdDateRange size={24} />
              <p>{expense.expenseDateFormatted}</p>
            </div>

            <div className="font-semibold w-full md:w-1/4 flex items-center gap-2">
              <IoPerson size={24} />
              <p>{expense.expenseOwner}</p>
            </div>

            <div className="font-semibold w-full md:w-1/4 flex items-center gap-2">
              <MdOutlineDescription size={24} />
              <p>{expense.expenseName}</p>
            </div>

            <div className="font-semibold w-full md:w-1/4 flex items-center gap-2 text-xl">
              <RiMoneyRupeeCircleFill size={24} color="black" />
              <p>{expense.expenseAmount}</p>
            </div>
          </div>
          <MdDeleteForever
            className="hover:scale-125 hover:text-red-400   cursor-pointer"
            size={30}
            onClick={handleDelete}
          />
        </div>
      </div>
      <ExpenseModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={"Edit Details"}
        expenseItem={expense}
      />
    </>
  );
}
