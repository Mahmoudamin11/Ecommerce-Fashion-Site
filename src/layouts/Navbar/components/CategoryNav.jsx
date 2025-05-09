import { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomSkeleton from "../../../utilities/CustomSkeleton";

const Category = memo(({ showCategory, toggleShowCategory }) => {
  const { allSubcategories, status, error } = useSelector(
    (state) => state.subcategories
  );



  return (
    <div
      className={`bg-[#F8F8F8] z-40 fixed top-0 rounded-b-md border-t-[2px] trans w-full  left-1/2 -translate-x-1/2 p-10 md:w-[80%]  shadow-md ${
        showCategory
          ? "translate-y-[90px] sm:translate-y-[74px]"
          : "-translate-y-[300%]"
      }`}
    >
      <div className={`grid grid-cols-3 `}>
        {status === "succeeded" &&
          allSubcategories &&
          Object.keys(allSubcategories).map((mainCategory) => {
            const category = allSubcategories[mainCategory];
            return (
              <div
                key={category.category}
                className="flex w-1/3 flex-col gap-8"
              >
                <Link
                  onClick={toggleShowCategory}
                  to={`/${category.slug}/all`}
                  className="font-bold text-2xl cursor-pointer trans hover:scale-105"
                >
                  {category.category}
                </Link>
                <ul className="flex flex-col gap-6">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      state={{ categoryId: category._id }}
                      onClick={toggleShowCategory}
                      key={subcategory._id}
                      to={`/${category.slug}/${subcategory._id}`}
                      className="trans text-gray-700 w-full hover:text-black"
                    >
                      {subcategory.name}
                    </Link>
                  ))}
                </ul>
              </div>
            );
          })}
      </div>

      {status === "loading" && (
        <div className="w-full grid grid-cols-3 gap-4">
          {[6, 5, 4].map((subcats, index) => (
            <div key={index} className="flex flex-col gap-6">
              <CustomSkeleton width="100px" height={12} />
              <div className="flex flex-col gap-2">
                {[...Array(subcats)].map((_, i) => (
                  <CustomSkeleton key={i} width="70px" height={9} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {status === "failed" && (
        <div className="flex justify-center items-center h-full w-full">
          {error}
        </div>
      )}
    </div>
  );
});

export default Category;
