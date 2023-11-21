export default function Header() {
  return (
    <header>
      <div className="logo-sony">
        <img src="/assets/header/logo sony.png" />
      </div>

      <div className="logo-profile">
        <img src="/assets/header/logo playstation store.png" />

        <div className="profile">
          <button>
            My PlayStation <span> > </span>
          </button>

          <img
            className="logo-avatar"
            src="/assets/header/profile avatar.png"
          />
          <img src="/assets/header/heart.png" />
          <img src="/assets/header/cart.png" />

          <input type="search" placeholder="Search" />
        </div>
      </div>
    </header>
  );
}
