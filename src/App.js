import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [muneItems, setMuneItems] = useState(items);
  const allCategories = ['all', ...new Set(items.map(item=>item.category))];
  const [categories,setCategories] = useState(allCategories)

  console.log(categories)
  const filterItems = (categories) => {
    if (categories.category==='all') {
     return setMuneItems(items)
    }
    
    const newMenuItems = items.filter((item) => {
      return item.category === categories.category;
    });
    return setMuneItems(newMenuItems)
  };
  return (
    <main>
      <section className="menu section">
        <div className={"title"}>
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>

        <Menu items={muneItems} />
      </section>
    </main>
  );
}

export default App;
