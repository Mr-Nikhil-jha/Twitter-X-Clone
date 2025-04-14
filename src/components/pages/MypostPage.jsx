import React from "react";
import MyPost from "../MyPost/MyPost";

function MypostPage() {
    return (
        <>
            <h1 className="text-white md:text-6xl text-4xl text-center font-serif p-4 ">My post</h1>
            <MyPost />
            <MyPost />
        </>
    );
}

export default MypostPage;
