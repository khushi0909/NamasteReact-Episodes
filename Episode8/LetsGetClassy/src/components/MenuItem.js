import React from 'react'
import { MENU_IMG } from '../../utils/constant'

function MenuItem({item}) {

    console.log({item})
  return (
    <div className='menuContainer'>
                <div className='menuDetails'>
                    <div className='nameprice'>
                            <div>{item.name}</div>
                            <div>Rs.{item.price/100}</div>
                    </div>
                    <div className="description">
                            <div>{item.description}</div>
                    </div>
                    
                </div>    
        
                <div className="dishImg">
                    <img src={MENU_IMG + item.imageId} />
                </div>
    </div>
  )
}

export default MenuItem