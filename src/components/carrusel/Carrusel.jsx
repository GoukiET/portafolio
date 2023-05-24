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

const Carrusel = () => {
  return (
    <div className='container flex m-auto md:w-4/5 justify-between'>
      <div className='w-[100px]'>
        <img src={Html5} alt='html5' title='HTML5' />
      </div>
      <div className='w-[100px]'>
        <img src={Css3} alt='' title='CSS' />
      </div>
      <div className='w-[100px]'>
        <img src={Sass} alt='' title='SASS' />
      </div>
      <div className='w-[100px]'>
        <img src={JavaScript} alt='' title='JAVASCRIPT' />
      </div>
      <div className='w-[100px]'>
        <img src={Mongo} alt='' title='MONGODB' />
      </div>
      <div className='w-[100px]'>
        <img src={Express} alt='' title='EXPRESS' />
      </div>
      <div className='w-[100px]'>
        <img src={Node} alt='' title='NODEJS' />
      </div>
      <div className='w-[100px]'>
        <img src={ReactSvg} alt='' title='REACT' />
      </div>
      <div className='w-[100px]'>
        <img src={Angular} alt='' title='ANGULAR' />
      </div>
      <div className='w-[100px]'>
        <img src={Typescript} alt='' title='TYPESCRIPT' />
      </div>
      <div className='w-[100px]'>
        <img src={Git} alt='' title='GIT' />
      </div>
      <div className='w-[100px]'>
        <img src={Github} alt='' title='GITHUB' />
      </div>
    </div>
  );
};

export default Carrusel;
