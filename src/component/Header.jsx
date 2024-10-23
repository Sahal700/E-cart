import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Header() {
  const [show,setShow] = useState(false)
  const wishlistArray = useSelector((state)=>state.wishlist)
  const cartArray = useSelector((state)=>state.cartItem)
  console.log(wishlistArray);
  console.log(cartArray)
  
  
  return (
    <>
      <div className='bg-violet-900 p-5 md:flex justify-between text-white fixed w-full'>
  
        <div className='flex w-full px-5'>
          <Link to={'/'}><h1 className='text-3xl'><FontAwesomeIcon icon={faCartShopping} /> Ecart</h1></Link>
          <button onClick={()=>setShow(!show)} className='border md:hidden border-white p-2 rounded ms-auto'><FontAwesomeIcon icon={faBars} /></button>
        </div>
        
        {
          show && <div className='mt-5 flex md:hidden'>
            <Link to={'/wishlist'}><button className='border flex gap-2 border-white p-3 hover:bg-white hover:text-violet-900 rounded-md group'><span className='text-red-500'><FontAwesomeIcon icon={faHeart}/></span>Wishlist<span className='px-2 rounded bg-slate-50 text-black group-hover:bg-slate-200'>{wishlistArray?.length}</span></button></Link>
            <Link to={'/cart'}><button className='ms-4 flex gap-2 border border-white p-3 hover:bg-white hover:text-violet-900 rounded-md group'><span className='text-green-500'><FontAwesomeIcon icon={faCartShopping} /></span>Cart<span className='px-2 rounded bg-slate-50 group-hover:bg-slate-200 text-black'>{cartArray?.length}</span></button></Link>
          </div>
        }
  
        <div className='hidden md:flex'>
          <Link to={'/wishlist'}><button className='border flex gap-2 border-white p-3 hover:bg-white hover:text-violet-900 rounded-md group'><span className='text-red-500'><FontAwesomeIcon icon={faHeart}/></span>Wishlist<span className='px-2 rounded bg-slate-50 text-black group-hover:bg-slate-200'>{wishlistArray?.length}</span></button></Link>
          <Link to={'/cart'}><button className='ms-4 flex gap-2 border border-white p-3 hover:bg-white hover:text-violet-900 rounded-md group'><span className='text-green-500'><FontAwesomeIcon icon={faCartShopping} /></span>Cart<span className='px-2 rounded bg-slate-50 group-hover:bg-slate-200 text-black'>{cartArray?.length}</span></button></Link>
        </div>
      </div>
    </>
  )
}

export default Header