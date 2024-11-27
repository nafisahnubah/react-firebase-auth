import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const {createNewUserWithEmail, setUser, setName, setPhoto} = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const photo = form.get("photo")

        if (!/[A-Z]/.test(password)) {
            setError("Password must have at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must have at least one lowercase letter.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        setName(name);
        setPhoto(photo);

        createNewUserWithEmail(email, password)
        .then((userCredential) => {
        // Signed up 
            const user = userCredential.user;
            setUser(user);
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, ":", errorMessage);
        });
        setError("");
    }

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl mx-auto md:my-40 my-20">
                <div className="flex justify-center items-center mt-10">
                    <img className="w-20 text-center" src={logo} alt="logo"/>
                    <h1 className="card-title text-center">Register to Green Horizons</h1>
                </div>

                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photo" type="text" placeholder="photo-url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    {
                        error && <p className="my-3 text-red-500">{error}</p>
                    }
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <label className="label">
                        <p className="label-text-alt">Already have an account? <Link to="/login">Login here.</Link></p>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-accent">Register</button>
                    </div>
                    <div className="form-control mt-4">
                    <button className="btn btn-outline btn-accent">Register using Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;