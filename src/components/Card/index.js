import React from "react";

const index = (props) => {
  console.log(props);
  const { name, image, url } = props.data;
  return (
    <>
      <div className="card" style={{ width: 250, height: 250, margin: 5 }}>
        <a href={url} target="_blank" rel="noreferrer">
          <img className="card-img-top" src={image.default} alt="Card" />
          <div className="flex-row center">{name}</div>
        </a>
      </div>
    </>
  );
};

export default index;
