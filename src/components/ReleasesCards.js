export default function ReleasesCards(props) {
  return (
    <section className="releases-games">
      <card className="card-games">
        <img className="img-card-games" src={props.imageGame} />

        <h2>{props.titleGame}</h2>
        <h3>{props.subtitleGame}</h3>

        <img className="logo-ps" src={props.psGame} />

        <button className="button-releases-games">{props.priceGame}</button>
      </card>

      {/* 2 Card */}

      <card className="card-games">
        <img className="img-card-games" src={props.imageGame2} />

        <h2>{props.titleGame2}</h2>
        <h3>{props.subtitleGame2}</h3>

        <img className="logo-ps" src={props.psGame2} />

        <button className="button-releases-games">{props.priceGame2}</button>
      </card>

      {/* 3 Card */}

      <card className="card-games">
        <img className="img-card-games" src={props.imageGame3} />

        <h2>{props.titleGame3}</h2>
        <h3>{props.subtitleGame3}</h3>

        <img className="logo-ps" src={props.psGame3} />

        <button className="button-releases-games">{props.priceGame3}</button>
      </card>

      {/* 4 Card */}

      <card className="card-games">
        <img className="img-card-games" src={props.imageGame4} />

        <h2>{props.titleGame4}</h2>
        <h3>{props.subtitleGame4}</h3>

        <img className="logo-ps" src={props.psGame4} />

        <button className="button-releases-games">{props.priceGame4}</button>
      </card>

      {/* 5 Card */}

      <card className="card-games">
        <img className="img-card-games" src={props.imageGame5} />

        <h2>{props.titleGame5}</h2>
        <h3>{props.subtitleGame5}</h3>

        <img className="logo-ps" src={props.psGame5} />

        <button className="button-releases-games">{props.priceGame5}</button>
      </card>

      {/* 6 Card */}

      <card className="card-games">
        <img className="img-card-games" src={props.imageGame6} />

        <h2>{props.titleGame6}</h2>
        <h3>{props.subtitleGame6}</h3>

        <img className="logo-ps" src={props.psGame6} />

        <button className="button-releases-games">{props.priceGame6}</button>
      </card>
    </section>
  );
}
