import img from '../../assets/images/sc.png';
const HeroSection = () => {
  return (
    <div className='container flex flex-col p-5 md:w-4/5 m-auto mt-[40px] items-center'>
      <div className='rounded-full overflow-hidden w-[100px] h-[100px]'>
        <img src={img} alt='' />
      </div>
      <div className='mt-[15px] font-mono text-lg'>
        <span>Hi! I'm Sebastián 👋</span>
      </div>
      <div className='font-mono font-bold text-8xl'>
        <span>Full Stack Developer</span>
      </div>
    </div>
  );
};

export default HeroSection;
