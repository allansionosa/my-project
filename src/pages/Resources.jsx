import { Link } from "react-router-dom";

export default function Resources() {
  return (
    <>
      <div className="text-white flex justify-center">
        <h2 className="w-full text-3xl font-bold text-center sm:text-center">
          This is our Resources
        </h2>
      </div>
      <div className="pt-10 text-white">
        <ul>
          <li className="pb-5 w-full text-2xl flex justify-center hover:text-green-600">
            <Link to="/resource/1"> This is our First Resources </Link>
          </li>
          <li className="pb-5 w-full text-2xl flex justify-center  hover:text-green-600">
            <Link to="/resource/2"> This is our Second Resources </Link>
          </li>
          <li className="pb-5 w-full text-2xl flex justify-center  hover:text-green-600">
            <Link to="/resource/3"> This is our Third Resources </Link>
          </li>
          <li className="pb-5 w-full text-2xl flex justify-center  hover:text-green-600">
            <Link to="/resource/4"> This is our Fourth Resources </Link>
          </li>
          <li className="w-full text-2xl flex justify-center  hover:text-green-600">
            <Link to="/resource/5"> This is our Fifth Resources </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
