import React from 'react'
import {footerNav} from '../constants'
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copyright @ 2025 Ivan Bondaruk. All rights reserved.</p>
          <div className="flex">
            {footerNav.map((link, i) => (
                <React.Fragment key={link.name}>
                    <Link
                        to={link.path}
                        className="text-gray-700 font-semibold hover:text-black transition-colors"
                    >
                        {link.name}
                    </Link>
                    {i !== footerNav.length - 1 && (
                        <span className="text-gray-400 flex items-center mx-2">|</span>
                    )}
                </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer