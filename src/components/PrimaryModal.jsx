import React, { useEffect, useRef } from "react";
import { CheckCircle, XCircle } from "lucide-react"; // or use react-icons

const Modal = ({ children, onClose, type = "success" }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const Icon = type === "success" ? CheckCircle : XCircle;
  const iconColor = type === "success" ? "text-green-400" : "text-red-500";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-[#1E0033] text-white rounded-2xl shadow-2xl p-6 max-w-lg w-full mx-4 animate-fade-in border border-purple-700/30"
      >
        <div className="flex flex-col items-center text-center">
          <Icon size={24} className={`mb-4 ${iconColor}`} />
          <p className="text-sm sm:text-base md:text-lg">{children}</p>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
