import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="relative md:py-24 py-16 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="text-primary-600 text-sm font-bold uppercase mb-2">
            Projects
          </h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            What have I worked on ?
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Below are some of the projects which I have worked on over the past
            few years.
          </p>
        </div>
      </div>
      <div className="container md:mt-24 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
          <Link
            href={"http://legalmarketplace.vercel.app/"}
            passHref
            target={"_blank"}
            referrerPolicy="no-referrer"
            translate="yes"
          >
            <div className="relative">
              <img
                src="assets/images/done-with-it.gif"
                className="mx-auto"
                alt=""
                style={{
                  height: 500,
                  // width: 400,
                }}
              />
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-primary-600/5 bottom-2/4 translate-y-2/4 left-0 rotate-45 -z-1 shadow-md shadow-primary-600/10 rounded-[100px]"></div>
            </div>
          </Link>

          <div className="lg:ml-8">
            <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">
              Done With It <br />
            </h4>
            <p className="text-slate-400">
              An application for selling items that you don't need.
            </p>
            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                React-Native
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                Expo
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                NodeJs (NestJs)
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                MongoDB
              </li>
            </ul>

            <div className="mt-4">
              <Link
                href={
                  "https://expo.dev/@nwabueze/done-with-it?serviceType=classic&distribution=expo-go&relea"
                }
                passHref
                target={"_blank"}
                referrerPolicy="no-referrer"
                translate="yes"
              >
                <a className="btn btn-link text-primary-600 hover:text-primary-600 after:bg-primary-600 transition duration-500">
                  View Project
                  <i className="uil uil-angle-right-b align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container md:mt-24 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-[30px]">
          <Link
            href={"http://legalmarketplace.vercel.app/"}
            passHref
            target={"_blank"}
            referrerPolicy="no-referrer"
            translate="yes"
          >
            <div className="relative">
              <img src="assets/images/legal.png" className="mx-auto" alt="" />
              <div className="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-primary-600/5 bottom-2/4 translate-y-2/4 left-0 rotate-45 -z-1 shadow-md shadow-primary-600/10 rounded-[100px]"></div>
            </div>
          </Link>

          <div className="lg:ml-8">
            <h4 className="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">
              The Legal Market Place <br />
            </h4>
            <p className="text-slate-400">
              This is a platform where business can handle their legal duties
              with ease
            </p>
            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                ReactJs (NextJS)
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                Material UI
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                NodeJs (NestJs)
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                MongoDB
              </li>
            </ul>

            <div className="mt-4">
              <Link
                href={"http://legalmarketplace.vercel.app/"}
                passHref
                target={"_blank"}
                referrerPolicy="no-referrer"
                translate="yes"
              >
                <a className="btn btn-link text-primary-600 hover:text-primary-600 after:bg-primary-600 transition duration-500">
                  View Project
                  <i className="uil uil-angle-right-b align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="container md:mt-24 mt-16">
        <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <Link
            href={"https://vigilant-lamport-1c803a.netlify.app/"}
            passHref
            target={"_blank"}
            referrerPolicy="no-referrer"
            translate="yes"
          >
            <div class="relative order-1 md:order-2">
              <img src="assets/images/fidefy.png" class="mx-auto" alt="" />
              <div class="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-primary-600/5 bottom-2/4 translate-y-2/4 right-0 rotate-45 -z-1 shadow-md shadow-primary-600/10 rounded-[100px]"></div>
            </div>
          </Link>

          <div class="lg:mr-8 order-2 md:order-1">
            <h4 class="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">
              Fidefy Cloud hosting
            </h4>
            <p class="text-slate-400">
              Due to its widespread use as filler text for layouts,
              non-readability is of great importance: human perception is tuned
              to recognize certain patterns and repetitions in texts. If the
              distribution of letters visual impact.
            </p>
            <ul class="list-none text-slate-400 mt-4">
              <li class="mb-1 flex">
                <i class="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                Html 5
              </li>
              <li class="mb-1 flex">
                <i class="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                Css 3
              </li>
              <li class="mb-1 flex">
                <i class="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                JavaScript
              </li>
            </ul>

            <div class="mt-4">
              <Link
                href={"https://vigilant-lamport-1c803a.netlify.app/"}
                passHref
                translate="yes"
              >
                <a class="btn btn-link text-primary-600 hover:text-primary-600 after:bg-primary-600 transition duration-500">
                  View Project
                  <i class="uil uil-angle-right-b align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="container md:mt-24 mt-16">
        <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <div class="relative">
            <img src="assets/images/car.png" class="mx-auto" alt="" />
            <div class="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-primary-600/5 bottom-2/4 translate-y-2/4 right-0 rotate-45 -z-1 shadow-md shadow-primary-600/10 rounded-[100px]"></div>
          </div>

          <div class="lg:mr-8 order-2 md:order-1">
            <h4 class="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">
              Your Car
            </h4>
            <p class="text-slate-400">
              Due to its widespread use as filler text for layouts,
              non-readability is of great importance: human perception is tuned
              to recognize certain patterns and repetitions in texts. If the
              distribution of letters visual impact.
            </p>
            <ul class="list-none text-slate-400 mt-4">
              <li class="mb-1 flex">
                <i class="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                ReactJs
              </li>
              <li class="mb-1 flex">
                <i class="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                Tailwind Css
              </li>
              <li class="mb-1 flex">
                <i class="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                Styled Components
              </li>
            </ul>

            <div class="mt-4">
              <Link
                href={"https://carfidelis.herokuapp.com/"}
                passHref
                translate="yes"
                target={"_blank"}
              >
                <a class="btn btn-link text-primary-600 hover:text-primary-600 after:bg-primary-600 transition duration-500">
                  View Project
                  <i class="uil uil-angle-right-b align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="container md:mt-24 mt-16">
        <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
          <div class="relative order-1 md:order-2">
            <img
              src="assets/images/printing press.png"
              class="mx-auto"
              alt=""
            />
            <div class="overflow-hidden absolute lg:h-[400px] h-[320px] lg:w-[400px] w-[320px] bg-primary-600/5 bottom-2/4 translate-y-2/4 right-0 rotate-45 -z-1 shadow-md shadow-primary-600/10 rounded-[100px]"></div>
          </div>

          <div class="lg:mr-8 order-2 md:order-1">
            <h4 class="mb-4 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">
              Printing Press
            </h4>
            <p class="text-slate-400">
              An application where you can make a media booking like printing of
              banners, video coverage etc.
            </p>
            <ul class="list-none text-slate-400 mt-4">
              <li class="mb-1 flex">
                <i class="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                ReactJs
              </li>
              <li class="mb-1 flex">
                <i class="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                Tailwind Css
              </li>
              <li class="mb-1 flex">
                <i class="uil uil-check-circle text-primary-600 text-xl mr-2"></i>{" "}
                Styled Components
              </li>
            </ul>

            <div class="mt-4">
              <Link
                href={"https://carfidelis.herokuapp.com/"}
                passHref
                translate="yes"
                target={"_blank"}
              >
                <a class="btn btn-link text-primary-600 hover:text-primary-600 after:bg-primary-600 transition duration-500">
                  View Project
                  <i class="uil uil-angle-right-b align-middle"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
