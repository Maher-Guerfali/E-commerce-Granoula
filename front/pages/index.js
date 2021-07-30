import { useContext } from 'react';
import { UserContext } from '../lib/UserContext';
import Loading from '../components/loading';

import Image from 'next/image'
import stylesss from '../styles/_BuyButton2.module.scss'
import styless from '../styles/_Main.module.scss'
import Link from 'next/link'


const Home = () => {
  const [user] = useContext(UserContext);

  return <>
  <div className={styless.mainn}>
    <div className={styless.block1}>
   
    <div className={styless.titre}>Granoula made with ❤️</div>
      <div >
    <p className={styless.parag}>
    <p className={styless.titre2}>Granoula made with ❤️</p>
      Tunisian Homemade 
    granola rich with protain nutritions and fresh dryed{"\n"} fruits,
      no conservation 100%natrual and betbi3a sugar free
    </p>
    <Link href="/order" >
    <a className={stylesss.effect1} >
        Make order
        <span className={stylesss.bg}></span>
      </a>
    
    </Link>
   
    
      </div>
      <div className={styless.void1}>
    
      </div>
     
       
     <img className={styless.fff}
            src="/Granoula-plat.png"
            alt="Piddor"
          
          />
    </div>
    
    </div>
  {user?.loading ? <Loading /> : user?.issuer && <div>You're logged in!</div>}
  </>;
};

export default Home;
