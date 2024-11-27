import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
                <p className="mb-6 text-gray-600">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link to="/" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                    Home
                </Link>
            </div>
        </div>
    );
};

export default Error;