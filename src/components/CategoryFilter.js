import React from "react";

function CategoryFilter({category}) {
  function handleSelection(event){
    event.target.className="selected";

  }
  const displayCategory = category.map((cat)=>{
    return <button onClick={handleSelection} key={cat}>{cat}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategory}
    </div>
  );
}

export default CategoryFilter;
