import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  return (
    <section className=" flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-2xl text-center">

        {/* 404 */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-gray-900">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Sorry, the page you're looking for doesn't exist or may have been
          moved. Please check the URL or return to the homepage.
        </p>

        {/* Button */}
        <div className="my-6 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-white font-semibold shadow-md transition duration-300 hover:bg-red-700 hover:-translate-y-1"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;