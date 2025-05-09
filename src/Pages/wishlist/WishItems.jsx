import { useDispatch, useSelector } from "react-redux";
import { removefromwishlist } from "../../Redux Toolkit/slices/WishlistSlice";
import { FaCartPlus, FaHeart } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addToCart } from "../../Redux Toolkit/slices/cartSlice";
import { useState } from "react";
import { showToast } from "../../utilities/showToast";

export default function WishItems() {
  const dispatch = useDispatch();
  const { wishListItems } = useSelector((state) => state.wishListSlice);

  const [products, setProducts] = useState(wishListItems);

  const handelDeletFromWishlist = (item) => {
    const savedItem = item;
    setProducts((prev) => prev.filter((prod) => prod._id !== item._id));

    dispatch(removefromwishlist(item._id))
      .unwrap()
      .catch((error) => {
        setProducts((prev) => [savedItem, ...prev]);
        showToast("Failed to delete from wishlist:", error);
      });
  };


  return (
    <section className="pb-8">
      <div className="w-[90%] m-auto">
        <div className="border-b-2 pb-4 pt-6 flex justify-between items-center">
          <h3 className="text-lg md:text-2xl font-bold text-nowrap">
            My Wishlist
          </h3>
        </div>

        <div className="grid grid-cols-1 max-[770px]:grid-cols-2 max-[460px]:grid-cols-1  md:grid-cols-3 lg:grid-cols-5 my-6 gap-4 min-h-screen">
          {products.map((item) => (
            <div className="bg-white" key={item._id}>
              <div className="relative">
                <div className="absolute top-2 right-2 p-2 w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center">
                  <FaHeart />
                </div>
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full" />
                  <div className="w-full h-full flex justify-center gap-4 items-end absolute bottom-2 opacity-0 hover:opacity-100 transition-all duration-300">
                    <button
                      className="bg-white text-black text-xl rounded py-2 px-3 h-[40px]"
                      onClick={() =>
                        dispatch(addToCart({ id: item._id, quantity: 1 }))
                      }
                    >
                      <FaCartPlus />
                    </button>
                    <button
                      className="bg-white text-xl rounded py-2 h-[40px] px-3"
                      onClick={() => handelDeletFromWishlist(item)}
                    >
                      <RiDeleteBin6Line className="text-2xl text-red-700" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="my-2 font-bold">
                  <h3>{item.name}</h3>
                  <p className="my-2 h-8">
                    <span className="font-bold">Price:</span> ${item.price}
                  </p>
                </div>
                <div className="flex gap-2 justify-start">
                  {item.colors?.length > 0 ? (
                    item.colors.map((color, index) => (
                      <div
                        className="w-8 h-8 rounded-full border-2"
                        style={{ backgroundColor: color }}
                        key={index}
                      ></div>
                    ))
                  ) : (
                    <p className="font-bold">No colors available</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
