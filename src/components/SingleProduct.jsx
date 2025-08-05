import Image from "next/image";
import { useDispatch } from "react-redux";
import ADD_TO_CARD from '../store/reducers/types';

export const SingleProduct = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white p-2 rounded shadow h-[250px]">
      <h3 className="text-lg p-2">{item.title}</h3>
      <div className="h-[150px] text-center">
        <Image
          src={item.thumbnail}
          alt="Product Thumbnail"
          className="h-full w-full object-cover"
          width={100}
          height={100}
        />
      </div>
      <button
        className="bg-blue-600 text-white p-1 w-full mt-2 rounded"
        onClick={() => {
          dispatch({ type: ADD_TO_CARD, payload: item });
        }}
      >
        Add to cart
      </button>
    </div>
  );
};