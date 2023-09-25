
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'
const RestaurantInfo = ({resinfo}) => {

    // console.log({resinfo})

    return (
        <main className="w-3/4 m-auto px-3 py-5">  
                <section className='flex gap-3 justify-between py-3 px-1 border-b border-[rgb(175, 160, 160)] border-dashed '>

                    <div className="text-[rgb(41, 40, 40)]">
                            <h1 className='font-bold text-2xl text-gray-700'>{resinfo?.name}</h1>
                            <div className="text-gray-500 text-lg font-serif">{resinfo?.cuisines.join(" , ")}</div>
                            {/* <div className="text-gray-500 font-serif">{resinfo?.city}</div> */}
                    </div>

                    <aside className="rounded-[20px] p-1 flex flex-col justify-between items-center border-2 border-[rgb(226, 223, 223)] rounded-lg h-20">
                        <div className='text-green-600 font-extrabold'><FontAwesomeIcon icon={faStar} className='text-green-600 pr-1' />{resinfo?.avgRatingString}</div>
                        <div className="h-px w-9/12 bg-gray-300"></div>

                        <div className='text-gray-500 font-medium font-sans'>{resinfo?.totalRatingsString}</div>
                    </aside>    
                </section>

        </main>
  
    )
}

export default RestaurantInfo