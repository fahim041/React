import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <p>About page</p>
      <Link to="/">
        <p>Homepage</p>
      </Link>
    </div>
  );
}

export default AboutPage;
