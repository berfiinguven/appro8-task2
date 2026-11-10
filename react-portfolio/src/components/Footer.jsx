
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link className="logo" to="/">
        AM<span>.</span>
      </Link>

      <p>
        © {new Date().getFullYear()} Alex Morgan.
        All rights reserved.
      </p>

      <Link to="/">Back to top ↑</Link>
    </footer>
  );
}

export default Footer;
