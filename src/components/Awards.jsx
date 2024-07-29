import AwardsImg from '../assets/images/awards/awards.png';

export default function Awards() {
  return (
    <div>
      {/* Features */}
      <div className=" max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:pb-96 mx-auto overflow-hidden text-lg">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-6xl inline-block py-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                  Prestasi
                </h2>
                <p className="text-gray-500 !mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <ol className="text-gray-500 list-decimal list-inside">
                  <li>Ut enim ad minim veniam</li>
                  <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip</li>
                  <li>Duis aute irure dolor in reprehenderit in voluptate velit</li>
                  <li>Excepteur sint occaecat cupidatat non proident</li>
                </ol>
              </div>
              {/* End Title */}
            </div>
          </div>
          <div className="relative flex justify-center h-full">
            <img
              className="absolute rounded-xl -bottom-[120%] h-[800px]"
              src={AwardsImg}
              alt="Features Image"
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </div>

  )
}