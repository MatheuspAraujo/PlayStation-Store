export default function PlaystationNow(props) {
  return (
    <div className="psNow">
      <div className="text-psNow">
        <img className="bg-psNow" src={props.imageBG} />
        <img className="game-psNow" src={props.imageGame} />
        <img className="psNow-img" src={props.imagePsnow} />
        <p>{props.Psnow}</p>

        <button>learn more</button>
      </div>
    </div>
  );
}
