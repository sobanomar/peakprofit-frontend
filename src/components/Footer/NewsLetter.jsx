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
        className="md:justify-start bg-white py-1 px-1 rounded-full overflow-hidden flex max-w-md lg:max-w-lg"
      >
        <input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow px-5 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none rounded-l-full lg:w-[60%]"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-[#D56BFF] text-white text-sm font-semibold px-6 py-3 rounded-full lg:px-4 lg:text-xs"
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
