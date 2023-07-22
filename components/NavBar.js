import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryRequest, updateSelectedCategory } from "./redux/e-com/e-com-actions";
export default function NavBar(props) {
  const categories = useSelector((state) => state.categories);
  const loading_category = useSelector((state) => state.loading_category);
  const error_category = useSelector((state) => state.error_category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryRequest());
  }, []);
  function changeCategory(e) {
    dispatch(updateSelectedCategory(e.target.value));
  }

  if (loading_category) {
    return (
      <>
        <h1>Loading Category..... </h1>
      </>
    );
  } else if (error_category) {
    return (
      <>
        <h1>Some Error occured in Loading..... {error_category} </h1>
      </>
    );
  } else {
    return (
      <>
        {/* Navbar Start */}
        <div className="container-fluid bg-dark mb-30">
          <div className="row px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
              <a
                className="btn d-flex align-items-center justify-content-between bg-primary w-100"
                data-toggle="collapse"
                href="#navbar-vertical"
                style={{ height: 65, padding: "0 30px" }}
              >
                <h6 className="text-dark m-0">
                  <i className="fa fa-bars mr-2" />
                  Categories
                </h6>
                <i className="fa fa-angle-down text-dark" />
              </a>
              <div
                className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                id="navbar-vertical"
                style={{ width: "calc(100% - 30px)", zIndex: 999 }}
              >
                <select onChange={changeCategory} className="navbar-nav w-100">
                  {categories.map((e) => (
                    <option>
                      {" "}
                      <a href="" className="nav-item nav-link">
                        {e}
                      </a>
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-9">
              <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                <a href="" className="text-decoration-none d-block d-lg-none">
                  <span className="h1 text-uppercase text-dark bg-light px-2">
                    Multi
                  </span>
                  <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                    Shop
                  </span>
                </a>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarCollapse"
                >
                  <div className="navbar-nav mr-auto py-0">
                    <a href="index.html" className="nav-item nav-link active">
                      Home
                    </a>
                    <a href="shop.html" className="nav-item nav-link">
                      Shop
                    </a>
                    <a href="detail.html" className="nav-item nav-link">
                      Shop Detail
                    </a>
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Pages <i className="fa fa-angle-down mt-1" />
                      </a>
                      <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                        <a href="cart.html" className="dropdown-item">
                          Shopping Cart
                        </a>
                        <a href="checkout.html" className="dropdown-item">
                          Checkout
                        </a>
                      </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">
                      Contact
                    </a>
                  </div>
                 
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* Navbar End */}
      </>
    );
  }
}
