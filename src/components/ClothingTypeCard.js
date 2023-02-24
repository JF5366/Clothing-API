function ClothingTypeCard(props) {
    return (
      <div className="clothingTypeCard">
        <img src={props.imgsrc} alt="" />
        <p className="name">{props.name}</p>
      </div>
    );
  }
  
  export default ClothingTypeCard;
  