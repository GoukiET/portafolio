const Navbar = () => {
  return (
    <div className='flex p-5 justify-between font-mono text-[13px] sm:text-[15px] md:w-4/5 m-auto border-b border-b-zinc-950'>
      <div className='container flex'>
        <a>
          <svg
            className='w-6 mx-3'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            fill='#94a3b8'
          >
            <path d='M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z' />
          </svg>
        </a>
        <span className=' text-gray-300 text-[17px]'>scubillosq@gmail.com</span>
      </div>
      <div className='container flex gap-2 justify-end'>
        <a
          href='https://www.linkedin.com/in/sebasti%C3%A1n-cubillos/'
          target='_blank'
          className='text-gray-300 hover:scale-110 hover:animate-pulse'
        >
          LinkedIn
        </a>
        <span className='text-gray-300'> / </span>
        <a
          href='https://github.com/GoukiET'
          target='_blank'
          className='text-gray-300 hover:scale-110 hover:animate-pulse'
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Navbar;
