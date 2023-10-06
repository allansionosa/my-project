import { Link } from "react-router-dom";

export default function Resources() {
  return (
    <div className="text-white flex justify-center">
      <h2>This is our </h2>
      <Link to="/resource/1">First Resources </Link>
      <Link to="/resource/2">Second Resources </Link>
    </div>
  );
}
