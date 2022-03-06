import Link from 'next/link'
import React from 'react'

function header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 h-10 cursor-pointer object-cover"
            src="logo-market-watcher.png"
            alt=""
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <Link href="/about">
            <h3 className="cursor-pointer">About</h3>
          </Link>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="rounded-full border border-green-600 px-4 py-1">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default header
