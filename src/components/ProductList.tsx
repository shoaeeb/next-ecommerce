import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes={"25vw"}
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/17102047/pexels-photo-17102047/free-photo-of-couple-kissing-son-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes={"25vw"}
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs w-max hover:bg-lama hover:text-white">
          Add To Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes={"25vw"}
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/17102047/pexels-photo-17102047/free-photo-of-couple-kissing-son-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes={"25vw"}
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs w-max hover:bg-lama hover:text-white">
          Add To Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes={"25vw"}
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/17102047/pexels-photo-17102047/free-photo-of-couple-kissing-son-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes={"25vw"}
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs w-max hover:bg-lama hover:text-white">
          Add To Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes={"25vw"}
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/17102047/pexels-photo-17102047/free-photo-of-couple-kissing-son-on-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes={"25vw"}
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs w-max hover:bg-lama hover:text-white">
          Add To Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
