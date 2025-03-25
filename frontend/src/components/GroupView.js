import { useState } from "react";

export default function GroupView() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Open Modal Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 text-white bg-blue-600 rounded-md"
      >
        Open Modal
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          {/* Modal Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold">Modal Title</h2>
            <p className="mt-2 text-gray-600">
              This is a sample modal in Tailwind.
            </p>

            {/* Close Modal Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-white bg-red-500 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
