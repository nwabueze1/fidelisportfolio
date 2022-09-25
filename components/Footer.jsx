import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-gray-900 dark:bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="py-[30px] px-0 border-t border-gray-800">
        <div className="container text-center">
          <div className="grid md:grid-cols-3 grid-cols-1 items-center">
            <div className="md:text-left text-center">
              <a href="#" className="text-[22px] focus:outline-none">
                Fidelis Okeke
              </a>
            </div>

            <div className="text-center mt-6 md:mt-0">
              <p className="mb-0">© {new Date().getFullYear()} fidelis.dev</p>
            </div>

            <ul className="list-none md:text-right text-center mt-6 md:mt-0">
              <li className="inline">
                <a
                  href=""
                  className="btn btn-icon btn-sm border !border-gray-800 rounded-md hover:border-primary-600 dark:hover:border-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600"
                >
                  <i className="uil uil-facebook h-4 w-4"></i>
                </a>
              </li>
              <li className="inline">
                <a
                  href=""
                  className="btn btn-icon btn-sm border !border-gray-800 rounded-md hover:border-primary-600 dark:hover:border-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600"
                >
                  <i className="uil uil-whatsapp h-4 w-4"></i>
                </a>
              </li>
              <li className="inline">
                <a
                  href=""
                  className="btn btn-icon btn-sm border !border-gray-800 rounded-md hover:border-primary-600 dark:hover:border-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600"
                >
                  <i className="uil uil-twitter h-4 w-4"></i>
                </a>
              </li>
              <li className="inline">
                <a
                  href=""
                  className="btn btn-icon btn-sm border !border-gray-800 rounded-md hover:border-primary-600 dark:hover:border-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600"
                >
                  <i className="uil uil-linkedin h-4 w-4"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
