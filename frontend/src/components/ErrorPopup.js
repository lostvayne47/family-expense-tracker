import { useEffect, useState } from "react";
import { MdError } from "react-icons/md";

export default function ErrorPopup({ showPopup, message }) {
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    setShowError(showPopup);
    if (showPopup) {
      setTimeout(() => setShowError(false), 3000); // Auto-hide after 3 seconds
    }
  }, [showPopup]);

  return (
    showError && (
      <div className="fixed z-[9999] bottom-4 right-4 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2">
        <MdError size={24} />
        <span>{message}</span>
        <button
          className="ml-3 text-white hover:text-gray-200"
          onClick={() => setShowError(false)}
        >
          ✖
        </button>
      </div>
    )
  );
}
