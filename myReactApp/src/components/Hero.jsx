import React from "react";

const Hero = ({ userData }) => {
  return (
    <div
      className="container-fluid bg-secondary d-flex flex-row-reverse justify-content-around align-items-center py-5"
      style={{ height: "40vh" }}
    >
      {/* HERO IMAGE */}
      <div className=" col-3 d-none d-sm-block">
        <img
          className="image"
          src="1473079147382.jpg"
          alt="image"
          width={"250px"}
        />
      </div>

      {/* HERE SECTION USER DETAILS */}
      <div className="content d-flex flex-column justify-content-start col-2 text-light">
        <h2 className=" text-nowrap">{userData?.name || "Prasanth"}</h2>
        <h4>___________________________</h4>
        <h5>B.Sc Computer Science</h5>
        <p>Contact:+91 1234567890</p>
        <p>Email: prasanthpsh@gmail.com</p>
      </div>
    </div>
  );
};

export default Hero;
