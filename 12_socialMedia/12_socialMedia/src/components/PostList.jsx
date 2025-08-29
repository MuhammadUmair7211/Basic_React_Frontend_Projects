import React, { useContext } from "react";
import Post from "./Post";
import { postListContext } from "../store/postListContext";
import Welcome from "./Welcome";
import Loader from "./Loader";

function PostList() {
	const { posts, loader } = useContext(postListContext);

	return (
		<div className="posts">
			{loader && <Loader />}
			{!loader && posts.length === 0 && <Welcome />}
			{!loader &&
				posts.map((post, index) => {
					return <Post key={index} post={post} />;
				})}
		</div>
	);
}

export default PostList;
