import React, { useState } from "react";
import { motion } from "framer-motion";
import { Headset, Mail, MapPin } from "lucide-react";
import axiosInstance from "../../api/axios";
import PageTopHero from "../../components/PageTopHero";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [responseType, setResponseType] = useState(""); // 'success' or 'error'
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const mapLocation = "1111 South Bayshore Drive, Miami, FL, USA";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    setResponseType("");

    try {
      await axiosInstance.post("/contact", formData, {
        withCredentials: true,
      });

      setResponseMsg("Message sent successfully!");
      setResponseType("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      setResponseMsg("An error occurred. Please try again.");
      setResponseType("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClassName =
    "w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder-white/45 outline-none transition-all duration-200 focus:border-brand/60 focus:ring-2 focus:ring-brand/20";

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute -left-72 top-20 z-0 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-72 top-1/3 z-0 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-[140px]" />
      <div className="absolute theme-ambient-glow -right-80 -top-80 opacity-40 z-0" />

      <PageTopHero
        icon={Headset}
        subtitle="Contact Support"
        description="Questions, Technical Help & Account Assistance"
        badgeText="Typical response time: within 24 hours"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid items-stretch gap-6 lg:grid-cols-12"
        >
          <div className="lg:col-span-5 h-full rounded-2xl border border-brand/10 bg-brand/[0.04] p-5 sm:p-6 backdrop-blur-sm flex flex-col">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-brand" />
              <h2 className="text-lg font-semibold text-white">Office</h2>
            </div>

            <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-black/20 flex-1 min-h-[24rem] lg:min-h-0">
              <div className="h-full w-full">
                {googleMapsApiKey ? (
                  <iframe
                    className="h-full w-full border-0"
                    src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(
                      mapLocation,
                    )}&zoom=15`}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PeakProfit Miami Office Map"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center p-4 text-center text-sm text-white/70">
                    Map preview unavailable. Configure
                    `VITE_GOOGLE_MAPS_API_KEY`.
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2 text-sm text-white/75">
              <p className="font-medium text-white/90">{mapLocation}</p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand" />
                <a
                  href="mailto:support@peakprofitfunding.com"
                  className="text-brand-100 hover:text-brand underline underline-offset-2"
                >
                  support@peakprofitfunding.com
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-full rounded-2xl border border-brand/10 bg-brand/[0.04] p-5 sm:p-7 backdrop-blur-sm">
            <h2 className="mb-4 text-xl sm:text-2xl font-semibold text-white">
              Send a message
            </h2>

            {responseMsg && (
              <div
                className={`mb-5 rounded-xl border px-4 py-3 text-sm text-center ${
                  responseType === "success"
                    ? "border-emerald-300/30 bg-emerald-400/10 text-emerald-100"
                    : "border-rose-300/30 bg-rose-400/10 text-rose-100"
                }`}
              >
                {responseMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-white/85"
                >
                  Name <span className="text-rose-300">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-white/85"
                >
                  Email <span className="text-rose-300">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-white/85"
                >
                  Subject <span className="text-rose-300">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your Message Subject"
                  required
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-white/85"
                >
                  Your Message <span className="text-rose-300">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message Here"
                  required
                  rows="5"
                  className={inputClassName}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className={`inline-flex min-w-40 cursor-pointer items-center justify-center rounded-xl border border-brand-400/30 bg-brand-400/90 px-8 py-3 font-semibold text-[#130025] transition-all duration-300 hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60 ${
                    loading ? "animate-pulse" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 animate-spin text-[#130025]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
