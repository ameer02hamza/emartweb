import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    // fixed inset-x-0 bottom-0
    <footer className="bg-gray-800 text-white py-8 w-full px-4 md:px-16 lg:px-24  inset-x-0 bottom-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">E-mart</h3>
          <p>Your online emart store is also available on web </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="home" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link href="contacts" className="hover:underline">
                Contacts
              </Link>
            </li>
            <li>
              <Link href="home" className="hover:underline">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow us on</h4>
          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="facebook.com" className="hover:text-gray-400">
              <FaFacebook></FaFacebook>
            </a>
            <a href="facebook.com" className="hover:text-gray-400">
              <FaInstagram></FaInstagram>
            </a>
            <a href="facebook.com" className="hover:text-gray-400">
              <FaTwitter></FaTwitter>
            </a>
            <a href="facebook.com" className="hover:text-gray-400">
              <FaTiktok></FaTiktok>
            </a>
          </div>
          <div>
            <form action="" className="flex items-center justify-center mt-8">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email"
                className="w-full p-2 rounded-l-lg bg-gray-800
                                 border border-gray-600 active:rounded-l-lg
                                 active:border-gray-600"
              />
              <button className=" bg-red-600 text-white px-4 py-2 rounded-r-lg border border-gray-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 border-t border-gray-700 pt-4">
        <div
          className="container mx-auto flex flex-col md:flex-row justify-between
                    items-center"
        >
          <p>&copy; 2021 E-mart. All rights reserved</p>
          <div className="flex space-x-4 md:mt-0">
            <a href="" className="hover:underline">
              Privacy Policy
            </a>
            <a href="" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
