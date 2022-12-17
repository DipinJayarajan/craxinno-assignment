import React from 'react'

function Header() {
  return (
    <nav className=" border-gray-200 px-2 sm:px-4 py-7  bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="/" className="flex items-center">
      <img src="/assets/Craxinno logo.svg" className="h-6 mr-3 ml-10 sm:h-9" alt="logo" />
      
  </a>
  <div className="flex md:order-2 mr-8">
      <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-2.5  text-center  md:mr-0 ">Join Us</button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 gap-3  md:bg-gray-900  mr-72">
      
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:underline hover:underline-offset-4  hover:decoration-sky-200">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:underline hover:underline-offset-4  hover:decoration-sky-200">Roadmap</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:underline hover:underline-offset-4  hover:decoration-sky-200">About Us</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:underline hover:underline-offset-4  hover:decoration-sky-200">NFT</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:underline hover:underline-offset-4  hover:decoration-sky-200">Contact Us</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:underline hover:underline-offset-4  hover:decoration-sky-200">Pages</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
      
   
  
  )
}

export default Header