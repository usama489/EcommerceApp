
import { Trash } from "lucide-react";
import Layout from "../../components/layout/Layout";

const products = [
  {
    id: 1,
    name: "Nike Air Force 1 07 LV8",
    href: "#",
    price: "₹47,199",
    originalPrice: "₹48,900",
    discount: "5% Off",
    color: "Orange",
    size: "8 UK",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
  },
  {
    id: 2,
    name: "Nike Blazer Low 77 SE",
    href: "#",
    price: "₹1,549",
    originalPrice: "₹2,499",
    discount: "38% off",
    color: "White",
    leadTime: "3-4 weeks",
    size: "8 UK",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png",
  },
  {
    id: 3,
    name: "Nike Air Max 90",
    href: "#",
    price: "₹2219 ",
    originalPrice: "₹999",
    discount: "78% off",
    color: "Black",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png",
  },
];

const CartPage = () => {
  return (
   
    <div className="container border-2  border-red-400 mx-auto px-4 max-w-7xl lg:px-0">
        
       <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl ">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl "> Shopping Cart</h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16 ">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8 "
          >
            <h2 id="cart-heading" className="sr-only ">Items in your shhopping cart</h2>
            <ul role="list" className="divide-y divide-gray-200">
              {products.map((product) => (
                <div key={product.id} className="">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="image flex-shrink-0 ">
                      <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="sm:h-38 sm:w-38 h-24  w-24 rounded-md object-contain object-center"
                
                      />
                     
                     
                    
                    </div>
                    <div className=" item-details-container h-fit ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className=" pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="item-name min-h-fit flex justify-between ">
                            <h3 className="text-sm">
                              <a
                                href={product.href}
                                className="font-semibold text-black"
                              >
                                {product.name}
                              </a>
                            </h3>
                          </div>
                          <div className="item-color-size mt-1 flex text-sm">
                            <p className="text-sm text-gray-500">
                              {product.color}
                            </p>
                            {product.size ? (
                              <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                {product.size}
                              </p>
                            ) : null}
                          </div>
                          <div className="item-price mt-1 flex items-end ">
                            <p className="text-xs font-medium text-gray-500 line-through">
                              {product.originalPrice}
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              &nbsp;&nbsp;{product.price}
                            </p>
                            &nbsp;&nbsp;
                            <p className="text-sm font-medium text-green-500">
                              {product.discount}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="add-button-container mb-2 flex  ">
                    <div className="min-w-24 flex">
                      <button type="button" className="h-7 w-7">-</button>
                      <input
                        type="text"
                        className="mx-1 h-7 w-9 rounded-md border text-center"
                        defaultValue={1}
                      />
                      <button
                        type="button"
                        className="flex h-7 w-7 items-center justify-center"
                      >+</button>
                    </div>
                    <div className="ml-6 flex text-sm">
                      <button
                        type="button"
                        className="flex items-center space-x-1 px-2 py-1 pl-0"
                      >
                        <Trash size={12} className="text-red-500" />
                        <span className="text-xs font-medium text-red-500">
                          Remove
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>

        {/*order Summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0  border-2 border-green-400"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >Price Details</h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price (3 item)</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    ₹ 52,398
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">
                    - ₹ 3,431
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ₹ 48,967
                  </dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                <div className="flex gap-4 mb-6">
                  <button className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl">Buy now</button>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div> 
    </div>
   
  );
};

export default CartPage;

// <div className="container h-[100vh] min-w-full px-20 py-20 overflow-x-hidden  border-2 border-red-400">
//     <div className="border-2 border-green-400">
//         <h1>Shopping Cart</h1>
//         <div>
//             <img src=""/>
//         </div>
//     </div>

//     {/* Order Summary */}
//     <div>

//     </div>

// </div>
