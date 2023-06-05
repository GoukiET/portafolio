import img from '../../assets/images/sc.png';
const HeroSection = ({ children }) => {
  return (
    <div className='container flex flex-col p-5 md:w-4/5 m-auto mt-[40px] items-center'>
      <div className='rounded-full overflow-hidden w-[100px] h-[100px]'>
        <img src={img} alt='' />
      </div>
      <div className='mt-[15px] font-mono font-bold text-[30px] mb-[15px]'>
        <span>Hola! Me llamo Sebastián Cubillos Q.👋</span>
      </div>
      {children}
      <div className='font-mono font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
        <span>Full Stack Developer</span>
      </div>
    </div>
  );
};

export default HeroSection;
