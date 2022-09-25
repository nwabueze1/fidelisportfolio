import React from "react";

export default function EducationalBackground() {
  return (
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="text-primary-600 text-sm font-bold uppercase mb-2">
            Education
          </h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Educational Background
          </h3>
        </div>

        <div className="grid grid-cols-1 mt-8">
          <div className="timeline relative">
            <div className="timeline-item">
              <div className="grid sm:grid-cols-2">
                <div className="">
                  <div className="duration date-label-left md:text-right md:mr-8 relative">
                    <img
                      src="assets/images/client/shree-logo.png"
                      className="rounded-full h-9 w-9 md:ml-auto"
                      alt=""
                    />
                    <h5 className="my-2 font-semibold">
                      Federal University of Technology Owerri
                    </h5>
                    <h6 className="text-slate text-sm mb-0">2025-2021</h6>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="event event-description-right float-left text-left md:ml-8">
                    <h5 className="title mb-1 font-semibold">
                      Computer Science
                    </h5>
                    <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                      I was awarded a Bachelor of Science in Computer Science.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item mt-12">
              <div className="grid sm:grid-cols-2">
                <div className="md:order-1 order-2">
                  <div className="event event-description-left float-left text-right md:mr-8">
                    <h5 className="title mb-1 font-semibold">
                      Senior Secondary School Certificate Examination
                    </h5>
                    <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                      i worked as a Junior web Developer in this firm, helping
                      the team members design and build testable applications.
                    </p>
                  </div>
                </div>
                <div className="md:order-2 order-1">
                  <div className="duration duration-right md:ml-8 relative">
                    <img
                      src="assets/images/client/google-logo.png"
                      className="rounded-full h-9 w-9"
                      alt=""
                    />
                    <h5 className="my-2 font-semibold">
                      Holy Trinity College, Onitsha
                    </h5>
                    <h6 className="text-slate text-sm mb-0">2012-15</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item mt-12">
              <div className="grid sm:grid-cols-2">
                <div className="md:order-1 order-2">
                  <div className="event event-description-left float-left text-right md:mr-8">
                    <h5 className="title mb-1 font-semibold text-right">
                      Junior WASCE
                    </h5>
                    <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                      The generated injected humour, or non-characteristic words
                      etc. Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Donec quam felis,
                    </p>
                  </div>
                </div>
                <div className="md:order-2 order-1">
                  <div className="duration duration-right md:ml-8 relative">
                    <img
                      src="assets/images/client/circle-logo.png"
                      className="rounded-full h-9 w-9"
                      alt=""
                    />
                    <h5 className="my-2 font-semibold">
                      St. Dominic Savio Seminary Akpu.
                    </h5>
                    <h6 className="text-slate text-sm mb-0">2009-12</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item mt-12">
              <div className="grid sm:grid-cols-2">
                <div className="mt-4 mt-sm-0">
                  <div className="duration date-label-left md:text-right md:mr-8 relative">
                    <img
                      src="assets/images/client/lenovo-logo.png"
                      className="rounded-full h-9 w-9 md:ml-auto"
                      alt=""
                    />
                    <h5 className="my-2 font-semibold">
                      Union Primary School, Adazi-Nnukwu
                    </h5>
                    <h6 className="text-slate text-sm mb-0">2000-2009</h6>
                  </div>
                </div>
                <div className="mt-4 mt-sm-0">
                  <div className="event event-description-right float-left text-left md:ml-8">
                    <h5 className="title mb-1 font-semibold">
                      First School Leaving Certificate
                    </h5>
                    <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                      {/* The generated injected humour, or non-characteristic words
                    etc. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis, */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
