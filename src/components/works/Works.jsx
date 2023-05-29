import Landing from '../../assets/images/landing.png';
import Dashboard from '../../assets/images/dashboard.png';
import Ecommerce from '../../assets/images/ecommerce.png';
const Works = () => {
  return (
    <div className='container flex flex-col p-5 md:w-4/5 m-auto mt-[40px] items-center'>
      <div className='font-mono font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
        <span className='flex justify-center'>Trabajos</span>
        <div className='container flex gap-20 p-5 mt-3 flex-wrap justify-center'>
          <a
            className='hover:scale-105 hover:animate-pulse'
            href='https://sickbangershop.onrender.com'
            target='_blank'
          >
            <div class='max-w-sm rounded overflow-hidden shadow-lg'>
              <img
                class='w-full'
                src={Ecommerce}
                alt='Sunset in the mountains'
              />
              <div class='px-6 py-4'>
                <div class='font-bold text-xl mb-2'>The Coldest Sunset</div>
                <p class='text-gray-700 text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class='px-6 pt-4 pb-2'>
                <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  React
                </span>
                <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  React Bootstrap
                </span>
                <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  NodeJS
                </span>
                <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  Express
                </span>
                <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  MongoDB
                </span>
                <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  Api REST
                </span>
              </div>
            </div>
          </a>

          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img class='w-full' src={Dashboard} alt='Sunset in the mountains' />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>The Coldest Sunset</div>
              <p class='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class='px-6 pt-4 pb-2'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                HTML5
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                CCS
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                JavaScript
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                ChartJS
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                Api REST
              </span>
            </div>
          </div>

          <div class='max-w-sm rounded overflow-hidden shadow-lg'>
            <img class='w-full' src={Landing} alt='Sunset in the mountains' />
            <div class='px-6 py-4'>
              <div class='font-bold text-xl mb-2'>The Coldest Sunset</div>
              <p class='text-gray-700 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class='px-6 pt-4 pb-2'>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                HTML5
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                CCS
              </span>
              <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
