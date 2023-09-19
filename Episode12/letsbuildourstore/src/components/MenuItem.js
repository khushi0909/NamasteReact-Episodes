import React from 'react'
import { MENU_IMG } from '../../utils/constant'
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/cartSlice';

function MenuItem({item}) {


  const dispatch = useDispatch();

  const handleAddItem = (item) =>{

    //dispatch an action
    dispatch(addItem(item))

  }

    // console.log("menu item",{item})
  return (
    <div className='flex justify-between items-center p-3 w-3/4 border-b-2 border-2 gap-2  border-red-500  m-auto border-[rgb(175, 160, 160)]'>
                <div className='gap-4 flex flex-col border-2 w-2/3 border-blue-400'>
                    <div className='font-bold text-lg text-[#fafafa]'> 
                            <div>{item.name}</div>
                            <div className='font-medium'>Rs.{item.price/100}</div>
                    </div>
                    <div className="text-gray-600 border-2 border-green-400 text-left ">
                            <div>{item.description}</div>
                    </div>
                    
                </div>    
        
                <div className="w-40 h-40 border-2 border-blue-300 rounded-2xl ">
                  <div className='absolute'>
                    <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"  onClick={()=>handleAddItem(item)}   >Add +</button>
                  </div>
                 { (!MENU_IMG+item.imageId)?<img src={MENU_IMG + item.imageId} className='rounded-2xl w-full h-full border-red-300 border-2' />:<img src={MENU_IMG + item.imageId} style={{display:'none'}} />}
                </div>
    </div>
  )
}

export default MenuItem