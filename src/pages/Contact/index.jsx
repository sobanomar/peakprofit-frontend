import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would handle the form submission
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
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
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
