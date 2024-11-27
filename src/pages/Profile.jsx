import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
    const {user, name, photo} = useContext(AuthContext);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-teal-50">
            <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-center mb-4 text-teal-700">
                    Welcome, {name}!
                </h1>
                <div className="flex flex-col items-center">
                    <img
                        src={photo}
                        alt="Profile Photo"
                        className="w-36 h-36 rounded-full mb-4 border"
                    />
                    <div className="text-left w-full">
                        <p className="text-teal-700 mb-2">
                            <strong>Name:</strong> {name}
                        </p>
                        <p className="text-teal-700 mb-2">
                            <strong>Email:</strong> {user.email}
                        </p>
                    </div>
                    <button className="btn btn-outline text-teal-700 mt-4">
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;