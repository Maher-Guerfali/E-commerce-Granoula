import Head from 'next/head';
import Nav from '../components/NavBarWind/NavBar';

const Layout = (props) => (
  <>
    <Head>
      <title>Sayien</title>
      <link rel='icon' href='/favicon.ico' />
      
    </Head>
<Nav/>
<div className="h-60"></div>
    <main>
      <div >{props.children}</div>
    </main>
    
  </>
);

export default Layout;
