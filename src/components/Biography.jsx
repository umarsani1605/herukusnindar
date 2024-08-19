import BiographyImg from "../assets/images/bio/bio.png";

export default function Biography() {
  return (
    <>
      {/* Features */}
      <div
        id="biography"
        className="mx-auto max-w-[80rem] px-6 py-10 text-lg sm:px-6 md:mb-10 lg:px-8 lg:py-24"
      >
        {/* Grid */}
        <div className="flex flex-col-reverse md:items-center md:gap-12 lg:flex-row xl:gap-32">
          <img
            className="lg:h-[500px]"
            // style={{boxShadow: '0 8px 60px 0 rgba(103,151,255,.2),0 12px 90px 0 rgba(103,151,255,.2)'}}
            src={BiographyImg}
            alt="Features Image"
          />
          {/* End Col */}
          <div className="mb-10 mt-5 md:mb-0 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <div className="">
                  <h2 className="inline-block bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text py-4 text-6xl font-bold text-transparent lg:text-6xl">
                    Biografi
                  </h2>
                </div>
                {/* <hr class="border-red-500 border-4 w-16"></hr> */}
                <p className="!mt-8 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris quis ultricies dui. Sed aliquet eros nec eros venenatis
                  blandit. Sed posuere purus quis arcu vulputate molestie. Fusce
                  fermentum ac augue in dignissim. Sed tincidunt quis lectus ut
                  pharetra. Sed nec sapien vitae erat tincidunt feugiat in a
                  dolor. Phasellus eu ex eget nisi cursus ornare. Quisque nec
                  rutrum mauris, et viverra nulla. Curabitur aliquam odio eu
                  tellus tempus rhoncus. Aenean et metus non neque vestibulum
                  ullamcorper. Morbi pellentesque lorem enim, nec porta enim
                  lacinia vel.
                </p>
              </div>
              {/* End Title */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </>
  );
}
