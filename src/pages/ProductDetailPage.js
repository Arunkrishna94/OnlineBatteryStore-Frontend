import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const ProductDetailPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Product Details</h2>
            <ProductDetails productId={id} />
        </div>
    );
};

export default ProductDetailPage;
