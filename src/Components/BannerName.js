import React from "react";


/*This is the banner section*/
function BannerName({ name, discount, more }) {
  const currency = "₹";
  return (
    <div className="bannerContent">
      <h3>Hello {name},</h3>
      <p>
        Get 20% discount for every <span>{`${currency}${discount}`}</span>{" "}
        purchase.
      </p>
      <a href={more}>Learn More</a>
    </div>
  );
}

export default BannerName;
