import "./App.css";
import ProductCard from "./app/shared/components/ProductCard";
import { products } from "./features/products/types/product";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white px-8 py-5 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">My Shopping Cart</h1>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Our Products.
        </h2>
        {products.map((product) => (
          <ProductCard
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
