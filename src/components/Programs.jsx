import { Icon } from "@iconify/react";

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Sed venenatis lacus a turpis consectetur, ut rhoncus justo rutrum.",
      icon: "heroicons:academic-cap",
    },
    {
      id: 2,
      title: "Consectetur adipiscing elit",
      description:
        "Donec eget magna convallis, mattis magna et, pretium risus.",
      icon: "heroicons:building-storefront",
    },
    {
      id: 3,
      title: "Donec eu velit id libero dapibus",
      description:
        "Integer ac risus in dui egestas mollis. Nunc molestie erat non sapien malesuada.",
      icon: "heroicons:scale",
    },
    {
      id: 4,
      title: "Etiam quis risus mattis",
      description:
        "Nunc sed nisi sit amet lectus feugiat consectetur. Aenean et felis quam.",
      icon: "heroicons:presentation-chart-line",
    },
  ];

  return (
    <div className="bg-slate-200/75">
      {/* Icon Blocks */}
      <div className="mx-auto max-w-[85rem] px-4 py-10 text-lg sm:px-6 lg:px-8 lg:pb-48">
        <div className="mb-16 flex w-full flex-col items-center gap-4">
          <h2 className="inline-block bg-gradient-to-r from-red-600 to-red-400 bg-clip-text py-4 text-6xl font-bold text-transparent lg:text-6xl">
            Program
          </h2>
        </div>
        <div className="grid items-center gap-6 sm:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-2">
          {programs.map((program) => (
            <div className="size-full rounded-lg bg-white p-5 shadow-blue transition ease-in-out hover:-translate-y-1">
              <div className="mb-3 flex items-center gap-x-4">
                <div className="inline-flex size-[62px] items-center justify-center rounded-full border-4 border-red-50 bg-red-100">
                  <Icon icon={program.icon} color="#dc2626" height="1.75rem" />
                </div>
                <div>
                  <h3 className="block text-lg font-semibold text-gray-800">
                    {program.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* End Icon Blocks */}
    </div>
  );
}
