import React, { useState } from "react";

const techList = [
  {
    id: 1,
    label: "HTML V5",
  },
  {
    id: 2,
    label: "CSS V3",
  },
  {
    id: 3,
    label: "JavaScript",
  },
  {
    id: 4,
    label: "Bootstrap V5",
  },
  {
    id: 5,
    label: "Reach V18",
  },
  {
    id: 6,
    label: "Java",
  },
];

const Technologies = () => {
  return (
    <section
      className="row d-flex justify-content-around align-items-center pb-3 mb-5"
      style={{ height: "auto", minHeight: "50vh" }}
    >
      <h1 className="ms-2 my-3 fw-bold">I'm good at</h1>

      {
        // ITERATE OVER ARRAY
        techList.map((item) => {
          const newLabel = item.label;

          return (
            <div
              className="card m-2 bg-info d-flex justify-content-between py-3 shadow"
              style={{ width: "15rem", height: "15rem", backgroundImage: "" }}
            >
              {item.label}

              <button
                className="btn btn-primary"
                onClick={() => alert(`We're Learning ${item.label}`)}
              >
                Click Me
              </button>
            </div>
          );
        })
      }
    </section>
  );
};

export default Technologies;
