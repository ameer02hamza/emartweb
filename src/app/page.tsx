"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function StartupPage() {
  const router = useRouter();
  const handleEmart = () => {
    router.push("/en/home");
  };
  const handleNewsApp = () => {
    router.push("/news");
  };
  return (
    <div className="h-screen w-screen flex justify-around items-center">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <button>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Emart
          </h5>
        </button>
        <p className="mb-3 font-normal text-gray-700 ">
          Excited to announce my next project: moving to develop a feature-rich,
          user-friendly Emart, bringing the latest updates right to your
          fingertips!.
        </p>
        <button
          onClick={handleEmart}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Move to Emart
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            News App
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">
          Excited to announce my next project: moving to develop a feature-rich,
          user-friendly news app, bringing the latest updates right to your
          fingertips!.
        </p>
        <button
          onClick={handleNewsApp}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Move to Newsapp
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default StartupPage;
