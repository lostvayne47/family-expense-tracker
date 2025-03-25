import ExpenseList from "./ExpenseList";

const test = [
  { name: "Groceries", amount: 150 },
  { name: "Electricity Bill", amount: 275 },
  { name: "Internet", amount: 999 },
  { name: "Gas", amount: 430 },
  { name: "Coffee", amount: 250 },
  { name: "Movie", amount: 120 },
  { name: "Dinner", amount: 600 },
  { name: "Gym", amount: 250 },
  { name: "Vacation Savings", amount: 3000 },
  { name: "Car Loan", amount: 2200 },
];
export default function GroupView({ showModal, setShowModal, groupData }) {
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 z-50"
          onClick={() => setShowModal(false)} // Close on overlay click
        >
          {/* Modal Content */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-75 transition-transform transform scale-95 animate-fadeIn"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="d-flex justify-content-between">
              <h2 className="text-xl font-semibold">{groupData?.groupName}</h2>
              <h2 className="text-xl font-semibold">
                Members: {groupData?.groupMembers?.length}
              </h2>
            </div>
            <div className="mt-2">
              {/* <ExpenseList expenses={groupData?.groupExpenses} /> */}
              <ExpenseList expenses={test} />
            </div>

            {/* Close Modal Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-white bg-red-500 rounded-md"
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
