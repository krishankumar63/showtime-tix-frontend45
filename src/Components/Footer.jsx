import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitterSquare, FaYoutube } from 'react-icons/fa'
import { Mail, Phone, Apple, Smartphone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between gap-8'>

        {/* Brand Info */}
        <div className='mb-6 md:mb-0'>
          <Link to='/'>
            <h1 className='text-red-500 text-2xl font-bold'>ShowTime Tix</h1>
          </Link>
          <p className='mt-2 text-sm text-gray-400 max-w-xs'>
            Your one-stop destination for booking movie tickets. Pick your seat, grab your popcorn, enjoy the show.
          </p>
          <p className='text-sm mt-3 flex items-center gap-2'>
            <Mail size={14} className='text-red-400' /> support@showtimetix.com
          </p>
          <p className='text-sm mt-1 flex items-center gap-2'>
            <Phone size={14} className='text-red-400' /> +91 98765 43210
          </p>
        </div>

        {/* Quick Links */}
        <div className='mb-6 md:mb-0'>
          <h3 className='text-xl font-semibold mb-2'>Quick Links</h3>
          <ul className='text-sm space-y-2 text-gray-400'>
            <li><Link to='/' className='hover:text-red-400 transition-colors'>Home</Link></li>
            <li><Link to='/' className='hover:text-red-400 transition-colors'>Now Showing</Link></li>
            <li><Link to='/my-bookings' className='hover:text-red-400 transition-colors'>My Bookings</Link></li>
            <li><Link to='/' className='hover:text-red-400 transition-colors'>Upcoming Movies</Link></li>
          </ul>
        </div>

        {/* Help & Support */}
        <div className='mb-6 md:mb-0'>
          <h3 className='text-xl font-semibold mb-2'>Help & Support</h3>
          <ul className='text-sm space-y-2 text-gray-400'>
            <li className='hover:text-red-400 transition-colors cursor-pointer'>FAQs</li>
            <li className='hover:text-red-400 transition-colors cursor-pointer'>Cancellation Policy</li>
            <li className='hover:text-red-400 transition-colors cursor-pointer'>Booking Support</li>
            <li className='hover:text-red-400 transition-colors cursor-pointer'>Terms & Conditions</li>
            <li className='hover:text-red-400 transition-colors cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        {/* Social + App */}
        <div className='mb-6 md:mb-0'>
          <h3 className='text-xl font-semibold mb-2'>Follow Us</h3>
          <div className='flex space-x-4 mt-2'>
            <FaFacebook className='text-3xl hover:text-red-400 transition-colors cursor-pointer'/>
            <FaInstagram className='text-3xl hover:text-red-400 transition-colors cursor-pointer'/>
            <FaTwitterSquare className='text-3xl hover:text-red-400 transition-colors cursor-pointer'/>
            <FaYoutube className='text-3xl hover:text-red-400 transition-colors cursor-pointer'/>
          </div>
          <div className='mt-4'>
            <p className='text-sm text-gray-400 mb-2'>Download our app</p>
            <div className='flex flex-col gap-2'>
              <span className='flex items-center gap-2 text-xs border border-gray-600 px-3 py-1.5 rounded-md hover:border-red-400 hover:text-red-400 transition-colors cursor-pointer w-fit'>
                <Apple size={13} /> App Store
              </span>
              <span className='flex items-center gap-2 text-xs border border-gray-600 px-3 py-1.5 rounded-md hover:border-red-400 hover:text-red-400 transition-colors cursor-pointer w-fit'>
                <Smartphone size={13} /> Google Play
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400'>
        <p>
          &copy; {new Date().getFullYear()} <span className='text-red-500 font-semibold'>ShowTime Tix</span>. All rights reserved. Made with love for movie lovers.
        </p>
      </div>
    </footer>
  )
}

export default Footer