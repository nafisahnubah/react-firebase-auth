import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

    const {userLogin, setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const password = form.get("password");
        const email = form.get("email");
        userLogin(email, password)
        .then((userCredential) => {
        // Logged in
            const user = userCredential.user;
            setUser(user);
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, ":", errorMessage);
        });
    }

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl mx-auto md:my-40 my-20">
                <div className="flex justify-center items-center mt-10">
                    <img className="w-20 text-center" src={logo} alt="logo"/>
                    <h1 className="card-title text-center">Login to Green Horizons</h1>
                </div>

                <form onSubmit={handleLogin} className="card-body">
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <label className="label">
                        <p className="label-text-alt">New user? <Link to="/register">Register here.</Link></p>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-accent">Login</button>
                    </div>
                </form>
                <div className="form-control mx-8 mb-10">
                    <button className="btn btn-outline btn-accent">Login using Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;