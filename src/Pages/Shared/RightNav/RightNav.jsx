import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const RightNav = () => {
  return (
    <div className="*:mb-4">
      <div className="p-4 flex justify-center flex-col items-start gap-2">
        <h2 className="font-bold text-xl ">Login With</h2>
        <button className="btn w-full btn-outline text-red-500">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline w-full text-blue-500">
          <FaFacebook />
          Login With Facebook
        </button>
      </div>
      <div className="p-4 flex justify-center flex-col items-start">
        <h2 className="font-bold text-xl ">Find Us On</h2>
        <div className="flex justify-start items-center gap-2 p-4 w-full border rounded-t-md">
          <FaFacebookF className="text-blue-500 rounded-full  text-xl " />
          Facebook
        </div>
        <div className="flex justify-start items-center gap-2 p-4 w-full border">
          <FaTwitter className="text-blue-400 rounded-full  text-xl" />
          Twitter
        </div>
        <div className="flex justify-start items-center gap-2 p-4 w-full border rounded-b-md">
          <CiInstagram className="text-pink-400 rounded-full  text-xl" />
          Instagram
        </div>
      </div>

      <div className="p-4 flex justify-center flex-col gap-2 border bg-gray-200 mx-auto">
        <h2 className="font-bold text-xl text-left">Q-Zone</h2>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src="/image/qZone1.png" alt="" />
          <img src="/image/qZone2.png" alt="" />
          <img src="/image/qZone3.png" alt="" />
        </div>
      </div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: "url(/image/bg.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="text-white">
            <h1 className="mb-5 text-5xl font-bold">
              Create an Amazing Newspaper
            </h1>
            <p className="mb-5">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <button className="btn text-white bg-pink-400 rounded-none border-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
