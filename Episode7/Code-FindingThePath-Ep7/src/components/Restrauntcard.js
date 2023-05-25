import { CDN_URL } from "../../utils/constant";

const Restrauntcard = (props) => {  // or {resName , cuisine}
    const {resData} = props;
    // console.log("resdata",resData)
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo} = resData;
return(
<div className="res-card">
{/* <img className="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d7a1d41f05ad83ff8ec92fc7c5982b67"/> */}
<img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
{/* //? {resName} */}
<h3>{name}</h3>               
<div className="clubinfo">
           <h4>{avgRating}</h4> 
           {/* <h4>{sla.slaString}</h4> */}
           <h4>{costForTwo}</h4>
</div>

<h4>{cuisines.join(" , ")}</h4>





</div>
)
}
// not sing keys (not acceptable) <<<< index as keys <<<< unique id (best practice )

export default Restrauntcard