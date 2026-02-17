import React, { useState } from "react";
import { X, Send, Loader2 } from "lucide-react";

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY || "";

export default function ContactForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          onClose();
          setStatus({ submitting: false, submitted: false, error: null });
        }, 3000);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: "Failed to send message. Please try again later.",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl p-8 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Close"
        >
          <X size={24} className="text-gray-700" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-gray-600">
            Fill out the form below and I&apos;ll get back to you within 24
            hours.
          </p>
        </div>

        {/* Success message */}
        {status.submitted && (
          <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-800">
            <p className="font-medium">✓ Message sent successfully!</p>
            <p className="text-sm mt-1">I&apos;ll get back to you soon.</p>
          </div>
        )}

        {/* Error message */}
        {status.error && (
          <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-800">
            <p className="font-medium">✕ {status.error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-800">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-600 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-800">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-600 transition"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-600 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-600 transition resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status.submitting}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-white bg-blue-600 hover:bg-blue-700 transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {status.submitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
