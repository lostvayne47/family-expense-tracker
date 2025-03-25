export default function ExpenseList({ expenses }) {
  // Calculate total sum
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="max-w-3xl w-full mx-auto bg-white p-4 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-4 text-center text-black">
        Expense List
      </h2>
      {/* Scrollable List Container */}
      <div className="h-[350px] overflow-y-auto border border-gray-300 rounded-lg p-3 space-y-6">
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <div
              key={index}
              className="p-3 bg-gray-100 text-black rounded-lg shadow-md flex justify-between items-center text-xl"
            >
              <span className="font-semibold">{expense.name}</span>
              <span className="text-red-600 font-bold text-2xl">
                ₹{expense.amount}
              </span>
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
        <span className="text-red-600 text-2xl">₹{totalAmount}</span>
      </div>
    </div>
  );
}
