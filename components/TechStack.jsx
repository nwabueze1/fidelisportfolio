import React from "react";

export default function TechStack() {
  return (
    <section className="pt-12">
      <div className="container">
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
          <div className="mx-auto py-4">
            <img src="assets/images/client/amazon.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto py-4">
            <img src="assets/images/client/google.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto py-4">
            <img src="assets/images/client/lenovo.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto py-4">
            <img src="assets/images/client/paypal.svg" className="h-6" alt="" />
          </div>

          <div className="mx-auto py-4">
            <img
              src="assets/images/client/shopify.svg"
              className="h-6"
              alt=""
            />
          </div>

          <div className="mx-auto py-4">
            <img
              src="assets/images/client/spotify.svg"
              className="h-6"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
