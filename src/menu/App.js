import React, { useState } from "react";
import ftg from '../images/th (1).jpg'
import Menu from "./Menu";

import data from "./data";

import Catagories from "./Catagories";

function App() {
  const newCategories = ["all", ...new Set(data.map((item) => item.category))];

  console.log(newCategories);

  const [menuItems, setMenuItems] = useState(data);

  const [catagories, setCatagories] = useState(newCategories);

  function filterItems(category) {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);

    setMenuItems(newItems);
  }

  return (
    <main>
      <div className="container">
        <div className="column">
         <center><h2 style={{color:'red'}}> ULTIMATE SPORTS EMPORIUM</h2></center>
        </div>
      </div>
      <section className="menu section">
        <div className="title">
        <img src={ftg} height={100} />

          <h2>Our Menu</h2>
          <div></div>
        </div>

        <Catagories newCategories={newCategories} filterItems={filterItems} />

        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
