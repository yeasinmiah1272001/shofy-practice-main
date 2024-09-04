import Image from "next/image";
import { useState } from "react";

const ProductImage = ({ product }) => {
  const [current, setCurrent] = useState(product.images[0]);
  return (
    <div className="flex">
      <div className="flex flex-col">
        {product.images.map((item, index) => (
          <button  key={index}
          onClick={() => setCurrent(item)}
          className={`w-28 h-28 border mb-2 rounded-md ${
            item === current && "border-sky-600"
          }`}>
            <Image
              src={item}
              alt={product.title}
              height={400}
              width={400}
              className="rounded-lg object-cover"
            />
          </button>
        ))}
      </div>
      <div>
        <Image
          src={current}
          alt={product.title}
          height={400}
          width={400}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ProductImage;
