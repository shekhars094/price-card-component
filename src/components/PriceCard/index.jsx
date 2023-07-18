import React from "react";
import Button from "../Button";
import styles from "./index.module.css";

const PriceCard = ({ type, price, features, getStartedOnClick }) => {
  return (
    <div className={`${styles["card_container"]}`}>
      <h3>{type}</h3>
      <p>
        <span>${price}</span>
        <span> /month</span>
      </p>
      <ul>
        {features.map((feature, index) => {
          return <li key={index}>{feature}</li>;
        })}
      </ul>
      <Button label={"Get Started"} onClick={getStartedOnClick}></Button>
    </div>
  );
};

export default PriceCard;
