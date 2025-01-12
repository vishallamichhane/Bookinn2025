import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
      style={{height: "250px"}}
      src="https://i.pinimg.com/474x/e6/80/56/e68056ff0ad5a272fac7a9702d7cabc2.jpg" 
      alt="hotel" 
      className="siImg"
       />
       <div className="siDesc">
       <h1 className="siTitle"> Tower Street</h1> 
       <span className="siDistance">500m from center</span>
       <span className="siMap">Show on map</span>
       <span className="siSubtitle">Studion apartment with air conditioning</span>
       <span className="siFeatures"> Entire studio - 1 bathroom - 21㎡ 1 full bed</span>
       <span className="siCancelOp"> Free cancelation</span>
       <span className="siCancelOpSubtitle"> 
        You can cancel later, so lock in this great price today
       </span>
       </div>
       <div className="siDetails">
        <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs5000</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
       </div>
    </div>
  )
}

export default SearchItem