import Image from "next/image";

export const CartItem = ({ item, qty }) => {
  return (
    <div className="flex flex-row gap-3 bg-white p-2 rounded shadow">
      <div className="w-[80px] h-[80px] bg-white flex items-center justify-center">
        <Image
          src={item.thumbnail}
          alt="product preview"
          width={60}
          height={60}
        />
      </div>
      <div>
        <h3 className="font-bold">
          {item.title} <span className="text-red-600 text-2xl">× {qty}</span>
        </h3>
        <p>Product description here</p>
      </div>
    </div>
  );
};
