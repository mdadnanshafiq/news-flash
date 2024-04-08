import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Nav from "../Shared/Nav/Nav";
import RightNav from "../Shared/RightNav/RightNav";
import Latest from "./Latest";
import NewsCard from "../../components/NewsCard/NewsCard";

const Home = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <Latest></Latest>
      <Nav></Nav>

      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div>
          <LeftNav></LeftNav>
        </div>
        <div className="col-span-2">
          <h1 className="font-bold text-xl">All News</h1>
          <div className="flex flex-col gap-4">
            {news.map((item, idx) => (
              <NewsCard key={idx} news={item}></NewsCard>
            ))}
          </div>
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
