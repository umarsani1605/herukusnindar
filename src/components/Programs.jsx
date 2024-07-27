export default function Programs() {

  const cardShadow = {
    boxShadow: '0 2px 10px 2px rgba(0, 0, 0, 0.1)'
  }

  return (
    <>
      {/* Icon Blocks */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-24 mx-auto">
        <div className="flex flex-col gap-4 align-middle w-full mb-8">
          <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
            Program
          </h2>
          <hr class="border-red-500 border-4 w-16"></hr>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-6 md:gap-y-10 md:gap-x-24">
          {/* Card */}
          <div className="size-full bg-white rounded-lg p-5" style={cardShadow}>
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-red-50 bg-red-100">
                <svg
                  className="shrink-0 size-6 text-red-600"
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
                  <circle cx="13.5" cy="6.5" r=".5" />
                  <circle cx="17.5" cy="10.5" r=".5" />
                  <circle cx="8.5" cy="7.5" r=".5" />
                  <circle cx="6.5" cy="12.5" r=".5" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800">
                  Build your portfolio
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              The simplest way to keep your portfolio always up-to-date.
            </p>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="size-full bg-white shadow-md rounded-lg p-5" style={cardShadow}>
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-red-50 bg-red-100">
                <svg
                  className="shrink-0 size-6 text-red-600"
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
                  <path d="M2 3h20" />
                  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                  <path d="m7 21 5-5 5 5" />
                </svg>
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800">
                  Get freelance work
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              New design projects delivered to your inbox each morning.
            </p>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="size-full bg-white shadow-md rounded-lg p-5" style={cardShadow}>
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-red-50 bg-red-100">
                <svg
                  className="shrink-0 size-6 text-red-600"
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
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                  <path d="M2 7h20" />
                  <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
                </svg>
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800">
                  Sell your goods
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Get your goods in front of millions of potential customers with ease.
            </p>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="size-full bg-white shadow-md rounded-lg p-5" style={cardShadow}>
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-red-50 bg-red-100">
                <svg
                  className="shrink-0 size-6 text-red-600"
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
                  <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                  <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                  <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                  <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
                </svg>
              </div>
              <div className="shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800">
                  Get freelance work
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              New design projects delivered to your inbox each morning.
            </p>
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  )
}