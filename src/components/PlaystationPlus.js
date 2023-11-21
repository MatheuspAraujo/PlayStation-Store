export default function PlaystationPlus(props) {
  return (
    <div className="psPlus">
      <div className="text-psPlus">
        <img className="bg-psPlus" src={props.imageBG} />
        <img className="game-psPlus" src={props.imageGame} />
        <img className="psPlus-img" src={props.imagePsnow} />
        <p className="p-plus">{props.Psnow}</p>

        <button className="button-plus">learn more</button>
      </div>
    </div>
  );
}
