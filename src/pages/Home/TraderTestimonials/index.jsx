import React from "react";
import TraderCarousel from "./TraderCarousel";
import TestimonialVideo from "../../../assets/images/home/trader_testimonials/testimonial_video_1.mp4";
import MainHeading from "../../../components/MainHeading";

const TraderTestimonials = () => {
  return (
    <div className="flex justify-center my-12">
      <div className="w-[80%]">
        <MainHeading>
          Traders That Shared Their <br /> Positive Experience
        </MainHeading>

        {/* Video Section */}
        {/* <div className="my-12 rounded-xl overflow-hidden  justify-center flex">
          <video controls className="w-96">
            <source src={TestimonialVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}

        <TraderCarousel />
      </div>
    </div>
  );
};

export default TraderTestimonials;
