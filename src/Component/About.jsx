import React from "react";

import EliasImage from "../assets/MyImage/about.jpg";

export default function About() {
    return (
        <section id="about" className="About mt-4 min-h-screen grid 
        @min-[600px]:grid-cols-[2fr_3fr] md:grid-cols-[2fr_3fr] items-center gap-10 px-6 md:px-16 bg-gray-900 text-white">
                  <div className="flex justify-center">
        <img
          src={EliasImage}
          alt="Elias Dugasa"
          className="w-auto h-64 md:w-80 md:h-90 object-contain  rounded-2xl shadow-lg"
        />
      </div>

            <div>
            <h2 className="text-4xl font-bold  text-blue-500">About Me</h2>
            <p className="text-base @max-[320px]:text-sm md:text-lg max-w-3xl text-gray-200 leading-relaxed"> 
                Hello! I'm Elias Dugasa, currently I am 4th year university student, studying software engineering at Jimma Inistitute of technology a passionate Frontend Website Developer with a knack for creating visually appealing and user-friendly web experiences. With a strong foundation in HTML, CSS, JavaScript,Nextjs, and React. I specializing in building responsive websites that adapt seamlessly across devices. I enjoy transforming design concepts into functional websites while ensuring optimal performance and accessibility. When I'm not coding, I love exploring the latest web development trends and enhancing my skills to deliver cutting-edge solutions.
            </p>
            </div>
        </section>
    );
}