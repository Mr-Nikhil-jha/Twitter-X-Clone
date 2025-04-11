import React from "react";
import screenShot from "../../assets/screenShot.png";

function AllPost() {
    return (
        <div className=" min-h-screen p-4">
            <div className="w-full mx-auto bg-white rounded-xl shadow-md p-4 flex flex-col gap-4 -ml-5">
                {/* Header: Avatar + Name + Handle + Time */}
                <div className="flex items-center gap-3">
                    <img src="https://ui-avatars.com/api/?name=Nikhil+Jha" alt="avatar" className="w-10 h-10 rounded-full" />
                    <div>
                        <h2 className="font-semibold text-gray-800">Nikhil Jha</h2>
                        <span className="text-sm text-gray-500">@iam_nikhiljha · 2h</span>
                    </div>
                </div>

                {/* Post Text */}
                <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iusto vel asperiores consectetur reiciendis doloremque odio eum a similique debitis!</p>

                {/* Image */}
                <div className="rounded-lg overflow-hidden border border-gray-300">
                    <img src={screenShot} alt="post-img" className="w-full h-auto object-cover" />
                </div>

                {/* Footer Actions (like, retweet, etc. optional) */}
                <div className="flex justify-between text-sm text-gray-500 mt-2 px-2">
                    <span>💬 12</span>
                    <span>🔁 4</span>
                    <span>❤️ 23</span>
                    <span>📤</span>
                </div>
            </div>
        </div>
    );
}

export default AllPost;
