
import React from 'react'
const RestaurantInfo = ({resinfo}) => {

    console.log({resinfo})

    return (
        <main className="resInfoMain">  
                <section className='info_section'>

                    <div className="info_container">
                            <h1>{resinfo?.name}</h1>
                            <div>{resinfo?.cuisines.join(" , ")}</div>
                            <div>{resinfo?.city}</div>
                    </div>

                    <aside className="rating_container">
                        <div className='ratSec'><span className='fa fa-star stil'></span>{resinfo?.avgRatingString}</div>
                        <div className="line"></div>

                        <div className='totalrat'>{resinfo?.totalRatingsString}</div>
                    </aside>    
                </section>

        </main>
  
    )
}

export default RestaurantInfo