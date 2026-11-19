interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className="max-w-sm rounded-xl border border-gray-200 b-white p-4 shadow-md">
      <img
        src={image}
        alt={title}
        className="h-52 w-full rounded-lg object-contain"
      />
      <h2 className="mt-4 text-lg font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-xl font-bold text-blue-600">
        ${price.toLocaleString("en-IN")}
      </p>
      <button className="mt-4 w-full rounded-l bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
