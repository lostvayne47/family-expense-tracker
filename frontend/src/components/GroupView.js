export default function GroupView({ showModal, setShowModal }) {
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 z-50"
          onClick={() => setShowModal(false)} // Close on overlay click
        >
          {/* Modal Content */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96 transition-transform transform scale-95 animate-fadeIn"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-xl font-semibold">Modal Title</h2>
            <p className="mt-2 text-gray-600">
              This is a sample modal in Tailwind.
            </p>

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
