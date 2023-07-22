import React, { useEffect } from "react";
import SingleFeaturedProduct from "./SingleFeaturedProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductRequest } from "./redux/e-com/e-com-actions";

export default function FeaturedProducts() {
  // We are assumed that getting category into props whith veriable category
  const selected_category = useSelector((state) => state.selected_category);
  const products = useSelector((state) => state.products);
  const loading_product = useSelector((state) => state.loading_category);
  const error_product = useSelector((state) => state.error_product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductRequest());
  }, []);
  if (loading_product) {
    return (
      <>
        <h1>Loading Category..... </h1>
      </>
    );
  } else if (error_product) {
    return (
      <>
        <h1>Some Error occured in Loading..... {error_product} </h1>
      </>
    );
  } else {
    return (
      <>
        {/* Products Start */}
        <div className="container-fluid pt-5 pb-3">
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">Featured Products</span>
          </h2>
          <div className="row px-xl-5">
            {products.filter(e=>e.category==selected_category).map((e, index) => (
              <SingleFeaturedProduct                
                key={index}
                product={e}
              />
            ))}
          </div>
        </div>
        {/* Products End */}
      </>
    );
  }
}
