import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import Nav from "../Shared/Nav/Nav";
import RightNav from "../Shared/RightNav/RightNav";
import Latest from "./Latest";
import NewsCard from "../../components/NewsCard/NewsCard";
import Footer from "../Shared/Footer/Footer";

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

      <div className="grid grid-cols-1 lg:grid-cols-4 justify-center  gap-4">
        <div>
          <LeftNav></LeftNav>
        </div>
        <div className="lg:col-span-2">
          <h1 className="font-bold text-xl mb-6">All News</h1>
          <div className="flex flex-col gap-4">
            {news.map((item, idx) => (
              <NewsCard key={idx} news={item}></NewsCard>
            ))}
          </div>
        </div>
        <div className="">
          <RightNav className=""></RightNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
