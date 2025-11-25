// src/components/MyProfile.jsx
import React, { useState } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaJava, FaPhp } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

// IMPORT YOUR CERTIFICATE IMAGES
import cert1 from "../assets/MyImage/myUdemyCertificate.jpg";
import cert2 from "../assets/MyImage/cetificate.png";
import cert3 from "../assets/MyImage/html.png";

export default function MyProfile() {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    { name: "JavaScript", percent: 70, icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { 
  name: "C++", 
  percent: 70, 
  icon: <SiCplusplus className="text-blue-500 text-3xl" /> 
},
  {
  name: "Java",
  percent: 60,
  icon: <FaJava className="text-red-500 text-3xl" />
},
  {
  name: "PHP",
  percent: 65,
  icon: <SiPhp className="text-purple-500 text-3xl" />
},
    { name: "React", percent: 80, icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: "Next.js", percent: 65, icon: <SiNextdotjs className="text-white text-3xl" /> },
    { name: "Node.js", percent: 55, icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "Tailwind CSS", percent: 75, icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
    { name: "HTML5", percent: 90, icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS3", percent: 90, icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "Git/GitHub", percent: 80, icon: <FaGitAlt className="text-red-500 text-3xl" /> },
  ];

  const certificates = [
    { title: "Full-Stack Development Certificate", image: cert1 },
    { title: "Advanced JavaScript Certificate", image: cert2 },
    { title: "Tailwind Modern UI Certificate", image: cert3 },
  ];

  const education = [
    "Studying software engineering in Jimma inistitute of technology"
   
  ];

  return (
    <section id="profile" className="py-12 bg-gray-900 text-white px-4 sm:px-6">
      <div className="face max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-500 mb-10 text-center">
          My Profile
        </h2>

        {/* Tabs */}
       
        <div className="Tabs flex justify-center gap-6 sm:gap-16 text-[16px] mb-10">
          {[
            { id: "skills", label: "My Skills" },
            { id: "certificates", label: "My Certificates" },
            { id: "education", label: "My Education" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 
                ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6">

          {/* ================ SKILLS WITH PERCENT BAR ================= */}
         {activeTab === "skills" && (
  <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="bg-gray-900/30 p-2 rounded-md border border-gray-700/20 hover:border-gray-600/40 transition-all"
      >
        {/* Title Row */}
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-1">
            <div className="text-gray-300 text-base">{skill.icon}</div>
            <span className="text-white text-xs font-light">
              {skill.name}
            </span>
          </div>
          <span className="text-gray-400 text-[10px]">
            {skill.percent}%
          </span>
        </div>

        {/* Micro thin bar */}
        <div className="w-full bg-gray-700/30 h-[3px] rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-400 transition-all duration-700"
            style={{ width: `${skill.percent}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
)}

          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-3 rounded-xl shadow-md border border-gray-700"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <p className="mt-3 text-center text-gray-300 font-medium text-sm">
                    {cert.title}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* ================ EDUCATION ================= */}
          {activeTab === "education" && (
            <ul className="list-disc list-inside space-y-3 text-gray-300 text-base">
              {education.map((edu, idx) => (
                <li key={idx}>{edu}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
