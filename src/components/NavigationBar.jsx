import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import { Icon } from "@iconify/react";
import Signature from "../assets/signature.svg";

export default function NavigationBar() {
  const navigation = [
    {
      name: "Beranda",
      href: "#",
      active: true,
    },
    {
      name: "Biografi",
      href: "#",
      active: false,
    },
    {
      name: "Prestasi",
      href: "#",
      active: false,
    },
    {
      name: "Visi dan Misi",
      href: "#",
      active: false,
    },
    {
      name: "Program",
      href: "#",
      active: false,
    },
    {
      name: "Blog",
      href: "#",
      active: false,
    },
  ];

  return (
    <Disclosure
      as="nav"
      className="z-100 fixed w-full bg-slate-950 shadow-blue-bold transition-all duration-300"
    >
      <div className="mx-auto flex max-w-7xl justify-between px-6 sm:px-6 lg:px-8">
        <div className="relative flex h-16 w-full items-center justify-between">
          <div className="flex h-full w-full items-center justify-start sm:items-stretch md:justify-between">
            <div className="flex h-full flex-shrink-0 items-center">
              <a className="h-full cursor-pointer py-4">
                <img
                  src={
                    "https://see.fontimg.com/api/renderfont4/K74zp/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SGVydSBLdXNuaW5kYXI/motterdam.png"
                  }
                  alt=""
                  className="h-full"
                />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="flex space-x-1">
                {navigation.map((item) => (
                  <a
                    href={item.href}
                    key={item.name}
                    aria-current={item.active ? "page" : undefined}
                    className="rounded-md px-3 py-2 text-sm font-normal text-white transition-all duration-300 hover:text-slate-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-slate-900 focus:outline-none focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <Icon
                icon="heroicons:bars-3-16-solid"
                className="block size-6 group-data-[open]:hidden"
              />
              <Icon
                icon="heroicons:x-mark-16-solid"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>
      <DisclosurePanel className="relative sm:hidden">
        <div className="absolute z-50 w-full space-y-1 bg-slate-900 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className="block rounded-md px-4 py-2 text-base font-normal text-white"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

// export default function NavigationBar() {
//   return (
//     <>
//       {/* ========== HEADER ========== */}
//       <header className="z-50 flex w-full flex-wrap md:flex-nowrap md:justify-start">
//         <nav className="relative mx-auto w-5/6 py-2 pt-20 sm:px-6 md:flex md:items-center md:justify-between md:gap-3 lg:max-w-[85rem] lg:px-8">
//           <div className="flex items-center justify-between gap-x-1">
//             {/* Collapse Button */}
//             <button
//               type="button"
//               className="hs-collapse-toggle relative flex size-9 items-center justify-center rounded-lg text-[12px] font-medium text-white hover:bg-gray-100/10 focus:bg-gray-100/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden"
//               id="hs-header-base-collapse"
//               aria-expanded="false"
//               aria-controls="hs-header-base"
//               aria-label="Toggle navigation"
//               data-hs-collapse="#hs-header-base"
//             >
//               <svg
//                 className="hs-collapse-open:hidden size-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={24}
//                 height={24}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1={3} x2={21} y1={6} y2={6} />
//                 <line x1={3} x2={21} y1={12} y2={12} />
//                 <line x1={3} x2={21} y1={18} y2={18} />
//               </svg>
//               <svg
//                 className="hs-collapse-open:block hidden size-4 shrink-0"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={24}
//                 height={24}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M18 6 6 18" />
//                 <path d="m6 6 12 12" />
//               </svg>
//               <span className="sr-only">Toggle navigation</span>
//             </button>
//             {/* End Collapse Button */}
//           </div>
//           {/* Collapse */}
//           <div
//             id="hs-header-base"
//             className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
//             aria-labelledby="hs-header-base-collapse"
//           >
//             <div className="max-h-[75vh] overflow-hidden overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100/10 [&::-webkit-scrollbar]:w-2">
//               <div className="flex flex-col gap-0.5 py-2 md:flex-row md:items-center md:gap-1 md:py-0">
//                 <div className="grow">
//                   <div className="flex flex-col gap-0.5 md:flex-row md:items-center md:gap-1">
//                     <a
//                       className="flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-100/10 focus:bg-gray-100/10 focus:outline-none"
//                       href="#"
//                       aria-current="page"
//                     >
//                       <svg
//                         className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={24}
//                         height={24}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
//                         <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//                       </svg>
//                       Beranda
//                     </a>
//                     <a
//                       className="flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-100/10 focus:bg-gray-100/10 focus:outline-none"
//                       href="#"
//                     >
//                       <svg
//                         className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={24}
//                         height={24}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//                         <circle cx={12} cy={7} r={4} />
//                       </svg>
//                       Biografi
//                     </a>
//                     <a
//                       className="flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-100/10 focus:bg-gray-100/10 focus:outline-none"
//                       href="#"
//                     >
//                       <svg
//                         className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={24}
//                         height={24}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M12 12h.01" />
//                         <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
//                         <path d="M22 13a18.15 18.15 0 0 1-20 0" />
//                         <rect width={20} height={14} x={2} y={6} rx={2} />
//                       </svg>
//                       Prestasi
//                     </a>
//                     <a
//                       className="flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-100/10 focus:bg-gray-100/10 focus:outline-none"
//                       href="#"
//                     >
//                       <svg
//                         className="me-3 block size-4 shrink-0 md:me-2 md:hidden"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width={24}
//                         height={24}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
//                         <path d="M18 14h-8" />
//                         <path d="M15 18h-5" />
//                         <path d="M10 6h8v4h-8V6Z" />
//                       </svg>
//                       Artikel
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End Collapse */}
//         </nav>
//       </header>
//       {/* ========== END HEADER ========== */}
//     </>
//   );
// }
