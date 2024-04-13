import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.error(error.message));
  };
  const navlinks = (
    <>
      <NavLink to="/" className="text-gray-600 font-bold btn-ghost btn">
        Home
      </NavLink>
      <NavLink to="/about" className="text-gray-600 font-bold btn-ghost btn">
        About
      </NavLink>
      <NavLink to="/career" className="text-gray-600 font-bold btn-ghost btn">
        Career
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl invisible">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>

      <div className="navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="/image/user.png" />
          </div>
        </div>
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-gray-700 text-white px-12 rounded-none"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/signin"
            className="btn bg-gray-700 text-white px-12 rounded-none"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
