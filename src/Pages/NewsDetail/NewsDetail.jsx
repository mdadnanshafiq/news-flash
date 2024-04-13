import { FaEye } from "react-icons/fa";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Nav from "../Shared/Nav/Nav";
import RightNav from "../Shared/RightNav/RightNav";
import { useParams, useLoaderData } from "react-router-dom";
import { CiBookmark, CiShare2 } from "react-icons/ci";

const NewsDetail = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const item = news.find((i) => i._id == id);

  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center mx-auto justify-center">
        <div className="col-span-2">
          <div className="card rounded-none bg-base-100 border">
            <div className="bg-gray-200 ">
              <div className="flex justify-between items-center p-4">
                <div className="flex justify-center items-center gap-2">
                  <div className="w-10 rounded-full">
                    <img
                      src={item.author.img}
                      className="rounded-full"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-bold">{item.author.name}</p>
                    <p>{item.author.published_date}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-6 *:text-xl">
                  <CiBookmark />
                  <CiShare2 />
                </div>
              </div>
            </div>
            <div className="p-4">
              <div>
                <h2 className="font-bold text-2xl">{item.title}</h2>
              </div>
              <figure className="px-10 pt-10 w-full">
                <img src={item.image_url} alt="" className="rounded-xl " />
              </figure>
              <div className="card-body items-left text-left">
                <p>{item.details}</p>

                <hr className="w-full"></hr>
                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center gap-2">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <span className="font-bold text-gray-500">
                      {item.rating.number}
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <FaEye />
                    <span>{item.total_view}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto col-span-1">
          <RightNav></RightNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NewsDetail;
