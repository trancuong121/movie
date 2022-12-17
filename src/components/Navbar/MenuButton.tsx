import { Link } from "react-router-dom";
const items = [
  { label: "HOME", page: "/" },
  { label: "MOVIE", page: "/movies" },
  { label: "TV SHOW", page: "/tvshows" },
  { label: "PRICING", page: "/pricing" },
  { label: "BLOG", page: "/blogs" },
  { label: "CONTACT", page: "/contact" },
];
export default function MenuButton() {
  return (
    <>
      <ul className="flex p-3">
        {items.map((item) => (
          <Link to={item.page} key={item.label}>
            <li className="mr-16">{item.label}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
