"use client";
import Modal from "@/components/modal.component";
import { imgEmptyCart } from "@/consts/images";
import { productType } from "@/interfaces/card.type";
import {
  addToCart,
  removeFromCart,
  removeProduct,
} from "@/redux/features/cart/cartSlice";
import { RootState } from "@/redux/store/store";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ChangeAddress from "./component/changeAddress.component";
import { useRouter } from "next/navigation";

function Cart() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [address, setAddress] = React.useState("Abu Dhabi UAE");
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleRemoveFromCart = (e: any, product: productType) => {
    console.log(typeof e);

    e.preventDefault();
    e.stopPropagation();
    dispatch(removeProduct(product));
  };
  const handleReduceFromCart = (e: any, product: productType) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFromCart(product));
  };
  const handleAddToCart = (e: any, product: productType) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
  };
  const handleCheckout = () => {
    router.push("/checkout");
  };
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex justify-between w-1/3">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Sub Total</p>
                  <p>Remove</p>
                </div>
              </div>
              <div>
                {cart.products.map((product, index) => (
                  <div key={index} className="border-b">
                    <div className="md:flex items-center justify-between space-x-4">
                      <div className="flex items-center ">
                        <img
                          src={product.imageUrl}
                          alt=""
                          className="h-36 w-36 object-contain rounded"
                        />
                        <div className="flex ml-4">
                          <h3 className="text-lg font-semibold">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                      <div className="w-1/3 flex justify-between items-center">
                        <p>${product.price}</p>
                        <div className="flex">
                          <button
                            type="button"
                            onClick={(e) => handleReduceFromCart(e, product)}
                            className="size-6 inline-flex justify-center 
                                                items-center gap-x-2 text-sm font-medium rounded-md border
                                                 border-gray-200 bg-white text-gray-800
                                                  shadow-sm hover:bg-gray-50 focus:outline-none 
                                                  focus:bg-gray-50 disabled:opacity-50 
                                                  disabled:pointer-events-none"
                            tabIndex={-1}
                            aria-label="Decrease"
                            data-hs-input-number-decrement=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14"></path>
                            </svg>
                          </button>

                          <p className="text-xl px-2">{product.quantity}</p>
                          <button
                            type="button"
                            onClick={(e) => handleAddToCart(e, product)}
                            className="size-6 
                                                inline-flex justify-center items-center gap-x-2 text-sm 
                                                font-medium rounded-md border border-gray-200
                                                 bg-white text-gray-800 shadow-sm
                                                  hover:bg-gray-50 focus:outline-none
                                                   focus:bg-gray-50 disabled:opacity-50 
                                                   disabled:pointer-events-none 
                                                  "
                            tabIndex={-1}
                            aria-label="Increase"
                            data-hs-input-number-increment=""
                          >
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </button>
                        </div>
                        <p>${product.price * product.quantity}</p>
                        <button
                          onClick={(e) => handleRemoveFromCart(e, product)}
                          className="text-2xl text-red-500
                                             hover:text-red-700"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border h-80">
              <h3 className="text-sm font-semibold mb-5">Cart Total</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items</span>
                <span>{cart.products.length}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">Shipping to:</p>
                <span className="text-xs font-bold">{address}</span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-blue-500 hover:underline mt-1 ml-2"
                >
                  Change Address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              address={address}
              setAddress={setAddress}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center mt-8">
          <img src={imgEmptyCart} alt="" className="h-96" />
        </div>
      )}
    </div>
  );
}

export default Cart;
