import React from 'react'

function Hero() {
  return (
    <div className='max-w-8l mx-auto px-4 sm:px-6 lg:px-7 bg-gray-900'>
      <div className='pt-10 sm:pt-16 lg:pt-0 sm:px-6 lg:px-8'>
        <div className='lg-grid lg:grid-cols-2 lg:gap-8'>
          <div className='mx-auto max-w-md sm:max-w-5xl sm:px-6 sm:text-center lg:flex lg:items-center lg:pl-0 lg:text-left'>
            <div className='lg:py-24 '>
              <p className='text-cyan-500 font-bold font-serif '>Welcome to CRX</p>
              <h1 className='text-4xl font-extrabold tracking-tight font-sans  text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl  '>
               
                <span className='block'>Now Available, Meet Yorfy NFT Collection ⭐️</span>
              </h1>
              <p className=' mt-10 text-gray-300 sm:text-xl max-w-2xl lg:text-sm xl:text-base  gap-4 font-sans'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              
              <div class="grid max-w-sm grid-cols-3 ml-2 font-sans text-center divide-x shadow-md mt-12  ">
              <div class="p-4 text-white mt-5">
              <h1 className='text-2xl font-bold'>546</h1>
              <p className='text-base'>NFT Items</p>
              </div>
              <div class="p-4 text-white   mt-5">
              <h1 className='text-2xl font-bold'>42</h1>
              <p  className='text-base'>Owners</p>
              </div>
              <div class="p-4 text-white  mt-5">
              <h1 className='text-2xl font-bold'>378</h1>
              <p className='text-base'>Items Sold</p>
              </div>
              </div>
            
            </div>

      <div className='-mt-24 '>
        <img src='assets/Blur.png' className='-z-10 absolute overflow-hidden h-[550px] top-0 left-20  ' />
        <img src="assets/six faces 1.png" alt="art-design" className=" mb-16 ml-20 object-contain h-[500px] w-[950px] " />   
        <div className='flex flex-row justify-end -mt-20  '>
        <p className='mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>Buy an Open Sea</p>
        <p className=' border-2 font-bold py-2 px-4 rounded-xl cursor-pointer bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>Know More</p>
        </div> 
      </div>

        
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero