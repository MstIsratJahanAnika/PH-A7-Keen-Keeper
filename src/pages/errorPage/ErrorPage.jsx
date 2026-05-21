
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full">
                <h1 className="text-7xl font-bold text-[#244D3F]">404</h1>

                <h2 className="text-3xl font-semibold mt-4 text-gray-800">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mt-3">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>

                <div className="mt-8">
                    <a href="/" className="bg-[#244D3F] hover:bg-[#1F2937] text-white px-6 py-3 rounded-xl transition duration-300">
                        Go Back Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;