import PropTypes from "prop-types";
import { Link } from "../components/Link";

export default function Search({ routeParams }) {
  const { query } = routeParams;

  return (
    <>
      <h1>Buscador: {query}</h1>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/about"}>About</Link>
    </>
  );
}

Search.propTypes = {
  routeParams: PropTypes.object,
};
