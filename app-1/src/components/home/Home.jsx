import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-4 py-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-8 mx-auto text-center text-lg-start">
          <h1 className="mb-3">Welcome to My Store</h1>
          <p className="lead mb-4">
            Explore our wide range of products and find the best deals!
          </p>
          <Link className="btn btn-primary btn-lg w-100 w-sm-auto" to="/products">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
