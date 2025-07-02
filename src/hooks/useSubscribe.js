import { useState } from "react";
import axios from "../api/axios";

const useSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const subscribe = async (email) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axios.post("/api/subscription/subscribe", { email });
      setResponse(res.data.message);
      return { success: true, message: res.data.message };
    } catch (err) {
      const message = err?.response?.data?.message || "Something went wrong.";
      setError(message);
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  return {
    subscribe,
    loading,
    response,
    error,
  };
};

export default useSubscribe;
