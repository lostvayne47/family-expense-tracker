import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

export default function GroupView({ showModal, setShowModal, groupData }) {
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 z-50"
          onClick={() => setShowModal(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-75 transition-transform transform scale-95 animate-fadeIn"
            style={{
              maxHeight: "100vh",
              overflow: "auto",
            }}
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{groupData?.groupName}</h2>
              <h2 className="text-xl font-semibold">
                Members: {groupData?.groupMembers?.length}
              </h2>
            </div>

            {/* Expense List & Chart - Wraps on Small Screens */}
            <div className="mt-2 bg-black flex flex-wrap">
              <div className="w-full sm:w-1/2 p-2">
                <ExpenseList groupId={groupData._id} />
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <ExpenseChart groupId={groupData._id} />
              </div>
            </div>

            {/* Close Modal Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
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
