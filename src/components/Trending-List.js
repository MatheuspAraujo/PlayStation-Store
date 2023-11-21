export default function TrendingList(props) {
  return (
    <div className="trending-cards">
      <card>
        <img className="img-game" src={props.trendingImage1} />

        <img className="ps4-logo-img1" src={props.imageLogo1} />
        <h2 className="text-img1">{props.title1}</h2>
        <h3 className="price-img1">{props.price1}</h3>
        <button className="button-img1">Add To Cart</button>
      </card>

      <card>
        <img className="img-game" src={props.trendingImage2} />

        <img className="ps4-logo-img2" src={props.imageLogo2} />
        <h2 className="text-img2">{props.title2}</h2>
        <h3 className="price-img2">{props.price2}</h3>
        <button className="button-img2">Add To Cart</button>
      </card>

      <card>
        <img className="img-game" src={props.trendingImage3} />

        <img className="ps4-logo-img3" src={props.imageLogo3} />
        <h2 className="text-img3">{props.title3}</h2>
        <h3 className="price-img3">{props.price3}</h3>
        <button className="button-img3">Add To Cart</button>
      </card>
    </div>
  );
}
