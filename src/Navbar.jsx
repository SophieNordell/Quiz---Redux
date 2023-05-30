import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className=" flex bg-slate-100 gap-2 p-10 ">
        <Link to={"/"}>Home</Link>
        <Link to={"/admin"}>Admin</Link>
      </div>
    </div>
  );
}
