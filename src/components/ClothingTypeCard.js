function ClothingTypeCard(props) {
    return (
      <div className="clothingTypeCard">
        <div className="cardImage">
            <img src={props.imgsrc} alt="" />
        </div>
        <p className="cardLegend">{props.name}</p>
      </div>
    );
  }
  
  export default ClothingTypeCard;
  