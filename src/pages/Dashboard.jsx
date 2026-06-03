import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navbar */}
            <nav className="bg-white shadow-md">

                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                    <h1 className="text-2xl font-bold text-blue-600">
                        Fitness Tracker
                    </h1>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Logout
                    </button>

                </div>

            </nav>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto p-6">

                <h2 className="text-3xl font-bold mb-2">
                    Welcome {user?.firstName}
                </h2>

                <p className="text-gray-600 mb-8">
                    Manage your activities and track your fitness progress.
                </p>

                {/* User Info */}
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">

                    <h3 className="text-xl font-semibold mb-4">
                        User Information
                    </h3>

                    <p>
                        <strong>Name:</strong>{" "}
                        {user?.firstName} {user?.lastName}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {user?.email}
                    </p>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-white p-6 rounded-xl shadow-md">

                        <h3 className="text-xl font-semibold mb-3">
                            Activities
                        </h3>

                        <p className="text-gray-600 mb-4">
                            Create, update and manage your fitness activities.
                        </p>

                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Manage Activities
                        </button>

                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">

                        <h3 className="text-xl font-semibold mb-3">
                            Recommendations
                        </h3>

                        <p className="text-gray-600 mb-4">
                            View personalized workout recommendations.
                        </p>

                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded"
                        >
                            View Recommendations
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;