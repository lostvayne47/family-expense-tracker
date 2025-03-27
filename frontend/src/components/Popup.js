import { useEffect, useState } from "react";
import { MdError, MdClose, MdCheck } from "react-icons/md";

export default function Popup({ showSuccess, showError, message }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showSuccess || showError) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 3000); // Auto-hide after 3s
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [showSuccess, showError, message]);

  if (!isVisible) return null; // Hide if not visible

  return (
    <>
      {showError ? (
        <div
          className={`fixed z-[9999] bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 text-white ${"bg-red-500"}`}
        >
          <MdError size={24} />
          <span>{message}</span>
          <button
            className="ml-3 text-white hover:text-gray-300"
            onClick={() => setIsVisible(false)}
          >
            <MdClose size={20} />
          </button>
        </div>
      ) : (
        <div
          className={`fixed z-[9999] bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 text-white ${"bg-green-500"}`}
        >
          <MdCheck size={24} />
          <span>{message}</span>
          <button
            className="ml-3 text-white hover:text-gray-300"
            onClick={() => setIsVisible(false)}
          >
            <MdClose size={20} />
          </button>
        </div>
      )}
    </>
  );
}
