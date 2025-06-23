import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="text-2xl font-semibold">
      <Link to="/" title="TestNova asosiy sahifasi">
        Test<span className="text-primary-500">Nova</span>
      </Link>
    </div>
  );
};

export default Logo;
