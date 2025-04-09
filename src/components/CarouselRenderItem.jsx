import React from "react";

const CarouselRenderItem = ({ image, index }) => {
  return (
    <div className="rounded-lg select-none">
      <img
        src={image}
        alt={`Verified payout ${index + 1}`}
        className="w-40 h-28 object-cover select-none rounded-4xl border-neutral-600 border"
        draggable="false"
      />
    </div>
  );
};

export default CarouselRenderItem;
