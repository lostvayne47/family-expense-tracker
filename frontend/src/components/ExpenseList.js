import { MdDateRange } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { PiMoneyFill } from "react-icons/pi";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }); // Output: "24 Mar 2025"
};

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
  const formattedExpenses = expenses.map((expense) => ({
    ...expense,
    expenseDateFormatted: formatDate(expense.expenseDate),
  }));

  // Then, sort them based on the original ISO date
  formattedExpenses.sort(
    (a, b) => new Date(a.expenseDate) - new Date(b.expenseDate)
  );

  return formattedExpenses;
};
export default function ExpenseList({ expenses }) {
  // Calculate total sum
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.expenseAmount,
    0
  );
  expenses = formatAndSortExpenses(expenses);
  return (
    <div className="max-w-3xl w-full mx-auto bg-white p-4 rounded-lg shadow-xl">
      <h3 className="text-2xl font-bold mb-4 text-center text-black">
        Expense List
      </h3>
      {/* Scrollable List Container */}
      <div className="h-[350px] overflow-y-auto border border-gray-300 rounded-lg p-3 space-y-6">
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <div
              key={index}
              className="p-3 bg-gray-100 text-black rounded-lg shadow-md flex flex-wrap justify-between items-center text-l"
            >
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
        <span className="text-red-600 text-xl">₹{totalAmount}</span>
      </div>
    </div>
  );
}
