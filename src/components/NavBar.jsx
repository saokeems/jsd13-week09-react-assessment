import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-end gap-4 font-bold py-4 px-8 border-b text-lg">
      <Link to="/" className="hover:text-blue-500">
        Home
      </Link>
      <Link to="/owner" className="hover:text-blue-500">
        Owner
      </Link>
    </div>
  );
};
export default NavBar;
