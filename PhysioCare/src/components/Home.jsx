import { Link } from "react-router-dom";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          PhysioCare:Your Path to Vibrant Health
        </h1>
        <p>
          In the realm of physiotherapy, skilled practitioners navigate the complexities of muscles and joints,
          using targeted techniques and personalized plans to alleviate discomfort and enhance overall well-being.
          Physiotherapy is your ally in the journey to optimal health.
        </p>
        <p>
          <Link
            to="/forms"
            className="hover:text-hoverColor transition-all cursor-pointer"
          >
            <Button title="Search Form" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
