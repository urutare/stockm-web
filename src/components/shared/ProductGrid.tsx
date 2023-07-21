import { shimmer, toBase64 } from "@/system/utils/blur-effect";
import { generateProducts } from "@/system/utils/gen-card-data";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {generateProducts().map((product) => (
        <div
          key={product.id}
          className="bg-white border hover:shadow-sm transition-all cursor-pointer border-gray-50 rounded-lg p-6 dark:bg-gray-800 dark:border-gray-600"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.imageUrl}
              alt={product.title}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <h2 className="font-bold text-xl mt-2 text-gray-800">
            {product.title}
          </h2>
          <p className="text-th-accent text-sm">{product.subtitle}</p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            {product.description}
          </p>
          <div className="flex space-x-2 mt-4">
            <button className="py-2 px-4 rounded-full bg-th-accent font-bold dark:bg-blue-800">
              Buy
            </button>
            <button className="p-1 h-9 w-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold ">
              <FiShoppingCart />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
