import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8 w-full px-4 md:px-16 lg:px-24'>
     <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
            <h3 className='text-xl font-bold'>E-mart</h3>
            <p>Your online emart store is also available on web </p>
        </div>
        <div>
            <h3>Quick Links</h3>
            <ul>
                <li>
                    <Link href="/home" >Home</Link>
                </li>
                <li>
                    <Link href="/shop" >Shop</Link>
                </li>
                <li>
                    <Link href="/contacts" >Contacts</Link>
                </li>
                <li>
                    <Link href="/home" >Home</Link>
                </li>
            </ul>
        </div>
        <div>
            <h4>Follow us on</h4>
            <div>
                <a href="facebook.com">
                    <FaFacebook></FaFacebook>
                </a>
                <a href="facebook.com">
                    <FaInstagram></FaInstagram>
                </a>
                <a href="facebook.com">
                    <FaTwitter></FaTwitter>
                </a>
                <a href="facebook.com">
                    <FaTiktok></FaTiktok>
                </a>
            </div>
            <div>
                <form action="">
                    <input type="email" name="" id="" />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
     </div>
    </footer>
  )
}

export default Footer