import { useEffect, useState } from "react";
import { fetchGroupExpenses } from "../redux/actions/expense";
import Expense from "./Expense";
import { useSelector, useDispatch } from "react-redux";
import ExpenseModal from "./ExpenseModal";

const formatAndSortExpenses = (expenses) => {
  // Helper function to format date
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // First, map through expenses to format the date
  const formattedExpenses = expenses?.map((expense) => ({
    ...expense,
    expenseDateFormatted: formatDate(expense.expenseDate),
  }));

  // Then, sort them based on the original ISO date
  formattedExpenses?.sort(
    (a, b) => new Date(b.expenseDate) - new Date(a.expenseDate)
  );

  return formattedExpenses;
};
export default function ExpenseList({ groupId }) {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroupExpenses(groupId));
  }, [dispatch, groupId]);
  const groupExpenses = useSelector((state) => state.expense.groupExpenses);

  // Calculate total sum
  const totalAmount = groupExpenses?.reduce(
    (sum, expense) => sum + expense.expenseAmount,
    0
  );

  const groupExpensesData = formatAndSortExpenses(groupExpenses);
  function handleAdd() {
    setShowModal(true);
  }
  return (
    <>
      <div className="max-w-3xl w-full mx-auto bg-gray-700 p-4 rounded-lg shadow-xl">
        <h3 className="text-2xl font-bold mb-2 text-center">Expense List</h3>
        {/* Total Amount Section */}
        <div className="mt-3 mx-auto mb-2 p-2 bg-gray-200 text-black rounded-md shadow-sm flex justify-between items-center text-lg font-semibold w-40">
          <div>Total</div>
          <div className="text-red-600 text-xl">₹{totalAmount}</div>
        </div>
        {/* Scrollable List Container */}
        <div className="h-[350px] overflow-y-auto border border-gray-300 rounded-lg p-3 space-y-6">
          {groupExpensesData?.length > 0 ? (
            groupExpensesData.map((expense, index) => (
              <Expense expense={expense} key={index} />
            ))
          ) : (
            <p className="text-gray-500 text-xl text-center">
              No expenses added.
            </p>
          )}
        </div>
        <button
          className="mt-3 mx-auto mb-2 p-1 bg-red-500 text-white rounded-md shadow-sm flex justify-evenly items-center text-lg font-semibold w-40 hover:scale-110"
          onClick={handleAdd}
        >
          <p>Add Expense</p>
          <p className="text-white text-2xl">+</p>
        </button>
      </div>
      <ExpenseModal
        showModal={showModal}
        setShowModal={setShowModal}
        groupId={groupId}
      />
    </>
  );
}
