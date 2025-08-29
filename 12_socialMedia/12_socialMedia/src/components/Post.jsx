import React, { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { postListContext } from "../store/postListContext";
function Post({ post }) {
	const { deletePost } = useContext(postListContext);
	return (
		<div className="card" style={{ width: "30rem", margin: "10px" }}>
			<div className="card-body">
				<h5 className="card-title">{post.title}</h5>
				<span
					className="position-absolute top-0 end-0 rounded-circle px-2 py-1"
					style={{ cursor: "pointer" }}
					onClick={() => deletePost(post)}
				>
					<IoCloseOutline size={30} color="red" />
				</span>
				<p className="card-text">{post.body}</p>
				{post.tags?.map((tag) => (
					<span
						key={tag}
						className="badge badge-primary bg-primary m-2 px-4 py-2"
					>
						{tag}
					</span>
				))}

				<div className="alert alert-success mt-4">
					This post has <strong>{post.reactions?.likes}</strong> Reactions
				</div>
				<p className="text-secondary">
					Date created:
					{new Date().toLocaleDateString()} {""} - {""}
					{new Date().toLocaleTimeString()}
				</p>
			</div>
		</div>
	);
}

export default Post;
