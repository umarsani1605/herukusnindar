import NavigationBar from "./NavigationBar";

import heroBg from "../assets/ngawi.png";
import profile from "../assets/profile.png";
import topWave from "../assets/top-wave.svg";
import bottomWave from "../assets/bottom-wave.svg";

function Hero() {
  return (
    <div className="relative h-[550px] overflow-hidden lg:h-[700px]">
      <div className="mx-auto flex h-full max-w-[80rem] flex-col justify-end gap-12 px-4 py-10 pb-16 text-lg sm:px-6 lg:gap-24 lg:px-8 lg:pb-36">
        <div className="z-50 drop-shadow-2xl">
          <span className="block text-2xl font-bold text-white drop-shadow-lg lg:text-5xl lg:font-bold lg:text-white">
            <em>Ketua DPRD Ngawi</em>
          </span>
          <span className="block text-6xl font-black text-white drop-shadow-lg md:text-8xl">
            <em>HERU KUSNINDAR</em>
          </span>
        </div>
        <div className="z-50 text-white">
          <svg
            className="mr-2 inline"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9ZM12 4C9.23858 4 7 6.23858 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V9C17 6.23858 14.7614 4 12 4ZM12 7C12.5523 7 13 7.44772 13 8V11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11V8C11 7.44772 11.4477 7 12 7Z"
              fill="#fff"
            />
          </svg>
          <span>Kenali lebih dekat</span>
        </div>
      </div>
      {/* <img
        className="absolute -left-24 top-0 z-10 w-[1000px] !max-w-none md:left-0 md:w-full lg:top-0 lg:z-10"
        src={topWave}
        alt="top-wave"
      /> */}
      <div
        className="absolute top-0 -z-10 h-dvh w-full bg-cover bg-fixed bg-top"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <img className="absolute bottom-0 z-20 w-full" src={bottomWave} alt="" />
      <img
        className="absolute bottom-0 right-0 z-10 h-[450px] lg:bottom-20 lg:right-0 lg:z-10 lg:h-[550px]"
        src={profile}
        alt="heru-kusnindar"
      />
    </div>
  );
}

export default Hero;
