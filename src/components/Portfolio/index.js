import React from "react";
import Card from "../Card";
import { portfolio } from "../../data";

const Portfolio = () => {
  return (
    <>
      <section>
        <h3 className="flex-row center my-3">Recent Projects</h3>
        <div className="flex-row center">
          {portfolio.map((item) => {
            return <Card data={item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
