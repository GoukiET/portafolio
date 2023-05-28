import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Html5 from '../../assets/images/tech/html5.svg';
import Css3 from '../../assets/images/tech/css3.svg';
import Sass from '../../assets/images/tech/sass.svg';
import JavaScript from '../../assets/images/tech/js.svg';
import Mongo from '../../assets/images/tech/mongodb.svg';
import Express from '../../assets/images/tech/express.svg';
import Node from '../../assets/images/tech/node.svg';
import ReactSvg from '../../assets/images/tech/react.svg';
import Angular from '../../assets/images/tech/angular.svg';
import Typescript from '../../assets/images/tech/typescript.svg';
import Git from '../../assets/images/tech/git.svg';
import Github from '../../assets/images/tech/github.svg';
import 'swiper/css';

const Carrusel = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className='container flex md:w-4/5 m-auto'>
      <Swiper
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className='md:w-[100px]' src={Html5} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100px]' src={Css3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100px]' src={Sass} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100px]' src={JavaScript} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100px]' src={Mongo} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100px]' src={Express} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100px]' src={Node} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100px]' src={ReactSvg} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100px]' src={Angular} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100px]' src={Typescript} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100px]' src={Git} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:w-[100px]' src={Github} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrusel;
