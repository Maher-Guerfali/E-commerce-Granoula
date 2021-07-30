import React, { useState } from "react";
import Link from 'next/link';
//import IndexDropdown from "../Dropdowns/IndexDropdown"; <IndexDropdown />
import { useContext } from 'react';
import { UserContext } from '../../lib/UserContext';
import magic from '../../lib/magic'


/*
By Mahoura :D
*/



function swtich(text)
{if (text ==="M4 6h16M4 12h16M4 18h16")
{
  return "M6 18L18 6M6 6l12 12"
}
else return "M4 6h16M4 12h16M4 18h16"

};
const menu="M4 6h16M4 12h16M4 18h16";
const x="M6 18L18 6M6 6l12 12";
function Nav() {
  const [user] = useContext(UserContext);
  
  
  const [isOpen, setIsOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [icon,setIcon]=useState(menu);
  const logoutUser = async () => {
    try {
      await magic.user.logout();
      setUser(null);
      //router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <>
    <nav className="backdrop-filter backdrop-blur-lg top-0 fixed z-50 w-full h-50 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow">
      <div className="container px-5 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
             
            </a>
          </Link>
          <button 
            className="hover:scale-125 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => { setNavbarOpen(!navbarOpen); setIcon(swtich(icon))}}
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon} />
</svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none" +
            (navbarOpen ? " block" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="/"
              >
                <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                Home
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              
            </li>
            <li className="flex items-center">
              <a
                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="/"
                target="_blank"
              >
                <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="/"
                target="_blank"
              >
               <i class="fab fa-facebook-f"></i>
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="/"
                target="_blank"
              >
                <i className="text-blueGray-400 fab fa-github text-lg leading-lg " />
                
                <button className="lg:hidden inline-block ml-2" onClick={logoutUser}>logout</button>
              
              </a>
            </li>

            <li className="flex items-center">
              <button
                className="bg-blueGray-700 text-red active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                type="button"onClick={logoutUser}
              >
                hh
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>

  );
}

export default Nav;
