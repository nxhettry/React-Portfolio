import Projectpage1 from './Projectpage1';
import Projectpage2 from './Projectpage2';
import Projectpage3 from './Projectpage3';

function Projectpage() {
  return (
    <div className='flex flex-col gap-20 w-3/5 pb-20 mx-auto'>
        <Projectpage1 />
        <Projectpage2 />
        <Projectpage3 />
    </div>
  );
}

export default Projectpage;
