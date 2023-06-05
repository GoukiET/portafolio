import Landing from '../../assets/images/landing.png';
import Dashboard from '../../assets/images/dashboard.png';
import Ecommerce from '../../assets/images/ecommerce.png';
const Works = () => {
  return (
    <div className='container flex flex-col p-5 md:w-4/5 m-auto mt-[70px] items-center'>
      <div className='font-mono font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
        <span className='flex justify-center mb-10'>Proyectos</span>
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
                <div class='font-bold text-xl mb-2 text-center'>
                  Ecommerce Sickbangershop
                </div>
                <p class='text-gray-400 text-base text-justify'>
                  Pequeño Ecommerce para tienda que ofrece venta de discos,
                  vinilos, conciertos y documentales en diferentes formatos. La
                  aplicación posee registro de usuarios, login, carrito de
                  compras, conexión a paypal para realizar el pago.
                </p>
              </div>
              <div class='px-6 pb-2 justify-center'>
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

          <a
            className='hover:scale-105 hover:animate-pulse'
            href='https://dashboard-grupo2.netlify.app'
            target='_blank'
          >
            <div class='max-w-sm rounded overflow-hidden shadow-lg'>
              <img
                class='w-full'
                src={Dashboard}
                alt='Sunset in the mountains'
              />
              <div class='px-6 py-4'>
                <div class='font-bold text-xl mb-2 text-center'>
                  Aplicación Dashboard Clima
                </div>
                <p class='text-gray-400 text-base text-justify'>
                  Aplicación que busca el estado del tiempo de una ciudad. Esta
                  entrega la temperatura actual, temperatura máxima y mínima,
                  humedad, presión atmosférica, grafico con la variación de
                  temperatura según hora y un pronóstico para los próximos 6
                  días.
                </p>
              </div>
              <div class='px-6 pb-2'>
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
          </a>

          <a
            className='hover:scale-105 hover:animate-pulse'
            href='https://goukiet.github.io'
            target='_blank'
          >
            <div class='max-w-sm rounded overflow-hidden shadow-lg'>
              <img class='w-full' src={Landing} alt='Sunset in the mountains' />
              <div class='px-6 py-4'>
                <div class='font-bold text-xl mb-2 text-center'>
                  Landing Page
                </div>
                <p class='text-gray-400 text-base text-justify'>
                  Landing page para tienda que vende discos, vinilos y set box
                  de diferentes artistas y géneros del metal. Posee apartado
                  para catálogo, lanzamientos, una playlist de Spotify del
                  proveedor y apartado para suscribirse y recibir toda la
                  información de nuevos arribos a la tienda.
                </p>
              </div>
              <div class='px-6 pb-2'>
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
