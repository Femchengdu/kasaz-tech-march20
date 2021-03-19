import React from "react";
import { GiBed } from "react-icons/gi";
import { BiBath } from "react-icons/bi";
import { BsBoundingBoxCircles } from "react-icons/bs";
const Apartment = ({ room }) => {
  const { bathroom, bedroom, price, sqm, title, picture } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img
          src={"https://picsum.photos/id/621/200/300"}
          alt="sample apartment"
        />
        <div className="price-top">
          <h6>${price}</h6>
          <p>
            {sqm}{" "}
            <em>
              m<sup>2</sup>
            </em>
          </p>
        </div>
        <a className="btn-primary room-link" to="#">
          More
        </a>
      </div>
      <section className="room-info">
        <p>{title}</p>
        <hr />
        <div style={{ marginTop: "10px" }}>
          {sqm}
          <BsBoundingBoxCircles /> | {bathroom} <BiBath /> | {bedroom} <GiBed />
        </div>
      </section>
    </article>
  );
};

export default Apartment;
