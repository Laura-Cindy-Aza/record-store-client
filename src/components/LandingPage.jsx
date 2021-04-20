import React from "react";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className='Main'>
        <div className='logo-container container is-fluid is-centered'>
          <figure className='image logo-container is-flex is-justify-content-center'>
            <img
              className='logo-landing'
              src='/images/Vasilis.svg '
              alt='logo'
            />
          </figure>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
