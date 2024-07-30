export default function VisionMission() {
  return (
    <div className="bg-slate-200/75">
      {/* Icon Blocks */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-24 mx-auto text-lg">
        <div className="grid grid-cols-2 mx-auto gap-12">
          {/* Grid */}
          <div className="flex flex-col gap-12 bg-white p-14 rounded-xl h-fit pb-32" style={{ boxShadow: '0 4px 24px 0 rgba(103,151,255,.1), 0 12px 64px 0 rgba(103,151,255,.1)' }}>
            <div className="flex flex-col">
              <h2 className="font-bold text-3xl lg:text-6xl inline-block py-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Visi
              </h2>
              <p className="mt-3 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis ultricies dui. Sed aliquet eros nec eros venenatis blandit. Sed posuere purus quis arcu vulputate molestie. Fusce fermentum ac augue in dignissim. Sed tincidunt quis lectus ut pharetra. Sed nec sapien vitae erat tincidunt feugiat in a dolor.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12 bg-white p-14 rounded-xl" style={{ boxShadow: '0 4px 24px 0 rgba(103,151,255,.1), 0 12px 64px 0 rgba(103,151,255,.1)' }}>
            <div className="flex flex-col">
              <h2 className="font-bold text-3xl lg:text-6xl inline-block py-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Misi
              </h2>
              <p className="mt-3 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis ultricies dui. Sed aliquet eros nec eros venenatis blandit. Sed posuere purus quis arcu vulputate molestie. Fusce fermentum ac augue in dignissim. Sed tincidunt quis lectus ut pharetra. Sed nec sapien vitae erat tincidunt feugiat in a dolor.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex gap-x-5 sm:gap-x-8">
                <svg
                  className="shrink-0 mt-2 size-6 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>
                <div className="grow">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    High quality Co-Living spaces
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Our fully furnished spaces are designed and purpose-built with
                    Co-Living in mind, featuring high-end finishes and amenities
                    that go far beyond traditional apartment buildings.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex gap-x-5 sm:gap-x-8">
                <svg
                  className="shrink-0 mt-2 size-6 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div className="grow">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Fostering vibrant communities
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Our passion is bringing people together. Beyond creating
                    beautiful spaces, we provide shared experiences.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex gap-x-5 sm:gap-x-8">
                <svg
                  className="shrink-0 mt-2 size-6 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
                <div className="grow">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Simple and all-inclusive
                  </h3>
                  <p className="mt-1 text-gray-600">
                    We worry about the details so that our residents don't have to.
                    From our online application process to simple, all-inclusive
                    billing we aim to make the living experience as effortless as
                    possible.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </div>

  )
}