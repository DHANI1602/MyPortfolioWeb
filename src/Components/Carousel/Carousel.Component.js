import React from 'react';

const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel slide carousel-margin"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-b6d79.appspot.com/o/Resources%2FContact.png?alt=media&token=d7ae818b-9af9-4536-a2c7-db27d9904501"
            className="d-block carousel-img"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>How can I contact you?</h5>
            <p>
              you can go to the CV section where you will find my personal
              details or send me a message on linkedin.
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-b6d79.appspot.com/o/Resources%2FGit.png?alt=media&token=9f27d390-9569-41f1-80e7-35741a3230c6"
            className="d-block carousel-img"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Can I view or download these projects?</h5>
            <p>
              all projects have a button that will redirect you to a page to
              view or download it if necessary.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-b6d79.appspot.com/o/Resources%2FSample2.png?alt=media&token=97cf9f37-30d6-4f54-976f-c839a03896ed"
            className="d-block carousel-img"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>why this page?</h5>
            <p>
              is created to make it easier for people to see all my projects.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
