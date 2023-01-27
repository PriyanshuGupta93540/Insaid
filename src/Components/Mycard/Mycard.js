import React from "react";

const Mycard = ({ name, image }) => {
  return (
    <div className="mycard">
      <div className="mycard_img">
        <img src={image} />

        <span>{name}</span>
        <div className="mycard_p">
          <p>
            I'm actually a xxs size, but since xs size was the smallest I
            ordered and gave it a shot. I was absolutely amazed at the quality
            of the fleece and stitching for the price that I paid. The colour is
            more a wine than a maroon and it's absolutely beautiful. Would
            definitely recommend this one. Planning on buying another colour for
            the winter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mycard;
