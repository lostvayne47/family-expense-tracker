import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

export default function GroupView({ showModal, setShowModal, groupData }) {
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 z-50 overflow-auto"
          onClick={() => setShowModal(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[75vh] overflow-y-auto transition-transform transform scale-95 animate-fadeIn"
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

            {/* Content Section with Scrollable Views */}
            <div className="mt-2 bg-black flex flex-wrap">
              <div className="w-full sm:w-1/2 p-2">
                <div className="max-h-60 overflow-y-auto p-2 bg-gray-900 rounded-md">
                  <ExpenseList groupId={groupData._id} />
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <div className="max-h-60 overflow-y-auto p-2 bg-gray-900 rounded-md">
                  <ExpenseChart groupId={groupData._id} />
                </div>
              </div>
            </div>

            {/* Close Button */}
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
