import imgPlaceholder from '../assets/images/imgPlaceholder.jpg'

const Card = ({product}) => {
  // console.log('props.product', props.product)
  return (
    <div className="card" style={{ width: "18rem;" }}>
      <img
        src={product.img ? product.img : imgPlaceholder}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="card text-center">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      <div className="card-footer text-body-secondary">2 days ago</div>
    </div>
  );
}

export default Card;
