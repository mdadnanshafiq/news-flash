import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card rounded-none bg-base-100 border">
      <div className="bg-gray-200 ">
        <div className="flex justify-between items-center p-4">
          <div className="flex justify-center items-center gap-2">
            <div className="w-10 rounded-full">
              <img src={news.author.img} className="rounded-full" alt="" />
            </div>
            <div>
              <p className="font-bold">{news.author.name}</p>
              <p>{news.author.published_date}</p>
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
          <h2 className="font-bold text-2xl">{news.title}</h2>
        </div>
        <figure className="px-10 pt-10 w-full">
          <img src={news.image_url} alt="" className="rounded-xl " />
        </figure>
        <div className="card-body items-left text-left">
          <p>{news.details.slice(0, 250)}...</p>
          <Link to={`/news/${news._id}`} className="font-bold text-orange-500">
            Read More
          </Link>
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
                {news.rating.number}
              </span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FaEye />
              <span>{news.total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
