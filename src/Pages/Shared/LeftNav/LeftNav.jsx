import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h2 className="font-bold">All Caterogy</h2>
      {category.map((item, idx) => (
        <NavLink className="block p-4" key={idx}>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftNav;
