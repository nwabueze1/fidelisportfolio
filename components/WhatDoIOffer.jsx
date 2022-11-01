import React from "react";

const Badge = ({ title, subtitle, icon }) => (
  <div className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6">
    <div className="w-20 h-20 bg-primary-600/5 text-primary-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700">
      {icon}
    </div>

    <div className="content mt-7">
      <a
        href=""
        className="title h5 text-lg font-medium hover:text-primary-800"
      >
        {title}
      </a>
      <p className="text-slate-400 mt-3">{subtitle}</p>
    </div>
  </div>
);

export default function WhatDoIOffer() {
  return (
    <div id="services" className="container md:mt-24 mt-8">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h6 className="text-primary-600 text-sm font-bold uppercase mb-2">
          Services
        </h6>
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          What do I offer ?
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
        <Badge
          title={"Web Development"}
          subtitle="I use Nextjs to build modern web applications."
          icon={<i className="uil uil-airplay"></i>}
        />

        <Badge
          icon={<i className="uil uil-shutter"></i>}
          title={"Mobile Application"}
          subtitle="I use React Native to build modern mobile applications."
        />
        <Badge
          title={"Backend Development"}
          subtitle={
            "I use nodejs to build fast and secure backend applications."
          }
          icon={<i className="uil uil-camera-plus"></i>}
        />
        <Badge
          title={"Database Management"}
          subtitle="I use Relational Databases like MySql and No Sql Databases like MongoDb"
          icon={<i className="uil uil-flower"></i>}
        />
        <Badge
          title={"Email Marketing"}
          subtitle="I use mail chimp to send campaign emails for clients"
          icon={<i className="uil uil-message"></i>}
        />
        <Badge
          title={"24/7 support"}
          subtitle="I am always available."
          icon={<i className="uil uil-comment"></i>}
        />
      </div>
    </div>
  );
}
