function ClothingTypeCard(props) {
    return (
      <div className="clothingTypeCard">
        <div>
            <img src={props.imgsrc} alt="" />
        </div>
        <p className="name">{props.name}</p>
      </div>
    );
  }
  
  export default ClothingTypeCard;
  