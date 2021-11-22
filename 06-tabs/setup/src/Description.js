import React, { useState } from "react";

export default function Description({ item }) {
  const { title, company, dates, duties } = item;
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="data-items">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <small>{dates}</small>
      {showInfo ? duties.map((item) => <li className="li-item">{item}</li>) : <li>{duties[0]}</li>}
      <button className="btn" onClick={() => setShowInfo(!showInfo)}>{showInfo?"Less Info":"More Info"}</button>
    </div>
  );
}
