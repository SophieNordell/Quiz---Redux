import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className=" flex bg-purple-100 gap-10 p-10 text-purple-700 justify-end  ">
        <div className="justify-start "></div>
        <Link to={"/"}>Home</Link>
        <Link to={"/admin"}>Admin</Link>
      </div>
    </div>
  );
}
