import { useEffect } from "react";
import { fetchGroupExpenses } from "../redux/actions/expense";
import Expense from "./Expense";
import { useSelector, useDispatch } from "react-redux";

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
    (a, b) => new Date(a.expenseDate) - new Date(b.expenseDate)
  );

  return formattedExpenses;
};
export default function ExpenseList({ groupId }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroupExpenses(groupId));
  }, [groupId]);
  const groupExpenses = useSelector((state) => state.expense.groupExpenses);

  // Calculate total sum
  const totalAmount = groupExpenses?.reduce(
    (sum, expense) => sum + expense.expenseAmount,
    0
  );

  const groupExpensesData = formatAndSortExpenses(groupExpenses);
  return (
    <div className="max-w-3xl w-full mx-auto bg-gray-700 p-4 rounded-lg shadow-xl">
      <h3 className="text-2xl font-bold mb-4 text-center">Expense List</h3>
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

      {/* Total Amount Section */}
      <div className="mt-6 p-3 bg-gray-200 text-black rounded-lg shadow-md flex justify-between items-center text-xl font-bold">
        <span>Total</span>
        <span className="text-red-600 text-2xl">₹{totalAmount}</span>
      </div>
    </div>
  );
}
