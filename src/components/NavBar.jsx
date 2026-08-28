import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="flex justify-end gap-4 font-bold py-4 px-8 border-b text-lg">
      <Link to="/">Home</Link>
      <Link to="/owner">Owner</Link>
    </div>
  )
}
export default NavBar