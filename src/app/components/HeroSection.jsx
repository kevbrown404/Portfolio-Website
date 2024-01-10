"use client";
import React from 'react';
import Image from "next/image";
import {TypeAnimation} from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className = "text-white mb-4 text-4l sm:text-1xl lg:text-2xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-500 lg:text-6xl font-extrabold">
                    Hello, I'm{" "}
                </span>
                <br></br>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Kevin Brown!',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Here, You Will Find',
        1000,
        'My Recent Projects,',
        1000,
        'Contact Information,',
        1000,
        'And A Copy of My CV,'
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
                </h1>
                <p className="text-[#ADB7BE] text-lg lg:text-xl">
                    Check Out My Recent Projects!
                </p>
            <div>
                <button className="px-6 py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 via-purple-500 to-blue-500 hover:bg-slate-400 text-white">Project Links</button>
                <button className="px-6 py-3 sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-gradient from-green-500 via-purple-500 to-blue-500 border border-white">Download CV</button>
            </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400] relative">
                <Image
                    src="/images/hero-image.jpeg"
                    alt="hero image"
                    className="absolute transform rounded-full transform-x-12 -translate-y-1/2 top-1/2 left-1"
                    width={180}
                    height={300}
                />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection