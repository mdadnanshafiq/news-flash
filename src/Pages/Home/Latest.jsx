import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="flex p-4 bg-gray-100 my-6">
      <button className="btn-error btn text-white rounded-none">Latest</button>
      <Marquee className=" font-bold" pauseOnHover speed={100}>
        <p className="mr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ...
        </p>
        <p className="mr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ...
        </p>
        <p className="mr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ...
        </p>
      </Marquee>
    </div>
  );
};

export default Latest;
