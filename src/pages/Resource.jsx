import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function Resource() {
  const { id } = useParams();
  return (
    <>
      <div className="text-white ">
        <h1 className="w-full text-3xl font-bold text-center sm:text-center">
          <Link to="/resources"> Resource {id}</Link>
        </h1>
        <p className="ml-10 mr-10 pt-10 font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis
          consequatur porro assumenda illum obcaecati ducimus quam labore.
          Repellat dolores odit labore explicabo ex porro ab laborum sed hic
          voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Alias, error eos. Earum, tenetur nobis? Cupiditate necessitatibus
          culpa dolor modi ullam provident excepturi odit, sapiente ipsum ad
          dolore corrupti eos labore!
        </p>
      </div>
    </>
  );
}
