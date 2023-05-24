import img from '../../assets/images/avatar.jpg';
const HeroSection = () => {
  return (
    <div className='container md:w-4/5'>
      <div className='rounded-full overflow-hidden w-[300px] h-[300px]'>
        <img src={img} alt='' srcset='' />
      </div>
    </div>
  );
};

export default HeroSection;
