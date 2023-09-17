
import React from 'react'
const RestaurantInfo = ({resinfo}) => {

    console.log({resinfo})

    return (
        <main className="w-3/4 m-auto px-3 py-5">  
                <section className='flex gap-3 justify-between py-3 px-1 border-b border-[rgb(175, 160, 160)] border-dashed'>

                    <div className="text-[rgb(41, 40, 40)]">
                            <h1 className='font-bold text-xl'>{resinfo?.name}</h1>
                            <div>{resinfo?.cuisines.join(" , ")}</div>
                            <div>{resinfo?.city}</div>
                    </div>

                    <aside className="rounded-[20px] p-1 flex flex-col justify-between items-center border-2 border-[rgb(226, 223, 223)]">
                        <div className='text-[#060B06] font-extrabold'><span className='fa fa-star stil'></span>{resinfo?.avgRatingString}</div>
                        <div className="h-1 w-9/12 bg-[rgb(226, 223, 223)]"></div>

                        <div className='texr-[rgb(175, 160, 160)] font-medium'>{resinfo?.totalRatingsString}</div>
                    </aside>    
                </section>

        </main>
  
    )
}

export default RestaurantInfo