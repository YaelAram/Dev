import { Link } from "../components/Link";

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <p>Clon de React Router</p>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/search/JavaScript"}>Buscar JavaScript</Link>
    </>
  );
}
