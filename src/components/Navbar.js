import React from "react";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <input
        type="text"
        placeholder="Search Movie Here..."
        value={props.value}
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
