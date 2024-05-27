"use client";

import Image from "next/image";

2;
const CartModal = () => {
  const cartItems = true;

  return (
    <div className=" w-max absolute p-4 rounded-md bg-white top-12 right-0 flex flex-col shadow-[0_3px_10px_rgba(0,0,0,0.2)] gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-gray-500 text-xl">Shopping cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/23169741/pexels-photo-23169741/free-photo-of-a-green-plant-growing-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className=" flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className=" p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* desc */}
                <div className="text-sm text-gray-500">available</div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/23169741/pexels-photo-23169741/free-photo-of-a-green-plant-growing-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className=" flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className=" p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* desc */}
                <div className="text-sm text-gray-500">available</div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove </span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold ">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4 ">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white ">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
