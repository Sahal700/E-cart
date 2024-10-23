import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'
function Cart() {
  const[total,setTotal]=useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartArray = useSelector((state)=>state.cartItem)
  console.log(cartArray);
  const getTotal = ()=>{
    if(cartArray?.length>0){
      setTotal(cartArray?.map(item=>item.price).reduce((price1,price2)=>price1+price2))
    }
  }
  const handleCheckout=()=>{
    alert('Order places successfully')
    dispatch(emptyCart())
    navigate=('/')
  }
  useEffect(()=>{
    getTotal()
  },[cartArray])
  return (
    <>
      <div className='pt-32'>
        <h1 className='text-center text-4xl text-violet-900'>Cart</h1>

        {cartArray?.length>0 ?
          <div className='md:grid grid-cols-[2fr,1fr] my-10'>
          <div className='md:py-5 md:px-20'>
            <table className='w-full border border-gray-400'>
              <thead>
                <tr>
                  <th className='border border-gray-100 p-3 bg-gray-500 text-white'>#</th>
                  <th className='border border-gray-100 p-3 bg-gray-500 text-white'>Title</th>
                  <th className='border border-gray-100 p-3 bg-gray-500 text-white'>Image</th>
                  <th className='border border-gray-100 p-3 bg-gray-500 text-white'>Price</th>
                  <th className='border border-gray-100 p-3 bg-gray-500 text-white'>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray?.map((item,index)=><tr>
                  <td className='border border-gray-100 p-3'>{index+1}</td>
                  <td className='border border-gray-100 p-3'>{item?.title.slice(0,10)}...</td>
                  <td className='border border-gray-100 p-3 flex justify-center'><img src={item?.image} alt="no image" style={{width:'150px',height:'100px'}} /></td>
                  <td className='border border-gray-100 p-3'>$ {item?.price}</td>
                  <td className='border border-gray-100 p-3'><button onClick={()=>dispatch(removeCartItem(item?.id))}  className='bg-red-700 p-3 text-white rounded'><FontAwesomeIcon icon={faTrashCan} /></button></td>
                </tr>)}
              </tbody>
            </table>
          </div>
          <div className='pt-5 px-10'>
            <div className='p-5 shadow-lg'>
              <h1 className='text-center text-3xl'>Get Summary</h1>
              <p className='mt-4 text-xl'>Total nuber of products : {cartArray?.length}</p>
              <p className='mt-2 text-xl'>GrandTotal : $ {total}</p>
              <button onClick={handleCheckout} className='w-full bg-green-600 text-white p-3 mt-4 hover:bg-white hover:border hover:border-green-600 hover:text-green-600'>CheckOut</button>
            </div>
          </div>
        </div>
        :
        <div className='w-full mt-5 md:grid grid-cols-3'>
        <div></div>
        <div className='flex justify-center items-center flex-col my-10'>
          <img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" alt="" className='w-[75%]' />
          <p className='text-violet-800 text-3xl'>Your Cart is Empty</p>
          <Link to={'/'}><button className='bg-green-700 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} className='me-2'/>Back Home</button> </Link>
        </div>
        <div></div>

      </div>
      }
      </div>
    </>
  )
}

export default Cart