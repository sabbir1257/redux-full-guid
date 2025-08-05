import { CartItem } from "./CartItem";

export const Cart = ({ cartItems = [], handleSubmit }) => {
  return (
    <div className="bg-gray-200 w-1/3 flex-shrink-0 h-full flex flex-col">
      <h3 className="bg-red-300 text-2xl p-2">Cart</h3>
      <div className="p-2 flex-1 overflow-y-auto">
        {cartItems.length === 0 ? (
          'No item added'
        ) : (
          <div className="flex flex-col gap-4">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item.product} qty={item.qty} />
            ))}
          </div>
        )}
      </div>
      <button
        className="bg-green-600 text-white py-2 m-2 rounded"
        onClick={handleSubmit}
      >
        Submit Order
      </button>
    </div>
  );
};