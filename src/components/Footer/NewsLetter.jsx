import React, { useState } from "react";
import useSubscribe from "../../hooks/useSubscribe";
import Modal from "../PrimaryModal"; // create a simple modal component

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalType, setModalType] = useState("");
  const { subscribe, loading } = useSubscribe();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await subscribe(email);

    setModalMsg(result.message);
    setModalType(result.success ? "success" : "error");
    setShowModal(true);
    if (result.success) setEmail("");
  };

  return (
    <div className="flex flex-col md:block">
      <h3 className="text-lg font-semibold mb-4 text-white">
        SIGN UP FOR EMAIL UPDATES
      </h3>
      <p className="text-sm text-[#888794] font-semibold mb-4">
        Sign up with your email address to receive news and updates
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-3 md:gap-0 max-w-md lg:max-w-lg md:justify-start md:bg-white md:py-1 md:px-1 md:rounded-full md:overflow-hidden"
      >
        <input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full md:flex-grow px-5 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-white rounded-full md:bg-transparent md:rounded-l-full md:rounded-r-none lg:w-[60%]"
        />
        <button
          type="submit"
          className="w-full md:w-auto bg-gradient-to-r from-brand-600 to-purple-600/60 text-white text-sm font-semibold px-6 py-3 rounded-full whitespace-nowrap lg:px-4 lg:text-xs"
          disabled={loading}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {showModal && (
        <Modal onClose={() => setShowModal(false)} type={modalType}>
          {modalMsg}
        </Modal>
      )}
    </div>
  );
};

export default NewsLetter;
