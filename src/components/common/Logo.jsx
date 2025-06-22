import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h1 className="text-2xl font-semibold">
      <Link to="/" title="TestNova asosiy sahifasi">
        Test<span className="text-primary-500">Nova</span>
      </Link>
    </h1>
  );
};

export default Logo;
