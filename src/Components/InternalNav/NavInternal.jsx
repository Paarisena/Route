import "./NavInternal.css";
import { Link } from "react-router-dom";

const categories = [
  { name: "All", path: "/" },
  { name: "FullStack Development", path: "/FSD" },
  { name: "Data Science", path: "/DS" },
  { name: "Cyber Security", path: "/CS" },
  { name: "Cloud Computing", path: "/CC" },
];

function NavInternal() {
  return (
    <>
      <article className="nav-container">
        <section className="nav-internal">
          {categories.map((category) => (
            <Link className="nav-links" key={category.name} to={category.path}>
              {category.name}
            </Link>
          ))}
        </section>
      </article>
    </>
  );
}

export default NavInternal;
