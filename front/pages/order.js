import Image from 'next/image'
import React, { useEffect, useState } from "react";
import StyleOrder from '../styles/_Order.module.scss'     
import PayNow from '../components/PayNow'
import { fromImageToUrl, API_URL } from '../utils/urls'
import Link from 'next/link'
import { twoDecimals } from '../utils/format'

import BuyButton from '../components/BuyButton'


var ProduitStyle =StyleOrder.Produit;

function spin(couleur)
{
    if (couleur==="fraise")
    {
        
        
       
      
      
        return <img  className={StyleOrder.Produitfr}src="/GraF.png" alt="Piddghor"/>
    }
   else if (couleur ==="kiwi"){
       return <img  className={StyleOrder.Produitki}src="/GraWi.png" alt="Pidgtgdor"/>
   }
   else 
   {return <img  className={StyleOrder.Produitkh}src="/GraK.png" alt="Pidvvdor"/>}
    

}

function plato(couleur)
{
    if (couleur==="fraise")
    {
        return StyleOrder.ShopFraise
    }
   else if (couleur ==="kiwi")
   {
       return StyleOrder.ShopKiwi
   }
   else 
   {return StyleOrder.ShopKhoukh}
}
const louza=
<div className={StyleOrder.flexr}>
<button>
    louze
</button>
<button>
    bond9a
</button>
<button>
    kewkew
</button>
      </div>

const co=2;

function Order ({products}) {
    

    const [keymap,setKeymap] = useState(1);
    const [Cola, setCola] = useState('fraise');
    const [count, setCount] = useState(0);
    const [Pricy,setPricy]=useState("6");
    const [Productid, setProductid]= useState(3);

    var producty=
{id:Productid};

    return (
        <>
        <div className={StyleOrder.main}>
         <div className={StyleOrder.BarCart}>
             <div>aya rakah ka3ba</div>


             <div className={StyleOrder.Cart} > <h3>{count}</h3><img src="https://img.icons8.com/pastel-glyph/64/000000/fast-cart.png"/></div>
         </div>
      <div className={plato(Cola)}>
        

          {spin(Cola)}
        
      
            <div></div>
            <h3 style={{padding:"20px",fontSize:"2.7rem",fontFamily: "'Fredoka One', cursive",color:"white"}}>Granola {Cola} bel louza :D</h3>
      <div className={StyleOrder.flexr}>
          
          <h3> Quantite : </h3>
          <button onClick={() => setCount(count - 1)} >-</button>
          <h3>{count}</h3>
          <button onClick={() => setCount(count + 1)} >+</button>
      
      </div>
      
      <div className={StyleOrder.flexr}>
<button onClick={()=>{setCola('fraise');setProductid(3)}}>
    Fraise
</button>
<button onClick={()=>{setCola('kiwi');setProductid(5)}}>
    kiwi
</button>
<button onClick={()=>{setCola('khoukh');setProductid(4)}} >
    khoukh
</button >
      </div>
      
      {louza}
      
     
      
      </div>
      <BuyButton product={producty} />
      <PayNow/>
      
        </div>
        
      
        </>
    )


}
export async function getStaticProps() {
    const product_res = await fetch(`${API_URL}/products/`)
    const products = await product_res.json()
  
    return {
      props: {
          products        }
    }
}
export default Order

