import React, { useEffect, useState } from "react";

const INput = () => {
  const [category, setcategory] = useState([]);

  const handleCheckBox = (e) => {
    console.log(e.target.value);
    const option = e.target.value;
    const newCategory = [...category];
    if (newCategory.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setcategory(newCategory);
  };
  console.log(category);

  return (
    <>
      <div>
        <input
          type="checkbox"
          onChange={handleCheckBox}
          value="Novel"
          defaultChecked={category.includes("Novel")}
        />
        <label>Novel</label>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={handleCheckBox}
          value="Rahul"
          defaultChecked={category.includes("Rahul")}
        />
        <label>Rahul</label>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={handleCheckBox}
          value="Deep"
          defaultChecked={category.includes("Deep")}
        />
        <label>Deep</label>
      </div>
    </>
  );
};

export default INput;
