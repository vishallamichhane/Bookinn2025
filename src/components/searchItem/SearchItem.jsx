import "./searchItem.css"


const SearchItem = ({
  title,
  distance,
  map,
  subtitle,
  features,
  cancelOption,
  message,
  rating,
  price,
  img,
}) => {

  return (
    <div className="searchItem">
      <img
      style={{height: "250px"}}
      src={img} 
      alt="hotel" 
      className="siImg"
       />
       <div className="siDesc">
       <h1 className="siTitle">{title}</h1> 
       <span className="siDistance">{distance}</span>
       <span className="siMap">{map}</span>
       <span className="siSubtitle">{subtitle}</span>
       <span className="siFeatures"> {features}</span>
       <span className="siCancelOp"> {cancelOption}</span>
       <span className="siCancelOpSubtitle"> 
       {message}
       </span>
       </div>
       <div className="siDetails">
        <div className="siRating">
        <span>Excellent</span>
        <button>{rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
       </div>
    </div>
  )
}

export default SearchItem