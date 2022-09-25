import React from "react";

const Skills = () => (
  <div class="md:col-span-7">
    <div class="lg:ml-4">
      <h4 class="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">
        We are the largest <br /> Business expert{" "}
      </h4>
      <p class="text-slate-400 max-w-xl">
        Start working with Tailwind CSS that can provide everything you need to
        generate awareness, drive traffic, connect. Dummy text is text that is
        used in the publishing industry or by web designers to occupy the space
        which will later be filled with 'real' content. This is required when,
        for example, the final text is not yet available. Dummy texts have been
        in use by typesetters since the 16th century.
      </p>
      <a href="" class="btn btn-primary rounded-md mt-3">
        Buy Now <i class="mdi mdi-chevron-right align-middle"></i>
      </a>
    </div>
  </div>
);
export default function AboutMe() {
  return (
    <section className="relative md:py-24 py-16" id="about">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-7">
            <div className="lg:ml-4">
              <h4 className="mb-2 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">
                About Me
              </h4>
              <h5 className="text-primary-600 typewrite text-xl font-bold">
                I am a passionate Web Developer
              </h5>
              <p className="text-slate-400 max-w-xl">
                I am a passionate fullstack web developer, who loves challenges.
                I love to keep my code as readable as possible. I love structure
                and order and I also stand for quality. I also love working in a
                team, as I believe that you will work faster and learn faster
                working as a team, just as the saying goes{" "}
                <span className="text-primary-600">
                  "Two head are better than one"
                </span>
              </p>
              <a
                href="mailto:padrefidelis111@gmail.com"
                className="btn btn-primary rounded-md mt-3"
              >
                Contact Me{" "}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 md:col-span-6 mt-8 md:mt-0">
            <div className="lg:ml-5">
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">HTML</span>
                  <span className="text-slate-400">99%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-primary-600 h-[6px] rounded-full"
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Css 3</span>
                  <span className="text-slate-400">85%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-primary-600 h-[6px] rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">JavaScript</span>
                  <span className="text-slate-400">99%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-primary-600 h-[6px] rounded-full"
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">TypeScript</span>
                  <span className="text-slate-400">99%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-primary-600 h-[6px] rounded-full"
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>

              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">ReactJs</span>
                  <span className="text-slate-400">99%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-primary-600 h-[6px] rounded-full"
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">React Native</span>
                  <span className="text-slate-400">75%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-primary-600 h-[6px] rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">
                    NodeJs (Express/NestJs)
                  </span>
                  <span className="text-slate-400">99%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-primary-600 h-[6px] rounded-full"
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Laravel</span>
                  <span className="text-slate-400">60%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-primary-600 h-[6px] rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">MySql</span>
                  <span className="text-slate-400">94%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-primary-600 h-[6px] rounded-full"
                    style={{ width: "94%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">MongoDB</span>
                  <span className="text-slate-400">93%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-primary-600 h-[6px] rounded-full"
                    style={{ width: "93%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-400">Linux (Docker)</span>
                  <span className="text-slate-400">90%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                  <div
                    className="bg-primary-600 h-[6px] rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
