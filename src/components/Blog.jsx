export default function Articles() {
  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-24 mx-auto">
        {/* Card Grid */}
        <div className="grid grid-cols-2 gap-4 align-middle w-full">
          <div className="space-y-2 md:space-y-4">
            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
              Blog
            </h2>
            <hr class="border-red-500 border-4 w-16"></hr>`
          </div>
          <div className="flex justify-end items-center">
            <a href="#" className="relative inline-block font-normal text-sm text-gray-600 before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-[2px] before:bg-red-500 before:transition before:origin-left before:scale-x-0 hover:before:scale-x-100">Lebih lengkap</a>
          </div>
        </div>
        <div className="py-4 grid grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-4">
          {/* Card */}
          <a className="group flex flex-col focus:outline-none border-slate-300 border-[1px] p-4 rounded-2xl" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl">
              <img
                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Image"
              />
            </div>
            <div className="pt-4">
              <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-[3px] before:bg-red-500 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                Berita 1
              </h3>
              <p className="mt-1 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a className="group flex flex-col focus:outline-none border-slate-200 border-[1px] p-4 rounded-2xl" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl">
              <img
                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Image"
              />
            </div>
            <div className="pt-4">
              <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-[3px] before:bg-red-500 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                Berita 2
              </h3>
              <p className="mt-1 text-gray-600">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip
              </p>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a className="group flex flex-col focus:outline-none border-slate-200 border-[1px] p-4 rounded-2xl" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl">
              <img
                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Image"
              />
            </div>
            <div className="pt-4">
              <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-[3px] before:bg-red-500 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                Berita 3
              </h3>
              <p className="mt-1 text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit</p>
            </div>
          </a>
          {/* End Card */}
          {/* Card */}
          <a className="group flex flex-col focus:outline-none border-slate-200 border-[1px] p-4 rounded-2xl" href="#">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl">
              <img
                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Image"
              />
            </div>
            <div className="pt-4">
              <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-[3px] before:bg-red-500 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100">
                Berita 4
              </h3>
              <p className="mt-1 text-gray-600">
                Excepteur sint occaecat cupidatat non proident
              </p>
            </div>
          </a>
          {/* End Card */}
        </div>
        {/* End Card Grid */}
      </div>
      {/* End Features */}
    </>

  )
}