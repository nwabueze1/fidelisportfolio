import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative md:py-24 py-16">
      <div className="container">
        <div className="grid grid-cols-1 text-center">
          <h6 className="text-primary-600 text-sm font-bold uppercase mb-2">
            Contact Me
          </h6>
          <h3 className="mb-2 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Wanna talk to me ? Get in touch!
          </h3>
          <div className="mt-1">
            <Link href={"tel:+2349032295542"} passHref>
              <a className="btn btn-primary rounded-md mr-2 mt-2">
                <i className="uil uil-phone"></i> Call Me
              </a>
            </Link>
            <Link href={"mailto:padrefidelis111@gmail.com"} passHref>
              <a className="btn btn-danger rounded-md mr-2 mt-2">
                <i className="uil uil-message"></i> Send an email
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
