import React from 'react';
import { NavLink } from "react-router-dom";


function Common(proops) {
  return (
    <>
      <section id="header" className="d-flex align-items-center gap-5">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 d-flex justify-content-center flex-column">
                  <h1>
                   {proops.name} <strong className="brand-name">AMAN MANGAL</strong>
                  </h1>
                  <h2 className="my-4">
                    We are a team of talented developers making websites.
                  </h2>
                  <div className="mt-4">
                    <NavLink to={proops.visit} className="btn btn-outline-primary">
                    {proops.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img mt-5">
                  <img src={proops.imgsrc} className="img-fluid animated" alt="Online shopping illustration" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
