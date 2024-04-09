import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto gap-4">
      <div className="w-80">
        <img src="/image/flash.png" alt="" />
      </div>
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
