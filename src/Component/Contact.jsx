import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    alert("✅ Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-400 text-sm" />,
      content: (
        <a
          href="mailto:eliasdugasa57@gmail.com"
          className="hover:text-blue-400 transition-colors duration-200 text-sm"
        >
          eliasdugasa57@gmail.com
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-400 text-sm" />,
      content: <span className="text-sm">Jimma, Oromia, Ethiopia</span>,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-lg" />,
      href: "https://github.com/elidugasa/",
      title: "GitHub",
    },
    {
      icon: <FaLinkedin className="text-lg" />,
      href: "https://linkedin.com/in/",
      title: "LinkedIn",
    },
    {
      icon: <FaXTwitter className="text-lg" />,
      href: "https://x.com/eliasdugasa57",
      title: "X (Twitter)",
    },
    {
      icon: <FaFacebook className="text-lg" />,
      href: "https://facebook.com/yourusername",
      title: "Facebook",
    },
  ];

  const formFields = [
    {
      label: "Full Name",
      type: "text",
      name: "name",
      placeholder: "Your Name",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "you@example.com",
      required: true,
    },
    {
      label: "Message",
      type: "textarea",
      name: "message",
      placeholder: "Write your message...",
      required: true,
      rows: 4,
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 bg-gray-900 text-white flex items-center justify-center px-4 sm:px-6"
    >
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-5 rounded-xl shadow-lg space-y-3"
        >
          <h3 className="text-lg font-semibold text-blue-400 mb-1 cursor-pointer">
            Send a Message
          </h3>

          {formFields.map((field) => (
            <div key={field.name}>
              <label className="block text-gray-300 mb-1 text-xs font-medium">
                {field.label}
                {field.required && <span className="text-red-400 ml-1">*</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={field.rows}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200 resize-none"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-2 text-sm bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-gray-800 mt:4 cursor-pointer"
          >
            Send Message
          </button>
        </form>
        {/* Contact Information Section */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Let's Work Together
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              I'm open to collaborations, freelance projects, and creative discussions. 
              Reach out through the form or connect with me on social platforms.
            </p>
          </div>

          <div className="space-y-2">
            {contactInfo.map((item, index) => (
              <p key={index} className="flex items-center gap-2">
                {item.icon}
                <span className="text-gray-300">{item.content}</span>
              </p>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="social-media flex gap-4 pt-4 mt:4!important ">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                title={social.title}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        
        
      </div>
    </section>
  );
}