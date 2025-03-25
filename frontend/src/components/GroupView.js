import ExpenseList from "./ExpenseList";

const test = [
  {
    expenseOwner: "Aayush",
    expenseName: "Groceries",
    expenseAmount: 150,
    expenseDate: "2025-03-20",
  },
  {
    expenseOwner: "Priya",
    expenseName: "Electricity Bill",
    expenseAmount: 275,
    expenseDate: "2025-03-18",
  },
  {
    expenseOwner: "Rohan",
    expenseName: "Internet",
    expenseAmount: 999,
    expenseDate: "2025-03-15",
  },
  {
    expenseOwner: "Meera",
    expenseName: "Gas",
    expenseAmount: 430,
    expenseDate: "2025-03-12",
  },
  {
    expenseOwner: "Vikram",
    expenseName: "Coffee",
    expenseAmount: 250,
    expenseDate: "2025-03-22",
  },
  {
    expenseOwner: "Ananya",
    expenseName: "Movie",
    expenseAmount: 120,
    expenseDate: "2025-03-10",
  },
  {
    expenseOwner: "Siddharth",
    expenseName: "Dinner",
    expenseAmount: 600,
    expenseDate: "2025-03-21",
  },
  {
    expenseOwner: "Neha",
    expenseName: "Gym",
    expenseAmount: 250,
    expenseDate: "2025-03-05",
  },
  {
    expenseOwner: "Karan",
    expenseName: "Vacation Savings",
    expenseAmount: 3000,
    expenseDate: "2025-03-01",
  },
  {
    expenseOwner: "Ishita",
    expenseName: "Car Loan",
    expenseAmount: 2200,
    expenseDate: "2025-03-07",
  },
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
