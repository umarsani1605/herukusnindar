import BiographyImg from '../assets/images/bio/bio.png';

export default function Biography() {
  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-48 mx-auto text-lg">
        {/* Grid */}
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="flex justify-center">
            <img
              className="rounded-xl h-[400px]"
              // style={{boxShadow: '0 8px 60px 0 rgba(103,151,255,.2),0 12px 90px 0 rgba(103,151,255,.2)'}}
              src={BiographyImg}
              alt="Features Image"
            />
          </div>
          {/* End Col */}
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-6xl inline-block py-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                  Biografi
                </h2>
                {/* <hr class="border-red-500 border-4 w-16"></hr> */}
                <p className="text-gray-500 !mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis ultricies dui. Sed aliquet eros nec eros venenatis blandit. Sed posuere purus quis arcu vulputate molestie. Fusce fermentum ac augue in dignissim. Sed tincidunt quis lectus ut pharetra. Sed nec sapien vitae erat tincidunt feugiat in a dolor. Phasellus eu ex eget nisi cursus ornare. Quisque nec rutrum mauris, et viverra nulla. Curabitur aliquam odio eu tellus tempus rhoncus. Aenean et metus non neque vestibulum ullamcorper. Morbi pellentesque lorem enim, nec porta enim lacinia vel.
                </p>
                <p className="text-gray-500">
                  Sed posuere purus quis arcu vulputate molestie. Fusce fermentum ac augue in dignissim. Sed tincidunt quis lectus ut pharetra. Sed nec sapien vitae erat tincidunt feugiat in a dolor. Phasellus eu ex eget nisi cursus ornare. Quisque nec rutrum mauris, et viverra nulla. Curabitur aliquam odio eu tellus tempus rhoncus.
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
  )
}