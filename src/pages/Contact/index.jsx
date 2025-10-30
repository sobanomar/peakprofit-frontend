import React, { useState } from "react";
import axiosInstance from "../../api/axios";

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
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

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
      const res = await axiosInstance.post(
        "/contact",
        formData,
        { withCredentials: true } // ✅ Important for cookies / CORS credentials
      );

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

  // Replace with your actual Google Maps API key

  const mapLocation = "1111 South Bayshore Drive, Miami, FL, USA";

  return (
    <div className="text-white flex flex-col">
      <div className="container mx-auto px-4 pt-4 md:pt-20 flex items-center flex-col">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row bg-gray-900 w-full lg:w-[80%] rounded-xl">
          {/* Map Section */}
          <div className="w-full md:w-5/12 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-96 md:h-full w-full">
              {/* Google Map Integration */}
              <iframe
                className="w-full h-full border-0"
                src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodeURIComponent(
                  mapLocation
                )}&zoom=15`}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dubai Silicon Oasis Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-7/12 p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4">Send a message</h2>

            {responseMsg && (
              <div
                className={`mb-4 p-3 rounded-lg text-center ${
                  responseType === "success"
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {responseMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2">
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Your Message Subject"
                  required
                  className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Your Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message Here"
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className={`bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-lg transition duration-300 flex items-center justify-center ${
                    loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
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
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        ></path>
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
        </div>
      </div>
    </div>
  );
}
