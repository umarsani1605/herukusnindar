import AwardsImg from "../assets/images/awards/awards.png";
import Lines from "../assets/lines.svg";

export default function Awards() {
  return (
    <div className="relative">
      {/* Features */}
      <div className="mx-auto w-5/6 max-w-[85rem] overflow-hidden py-10 text-lg sm:px-6 md:pb-64 lg:px-8">
        {/* Grid */}
        <div className="relative md:flex md:items-center md:gap-12">
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="inline-block bg-gradient-to-r from-red-600 to-red-400 bg-clip-text py-4 text-6xl font-bold text-transparent lg:text-6xl">
                  Prestasi
                </h2>
                <p className="!mt-8 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <ol className="list-inside list-decimal text-gray-500">
                  <li>Ut enim ad minim veniam</li>
                  <li>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip
                  </li>
                  <li>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </li>
                  <li>Excepteur sint occaecat cupidatat non proident</li>
                </ol>
              </div>
              {/* End Title */}
            </div>
          </div>
          <img
            className="right-0 md:absolute md:h-[1000px]"
            src={AwardsImg}
            alt="Features Image"
          />
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
      <div>
        <img src={Lines} className="absolute -top-[80%] -z-20 w-full" alt="" />
      </div>
    </div>
  );
}
