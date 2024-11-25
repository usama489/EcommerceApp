import React from "react";

const Track = () => {
  return (
    <section>
      <div className="container  px-5 py-10  lg:py-12 border-2 md:py-12 mx-auto">
        {/* main */}
        <div className="flex justify-evenly mmd:gap-10 pm:gap-2 sm:gap-2 sg:gap-2 flex-wrap ">
          {/* Track 1 */}
          <div className="border-2 border-gray-400  bg-gray-100 hover:shadow-xl hover:shadow-gray-200 h-28 w-72 rounded-md">
            <div className="flex justify-center ">
              <div>
                <img
                  className="w-10"
                  src="../../src/assets/image/shoppingBag.svg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center mx-auto items-center">
              <div>Premium Tshirts</div>
              <div>Our T-shirts are 100% made of cotton.</div>
            </div>
          </div>
          {/* Track 2 */}
          <div className="border-2 border-gray-400  bg-gray-200 h-28 w-72 rounded-md hover:shadow-xl hover:shadow-gray-200 ">
            <div className="flex justify-center">
              <div>
                <img
                  className="w-10"
                  src="../../src/assets/image/shoppingBag.svg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center mx-auto items-center">
              <div>Premium Tshirts</div>
              <div>Our T-shirts are 100% made of cotton.</div>
            </div>
          </div>
          {/* Track 3 */}
          <div className="border-2 border-gray-400  bg-gray-200 h-28 w-72 rounded-md hover:shadow-xl hover:shadow-gray-200 ">
            <div className="flex justify-center">
              <div>
                <img
                  className="w-10"
                  src="../../src/assets/image/shoppingBag.svg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center mx-auto items-center">
              <div>Premium Tshirts</div>
              <div>Our T-shirts are 100% made of cotton.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
