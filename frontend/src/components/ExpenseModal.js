import { useDispatch } from "react-redux";
import { addExpense } from "../redux/actions/expense";
import { useState } from "react";

export default function ExpenseModal({ showModal, setShowModal, groupId }) {
  const dispatch = useDispatch();
  const [expenseData, setExpenseData] = useState({
    expenseName: "",
    expenseAmount: 0,
    expenseGroupId: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    // dispatch(addExpense(expenseData));
  }
  function handleChange(event) {
    setExpenseData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 z-51">
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2 className="text-xl font-semibold text-black">Add Expense</h2>

            <form className="text-black">
              <label className="mt-2" htmlFor="expenseName">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                className="p-1 border rounded block w-100"
                type="text"
                id="expenseName"
                name="expenseName"
                placeholder="Travel"
                autoCapitalize="on"
                onChange={handleChange}
                value={expenseData.expenseName}
                required
              />
              <label className="mt-2" htmlFor="expenseAmount">
                Amount <span className="text-red-500">*</span>
              </label>
              <input
                className="p-1 border rounded block w-100"
                type="number"
                id="expenseAmount"
                name="expenseAmount"
                placeholder="1000"
                onChange={handleChange}
                value={expenseData.expenseName}
                required
              />
            </form>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 mx-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Add
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
