import React, { useState } from "react";
import { nanoid } from "nanoid";

const projectList = [
  {
    id: nanoid(),
    label: "Project 1",
  },
  {
    id: nanoid(),
    label: "Project 2",
  },
  {
    id: nanoid(),
    label: "Project 3",
  },
  {
    id: nanoid(),
    label: "Project 4",
  },
  {
    id: nanoid(),
    label: "Project 5",
  },
];

const MyProjects = () => {
  const [newList, setNewList] = useState(projectList);

  const shuffleList = (e) => {
    e.preventDefault();

    for (let i = projectList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [projectList[i], projectList[j]] = [projectList[j], projectList[i]];
    }
    setNewList(projectList);
    console.log(newList);
  };

  return (
    <section
      className="row d-flex justify-content-around align-items-center pb-5 mb-5 bg-secondary text-light"
      style={{ height: "auto", minHeight: "10vh" }}
    >
      <h1 className="ms-2 my-3 fw-bold">My Projects</h1>

      {newList.map((item) => (
        <div
          key={item.id}
          className="card m-2 bg-info d-flex justify-content-between py-3 shadow"
          style={{ width: "15rem", height: "15rem", backgroundImage: "" }}
        >
          {item.label}
        </div>
      ))}

      <button onClick={(e) => shuffleList(e)}>Change</button>
    </section>
  );
};

export default MyProjects;
