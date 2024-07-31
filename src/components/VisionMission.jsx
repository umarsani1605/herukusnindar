import { Icon } from "@iconify/react";

export default function VisionMission() {
  const missions = [
    {
      icon: "heroicons:academic-cap",
      name: "Lorem ipsum dolor sit amet",
    },
    {
      icon: "heroicons:building-storefront",
      name: "Consectetur adipiscing elit",
    },
    {
      icon: "heroicons:scale",
      name: "Mauris quis ultricies dui",
    },
    {
      icon: "heroicons:presentation-chart-line",
      name: "Sed aliquet eros nec eros venenatis",
    },
  ];

  return (
    <div className="bg-slate-200/75">
      {/* Icon Blocks */}
      <div className="mx-auto max-w-[85rem] px-4 py-10 text-lg sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid gap-12 md:grid-cols-2">
          {/* Grid */}
          <div className="flex flex-col gap-12 rounded-xl bg-white p-14 shadow-blue transition ease-in-out hover:-translate-y-1 hover:shadow-blue-bold">
            <div className="flex flex-col">
              <h2 className="inline-block bg-gradient-to-r from-red-600 to-red-400 bg-clip-text py-4 text-6xl font-bold text-transparent lg:text-6xl">
                Visi
              </h2>
              <p className="mt-3 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                quis ultricies dui. Sed aliquet eros nec eros venenatis blandit.
                Sed posuere purus quis arcu vulputate molestie. Fusce fermentum
                ac augue in dignissim. Sed tincidunt quis lectus ut pharetra.
                Sed nec sapien vitae erat tincidunt feugiat in a dolor.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12 rounded-xl bg-white p-14 shadow-blue transition ease-in-out hover:-translate-y-1 hover:shadow-blue-bold">
            <div className="flex flex-col">
              <h2 className="inline-block bg-gradient-to-r from-red-600 to-red-400 bg-clip-text py-4 text-6xl font-bold text-transparent lg:text-6xl">
                Misi
              </h2>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {missions.map((mission) => (
                <div className="flex gap-x-5 sm:gap-x-8">
                  <Icon
                    icon={mission.icon}
                    width="1.75rem"
                    color="#1f2937"
                  ></Icon>
                  <div className="grow">
                    <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                      {mission.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </div>
  );
}
