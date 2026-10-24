import { FaSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="text-red-500 flex flex-col text-center gap-1 font-dm-sans">
        <span className="text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl self-center">
          <FaSadTear />
        </span>
        <span className="text-2xl lg:text-5xl xl:text-5xl">
          404 - Page not found
        </span>
        <span className="text-xl w-70 lg:w-full xl:w-full lg:text-2xl xl:text-3xl">
          Looks like we had a little trouble
        </span>
        <Link to="/">
          <span className="text-xl 2xl:text-2xl">
            Click to back to the home page
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Error404;
