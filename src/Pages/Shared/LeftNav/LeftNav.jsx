import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";

const LeftNav = () => {
  const [category, setCategory] = useState([]);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="font-bold">All Caterogy</h2>
        {category.map((item, idx) => (
          <NavLink className="block p-4" key={idx}>
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        {news.map((item, idx) => (
          <div key={idx} className="card  bg-base-100 ">
            <figure className="px-6 pt-10">
              <img src={item.image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-left text-left">
              <h2 className="card-title">{item.title.slice(0, 30)}...</h2>

              <div className="card-actions text-xs font-bold">
                <p>
                  {category.map(
                    (cat) => cat.id == item.category_id && cat.name
                  )}
                </p>
                <CiCalendar />
                <p>{item["author"]["published_date"]?.slice(0, 10) || "N/A"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
