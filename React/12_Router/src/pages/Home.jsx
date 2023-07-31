import { Link } from "../components/Link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome!</p>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/search/JavaScript"}>Buscar JavaScript</Link>
    </>
  );
}
