export default function Articles() {
  function truncate(str, n, useWordBoundary) {
    if (str.length <= n) {
      return str;
    }
    const subString = str.slice(0, n - 1); // the original check
    return (
      (useWordBoundary
        ? subString.slice(0, subString.lastIndexOf(" "))
        : subString) + "..."
    );
  }

  const articles = [
    {
      title: "Berita 1",
      date: "12 Agustus 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis ultricies dui. Sed aliquet eros nec eros venenatis blandit. Sed posuere purus quis arcu vulputate molestie. Fusce fermentum ac augue in dignissim. Sed tincidunt quis lectus ut pharetra. Sed nec sapien vitae erat tincidunt feugiat in a dolor.",
    },
    {
      title: "Berita 2",
      date: "13 Agustus 2023",
      content:
        "Donec eget magna convallis, mattis magna et, pretium risus. Integer ac risus in dui egestas mollis. Nunc molestie erat non sapien malesuada, nec ultricies nunc ultricies. Nullam nec nunc nec nunc ultricies nunc ultricies.",
    },
    {
      title: "Berita 3",
      date: "14 Agustus 2023",
      content:
        "Integer ac risus in dui egestas mollis. Nunc molestie erat non sapien malesuada, nec ultricies nunc ultricies. Nullam nec nunc nec nunc ultricies nunc ultricies. Donec eget magna convallis, mattis magna et, pretium risus.",
    },
    {
      title: "Berita 4",
      date: "15 Agustus 2023",
      content:
        "Nunc molestie erat non sapien malesuada, nec ultricies nunc ultricies. Nullam nec nunc nec nunc ultricies nunc ultricies. Donec eget magna convallis, mattis magna et, pretium risus. Integer ac risus in dui egestas mollis.",
    },
    {
      title: "Berita 5",
      date: "16 Agustus 2023",
      content:
        "Nullam nec nunc nec nunc ultricies nunc ultricies. Donec eget magna convallis, mattis magna et, pretium risus. Integer ac risus in dui egestas mollis. Nunc molestie erat non sapien malesuada, nec ultricies nunc ultricies.",
    },
    {
      title: "Berita 6",
      date: "17 Agustus 2023",
      content:
        "Donec eget magna convallis, mattis magna et, pretium risus. Integer ac risus in dui egestas mollis. Nunc molest ie erat non sapien malesuada, nec ultricies nunc ultricies. Nullam nec nunc nec nunc ultricies nunc ultricies.",
    },
    {
      title: "Berita 7",
      date: "18 Agustus 2023",
      content:
        "Integer ac risus in dui egestas mollis. Nunc molestie erat non sapien malesuada, nec ultricies nunc ultricies. Nullam nec nunc nec nunc ultricies nunc ultricies. Donec eget magna convallis, mattis magna et, pretium risus.",
    },
    {
      title: "Berita 8",
      date: "19 Agustus 2023",
      content:
        "Nunc molestie erat non sapien malesuada, nec ultricies nunc ultricies. Nullam nec nunc nec nunc ultricies nunc ultricies. Donec eget magna convallis, mattis magna et, pretium risus. Integer ac risus in dui egestas mollis.",
    },
  ];

  return (
    <>
      {/* Features */}
      <div className="mx-auto w-5/6 max-w-[85rem] py-10 text-lg sm:px-6 lg:px-8 lg:py-24">
        {/* Card Grid */}
        <div className="w-full gap-4 pb-6 align-middle">
          <div className="space-y-2 text-center md:space-y-4">
            <h2 className="inline-block bg-gradient-to-r from-red-600 to-red-400 bg-clip-text py-4 text-3xl font-bold text-transparent lg:text-6xl">
              Blog
            </h2>
          </div>
        </div>
        <div className="grid gap-4 py-4 pb-6 sm:gap-6 md:grid-cols-4 md:gap-8 lg:gap-4">
          {articles.slice(0, 4).map((article) => (
            <a
              className="group flex flex-col rounded-2xl border-[1px] border-slate-200 p-4 focus:outline-none"
              href="#"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl bg-gray-100">
                <img
                  className="rounded-2xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105"
                  src="https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Blog Image"
                />
              </div>
              <div className="pt-4">
                <h3 className="relative inline-block text-lg font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:h-[3px] before:w-full before:origin-left before:scale-x-0 before:bg-red-500 before:transition group-hover:before:scale-x-100">
                  {article.title}
                </h3>
                <p className="mt-1 text-gray-600">
                  {truncate(article.content, 60, true)}
                </p>
              </div>
            </a>
          ))}
        </div>
        {/* End Card Grid */}
        <div className="mt-4 flex items-center justify-center">
          <a
            href="#"
            className="relative inline-block h-fit w-fit rounded-full border border-gray-300 px-4 py-2 text-sm font-normal text-gray-600 hover:bg-gray-100 hover:transition"
          >
            Lebih lengkap
          </a>
        </div>
      </div>
      {/* End Features */}
    </>
  );
}
