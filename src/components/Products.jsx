import { SingleProduct } from "./SingleProduct";

export const Products = ({ products = [], handleAddToCart }) => {
  return (
    <div className="bg-red-200 w-2/3 p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 h-full overflow-y-auto">
      {products.map((item, index) => (
        <SingleProduct item={item} key={index} />
      ))}
    </div>
  );
};