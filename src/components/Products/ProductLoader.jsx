import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Features/ProductSlice";
import Loader from "../../utilities/Loader";

const ProductLoader = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Loader />
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex justify-center items-center h-screen px-4">
        <p className="text-red-500 font-semibold text-center text-lg">
          Error: {error}
        </p>
      </div>
    );
  }

  return null;
};

export default ProductLoader;
