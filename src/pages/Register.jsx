import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await api.post("/api/auth/register", formData);

            alert("Registration Successful");

            navigate("/");

        } catch (error) {
            console.log(error);

            console.log("Response:",
                error.response?.data);

            console.log("Status:",
                error.response?.status);

            alert("Registration Failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg w-96">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Register
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full border p-2 rounded"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="w-full border p-2 rounded"
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border p-2 rounded"
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full border p-2 rounded"
                        onChange={handleChange}
                    />

                    <button
                        className="w-full bg-green-600 text-white p-2 rounded"
                    >
                        Register
                    </button>

                </form>

                <p className="mt-4 text-center">

                    Already have an account?

                    <Link
                        to="/"
                        className="text-blue-600 ml-1"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Register;