import type { NextPage } from 'next';
import Image from 'next/image';
import IncidentsSection from '../src/incidents';
import ServicesSection from '../src/services';

const Home: NextPage = () => {
  return (
    <div className='h-screen relative'>
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="w-full h-40 bg-black flex items-center justify-center">
        <div>
          <Image src="/logo.png" width={250} height={50} style={{marginTop: '20px'}} className="w-40 h-16" alt="Tailwind Play" />
        </div>
      </div>
      <div className='mt-20 w-full overflow-scroll'>
        <ServicesSection />
      </div>
    </div>
  );
};

export default Home;
