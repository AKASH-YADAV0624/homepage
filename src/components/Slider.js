import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  // Slider configuration
  const settings = {
    dots: true, // Navigation dots
    infinite: true, // Loop slides infinitely
    speed: 500, // Transition speed in ms
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1, // Slides to scroll per swipe
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Interval between auto-play transitions
    arrows: false, // Disable next/prev arrows
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[#1C4670] px-24 py-20 max-lg:py-10 max-md:px-9 max-sm:px-4">
      {/* Section Title */}
      <div>
        <h1 className="text-[32px] font-bold text-[#FFFFFF] text-center">
          What people say about us
        </h1>
      </div>

      {/* Slider Section */}
      <div className="mt-10">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="images/slider.png"
                alt="testimonial"
                className="w-full rounded-lg"
              />
              <p className="mt-4 text-center text-[#1C4670] font-semibold">
                "Excellent service and great results!"
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="images/slider.png"
                alt="testimonial"
                className="w-full rounded-lg"
              />
              <p className="mt-4 text-center text-[#1C4670] font-semibold">
                "Very user-friendly and responsive team."
              </p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="images/slider.png"
                alt="testimonial"
                className="w-full rounded-lg"
              />
              <p className="mt-4 text-center text-[#1C4670] font-semibold">
                "Highly recommend their services!"
              </p>
            </div>
          </div>

          {/* Add more slides if needed */}
          <div className="px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="images/slider.png"
                alt="testimonial"
                className="w-full rounded-lg"
              />
              <p className="mt-4 text-center text-[#1C4670] font-semibold">
                "A truly exceptional experience."
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
