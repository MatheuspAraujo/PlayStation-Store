export default function NewGame() {
  return (
    <main>
      <img
        className="background-newgame"
        src="/assets/newGame/image new game.png"
      />

      <div className="discover">
        <p>
          <span>Discover </span>| Explore
        </p>
        <p>Collections | Deals | Subscriptions</p>
      </div>

      <div className="banner-price">
        <img
          className="name-banner"
          src="/assets/newGame/new game banner.png"
        />

        <div className="newgame-price">
          <img className="ps5-banner" src="/assets/newGame/ps5 new game.png" />
          <button>$49.99</button>
        </div>
      </div>
    </main>
  );
}
