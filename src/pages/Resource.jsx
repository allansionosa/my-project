import { useParams } from "react-router-dom";

export function Resource() {
  const { id } = useParams();
  return <h1 className="text-white">Resource{id}</h1>;
}
