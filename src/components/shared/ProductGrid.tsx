import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { shimmer, toBase64 } from '@/system/utils/blur-effect';
import { generateProducts } from '@/system/utils/gen-card-data';

function ProductsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {generateProducts().map(product => (
        <div
          key={product.id}
          className="cursor-pointer rounded-lg border border-gray-50 bg-white p-6 transition-all hover:shadow-sm dark:border-gray-600 dark:bg-gray-800"
        >
          <div className="relative h-80 w-full">
            <Image
              src={product.imageUrl}
              alt={product.title}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475),
              )}`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <h2 className="mt-2 text-xl font-bold text-gray-800">
            {product.title}
          </h2>
          <p className="text-th-accent text-sm">{product.subtitle}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            {product.description}
          </p>
          <div className="mt-4 flex space-x-2">
            <button
              type="button"
              className="bg-th-accent rounded-full px-4 py-2 font-bold dark:bg-blue-800"
            >
              Buy
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 p-1 font-bold text-gray-700 "
            >
              <FiShoppingCart />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;
