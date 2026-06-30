import {useParams , useNavigate} from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="container py-4 py-md-5">
      <h1 className="mb-3 mb-md-4">Product Details for Product ID: {id}</h1>
      <button
        className="btn btn-primary w-100 w-sm-auto"
        onClick={() => navigate(-1)}
      >
        Back to Products
      </button>
    </div>
  );
}
