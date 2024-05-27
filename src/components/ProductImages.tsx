"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/23623513/pexels-photo-23623513/free-photo-of-yard.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/23698636/pexels-photo-23698636/free-photo-of-a-room-with-pictures-on-the-wall-and-tables.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/15578747/pexels-photo-15578747/free-photo-of-sneaking-cat-on-the-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/24035320/pexels-photo-24035320/free-photo-of-feet-of-a-girl-wearing-white-shoes-sitting-by-a-bunch-of-freshly-picked-tulips.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative ">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="30vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, index) => (
          <div
            onClick={() => setIndex(index)}
            key={img.id}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
