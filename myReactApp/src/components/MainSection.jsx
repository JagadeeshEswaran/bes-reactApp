import React, { useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import Technologies from "./Technologies";
import MyProjects from "./MyProjects";

const myData = {
  personalInfo: {
    name: "",
    qualification: "",
    contactNo: "",
    email: "",
    location: "",
    summary: "",
  },
  technologies: [
    {
      id: 1,
      label: "",
    },
    {
      id: 2,
      label: "",
    },
    {
      id: 3,
      label: "",
    },
    {
      id: 4,
      label: "",
    },
  ],
  projects: [
    {
      id: 1,
      label: "",
      link: "",
    },
  ],
};

const MainSection = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    setUserData(response.data);
  };

  // fetchUserData("prasanth1617");

  return (
    <main className="">
      <Hero userData={userData} />

      <Technologies />

      <MyProjects />
    </main>
  );
};

export default MainSection;
