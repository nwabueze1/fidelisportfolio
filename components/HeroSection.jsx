import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative md:h-screen flex items-center py-36 startup-wrapper overflow-hidden">
      <div className="absolute inset-0" id="overlay"></div>
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
          <div className="md:col-span-7">
            <div className="md:mr-6">
              {/* <img src="assets/images/logo-icon-40.png" className="mb-4" alt=""> */}
              <h4 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">
                Hi, My name is Fidelis Okeke
              </h4>
              <p className="text-slate-700 text-lg max-w-xl font-semibold">
                I am Web developer with more than 5 years of experience building
                modern Frontend and Backend Applications using various
                Javascript frameworks.
              </p>

              <div className="mt-6">
                <a
                  href="mailto:padrefidelis111@gmail.com"
                  className="btn btn-primary rounded-md"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
