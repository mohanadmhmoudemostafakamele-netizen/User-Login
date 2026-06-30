import {Link} from "react-router-dom";
export default function Products() {
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
  ];
  return (
    <div className="container py-4 py-md-5">
      <h1 className="mb-4">Our Products</h1>
      <div className="row g-3 g-md-4">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price} EGP</p>
                <Link
                  className="btn btn-primary mt-auto align-self-start"
                  to={`/product/${product.id}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
