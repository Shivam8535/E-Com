import React from "react";

const ProfilePage = () => {
    // You can replace this with real user data from props or context
    const user = {
        name: "John Doe",
        email: "john@example.com",
        bio: "Web Developer | React Enthusiast | Coffee Lover ☕",
        avatar: "https://i.pravatar.cc/150?img=3", // Random avatar
    };

    return (
        <section className="bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-lg rounded-2xl max-w-2xl w-full p-6 md:flex md:space-x-8">
                {/* Profile Image */}
                <div className="flex justify-center md:w-1/3 mb-6 md:mb-0">
                    <img
                        src={user.avatar}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-blue-500"
                    />
                </div>

                {/* Profile Info */}
                <div className="md:w-2/3 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-700">{user.bio}</p>
                    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        Edit Profile
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
