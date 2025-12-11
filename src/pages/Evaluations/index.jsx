import React, { useEffect, useState } from "react";
import ChallengeSelector from "./ChallengeSelector";
import AccountSizeSelector from "./AccountSizeSelector";
import SummaryCard from "./SummaryCard";
import AddOnsSelector from "./AddOnsSelector";
import BillingDetails from "./BillingDetails";
import OrderSummary from "./OrderSummary";
import { useNavigate } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner";
import axiosInstance from "../../api/axios";

const CheckoutPage = () => {
  const [challenges, setChallenges] = useState([]);
  const [loadingChallenges, setLoadingChallenges] = useState(true);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        setLoadingChallenges(true);
        const res = await axiosInstance.get("/challenge/challenges");
        const data = res.data.result.data;
        setChallenges(data || []);
        if (data.length > 0) setSelectedChallenge(data[0]);
      } catch (err) {
        console.error(err);
        // toast.error("Failed to load challenges");
      } finally {
        setLoadingChallenges(false);
      }
    };
    fetchChallenges();
  }, []);

  const onContinue = async () => {
    if (!selectedChallenge) {
      toast.error("Please select a challenge");
      return;
    }

    window.location.href =
      import.meta.env.VITE_DASHBOARD_URL +
      "/signup?challengeId=" +
      selectedChallenge._id;
  };

  if (loadingChallenges) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!challenges || challenges.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
          No Challenges Available
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2 max-w-sm">
          There are currently no challenges available. Please check back later.
        </p>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="pt-12 text-black dark:text-white">
      <div className="text-center mt-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold">
          Select Your Challenge
        </h1>
        <p className="text-base md:text-lg px-2 lg:text-xl mt-2">
          Fill-up all the information and get funded.
        </p>
      </div>

      <div className="flex justify-center items-start mt-6 gap-8">
        <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] flex flex-col lg:flex-row gap-8">
          {/* Challenge List */}
          <div className="bg-white dark:border-white/[0.05] dark:bg-white/[0.03] shadow-lg border border-gray-200 p-8 rounded-2xl h-fit lg:w-2/3">
            <label className="flex text-xl pb-2 font-semibold items-center gap-2 mb-4">
              Select Account <span className="text-red-600">*</span>
            </label>

            <div className="flex flex-col gap-3 h-76 overflow-y-auto pr-2">
              {challenges.map((challenge) => {
                const isSelected = selectedChallenge?._id === challenge._id;

                return (
                  <button
                    key={challenge._id}
                    onClick={() => setSelectedChallenge(challenge)}
                    className={`w-full flex justify-between items-center p-4 border rounded-lg cursor-pointer transition-all ${
                      isSelected
                        ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20"
                        : "border-gray-300 bg-gray-100 dark:border-neutral-600 dark:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {challenge.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Account Size: ${challenge.accountSize.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800 dark:text-white/90">
                      ${challenge.cost.toLocaleString()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Order Summary and Checkout */}
          <OrderSummary
            isOpen={isSummaryOpen}
            toggleOpen={() => setIsSummaryOpen((prev) => !prev)}
            selectedName={selectedChallenge?.name || ""}
            accountSize={selectedChallenge?.accountSize || 0}
            cost={selectedChallenge?.cost || 0}
            isDisabled={!selectedChallenge}
            loading={checkoutLoading}
            onContinue={onContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
