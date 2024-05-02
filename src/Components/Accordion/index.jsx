import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }
  
  return (
    <div className="container">
      {data && data.length > 0 ? (
        data.map(dataItem => (
          <div
            className={`accordion-item ${selected === dataItem.id ? "active" : ""}`}
            style={{ backgroundImage: `url(${dataItem.photo})` }}
            key={dataItem.id}
            onClick={() => handleSingleSelection(dataItem.id)}
          >
            <div className="accordion-name">
              <h3>{dataItem.name}</h3>
            </div>
            <div className="accordion-info">
              {dataItem.info}
            </div>
          </div>
        ))
      ) : (
        <div>No Data Found!</div>
      )}
    </div>
  );
}



