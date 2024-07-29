import NavigationBar from './NavigationBar'

import heroBg from '../assets/ngawi.png'
import profile from '../assets/profile.png'
import topWave from '../assets/top-wave.svg'
import bottomWave from '../assets/bottom-wave.svg'

function Hero() {

  return (
    <div className="relative h-dvh overflow-hidden">
      <div className="h-full pt-24 pb-14 gap-24 flex flex-col justify-center align-middle">
        <NavigationBar></NavigationBar>
        <div className="flex flex-col max-w-[85rem] w-2/3 mx-auto z-10 gap-4">
          <span className="block font-bold text-white text-4xl"><em>Ketua DPRD Ngawi</em></span>
          <span className="block font-black text-white text-xl md:text-7xl">
            <em>HERU KUSNINDAR</em>
          </span>
        </div>
        <div className='mx-auto w-2/3 max-w-[85rem] text-white cursor-pointer'>
          <svg className='inline mr-2' width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9ZM12 4C9.23858 4 7 6.23858 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V9C17 6.23858 14.7614 4 12 4ZM12 7C12.5523 7 13 7.44772 13 8V11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11V8C11 7.44772 11.4477 7 12 7Z" fill="#fff"/>
          </svg>
          <span>Kenali lebih dekat</span>
        </div>
      </div>
      <img className='absolute top-0 w-full z-10' src={topWave} alt="" />
      <div className='absolute top-0 w-full h-dvh -z-10 bg-cover bg-fixed bg-top' style={{backgroundImage: `url(${heroBg})`}}></div>
      <img className='absolute bottom-0 w-full z-20' src={bottomWave} alt="" />
      <img className='absolute bottom-20 right-0 h-[750px] z-10' src={profile} alt="" />
    </div>
  )
}

export default Hero