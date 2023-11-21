export default function Trending(props) {
  return (
    <div className="trending">
      <div className="trending-title">
        <h2>{props.title}</h2>
        <button>View all +</button>
      </div>
    </div>
  );
}
