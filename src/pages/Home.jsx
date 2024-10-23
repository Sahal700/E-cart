import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishlistItem, remoWishlistItem } from '../redux/slices/wishlistSlice'
import { addCartItem } from '../redux/slices/cartSlice'
function Home() {
  const dispatch = useDispatch()
  const data=useFetch('https://fakestoreapi.com/products')
  console.log(data);
  
  const wish=(item)=>{
    dispatch(remoWishlistItem(item?.id))
    dispatch(addCartItem(item))
  }
  
  return (
    <div className='pt-40 px-10 mb-10 md:grid grid-cols-4'>
      {data?.length>0 && 
       data?.map((item)=>(<div className="p-2">
        <div className='p-3 rounded shadow-lg'>
          <img src={item?.image} alt=""
          className='w-full h-60' />
          <h4 className='text-center text-2xl'>{item?.title.slice(0,25)}...</h4>
          <p className='text-justify'>
            {item?.description.slice(0,100)}...
          </p>
          <p className='text-2xl'>Price:<span className='text-violet-600'>$ {item?.price}</span></p>
          <div className='flex justify-between'>
            <button onClick={()=>dispatch(addWishlistItem(item))} className='p-3 rounded bg-red-500 text-white'><FontAwesomeIcon icon={faHeart}/></button>
            <button onClick={()=>wish(item)} className='p-3 rounded bg-green-500 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
        </div>
      </div>))}
    </div>
  )
}

export default Home