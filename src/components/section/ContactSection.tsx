import React, { useState } from "react";

import Button from "@/components/ui/Button";

import { CONTACT_INFO } from "@/constants";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            {"Let's Create Amazing User Experiences"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {
              "I'm always excited to work on new front-end projects and collaborate with design teams. Let's discuss how I can help bring your user interface designs to life."
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
              aria-label="Contact form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  {"Name "}
                  <span aria-label="required" className="text-red-500">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  placeholder={"Your full name"}
                  required
                  aria-required="true"
                  aria-describedby="name-error"
                />
                <div id="name-error" className="sr-only" aria-live="polite">
                  {!formData.name && submitStatus === "error"
                    ? "Name is required"
                    : ""}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  {"Email "}
                  <span aria-label="required" className="text-red-500">
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                  aria-describedby="email-error"
                />
                <div id="email-error" className="sr-only" aria-live="polite">
                  {!formData.email && submitStatus === "error"
                    ? "Email is required"
                    : ""}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  {"Message "}
                  <span aria-label="required" className="text-red-500">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  required
                  aria-required="true"
                  aria-describedby="message-error"
                ></textarea>
                <div id="message-error" className="sr-only" aria-live="polite">
                  {!formData.message && submitStatus === "error"
                    ? "Message is required"
                    : ""}
                </div>
              </div>

              {submitStatus === "success" && (
                <div
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                  role="status"
                  aria-live="polite"
                >
                  {"Thank you for your message! I'll get back to you soon."}
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                  role="alert"
                  aria-live="assertive"
                >
                  {"There was an error sending your message. Please try again."}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isSubmitting}
                aria-describedby="submit-description"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              <div id="submit-description" className="sr-only">
                Send your contact form message to tyecode
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {"Get in Touch"}
              </h3>

              <address className="space-y-4 not-italic">
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-gray-600 hover:text-gray-900 focus:outline-none"
                      aria-label={`Send email to ${CONTACT_INFO.email}`}
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">{CONTACT_INFO.location}</div>
                  </div>
                </div>
              </address>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">
                {"Availability"}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {
                  "Currently available for front-end development projects and UI implementation opportunities. I typically respond to inquiries within 24 hours."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
