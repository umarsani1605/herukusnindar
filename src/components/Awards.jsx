import AwardsImg from "../assets/images/awards/awards.png";
import Lines from "../assets/lines.svg";

export default function Awards() {
  return (
    <div className="relative">
      {/* Features */}
      <div className="mx-auto w-5/6 max-w-[85rem] overflow-hidden py-10 text-lg sm:px-6 md:pb-48 lg:px-8">
        {/* Grid */}
        <div className="relative lg:flex lg:items-center lg:gap-12">
          {/* End Col */}
          <div className="mt-5 sm:mt-10 md:mb-0 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <div className="text-center">
                  <h2 className="inline-block bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text py-4 text-6xl font-bold text-transparent lg:text-6xl">
                    Prestasi
                  </h2>
                </div>
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
            className="right-0 md:h-full lg:absolute lg:h-[500px]"
            src={AwardsImg}
            alt="Features Image"
          />
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
      <div>
        <img
          src={Lines}
          className="absolute -top-[10%] -z-20 w-[200%] md:-top-[15%] md:w-[150%] lg:-top-[80%] lg:w-full"
          alt=""
        />
      </div>
    </div>
  );
}
