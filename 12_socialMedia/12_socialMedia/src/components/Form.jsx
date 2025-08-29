import React, { useContext, useRef } from "react";
import { postListContext } from "../store/postListContext";
import { useNavigate } from "react-router-dom";

function Form() {
	const navigate = useNavigate();
	const { addPosts } = useContext(postListContext);
	const UserIdElement = useRef();
	const PostTitleElement = useRef();
	const PostBodyElement = useRef();
	const reactionElement = useRef();
	const hashtagElement = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const userId = UserIdElement.current.value;
		const postTitle = PostTitleElement.current.value;
		const postContent = PostBodyElement.current.value;
		const reaction = reactionElement.current.value;
		const hashtag = hashtagElement.current.value.split(" ");
		const dateCreated =
			new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();

		/*UserIdElement.current.value = "";
		PostTitleElement.current.value = "";
		PostContentElement.current.value = "";
		reactionElement.current.value = "";
		hashtagElement.current.value = "";*/
		fetch("https://dummyjson.com/posts/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: postTitle,
				body: postContent,
				reactions: reaction,
				userId: userId,
				tags: hashtag,
				dateCreated: dateCreated,
			}),
		})
			.then((response) => response.json())
			.then((post) => addPosts(post));
		navigate("/");
	};
	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="userId" className="form-label">
					Enter your User Id
				</label>
				<input
					type="text"
					ref={UserIdElement}
					className="form-control"
					id="userId"
					placeholder="Your User id"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="Post-title" className="form-label">
					Post Title
				</label>
				<input
					type="text"
					ref={PostTitleElement}
					className="form-control"
					id="Post-title"
					placeholder="How is your day?"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="Post-content" className="form-label">
					Post Content
				</label>
				<textarea
					type="text"
					ref={PostBodyElement}
					rows={2}
					className="form-control"
					id="Post-content"
					placeholder="Tell us more about your day..."
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="reaction" className="form-label">
					Reactions
				</label>
				<input
					type="number"
					ref={reactionElement}
					className="form-control"
					id="reaction"
					placeholder="how many reactions do you have?"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="hashtags" className="form-label">
					Enter Hashtags
				</label>
				<textarea
					type="text"
					rows={2}
					ref={hashtagElement}
					className="form-control"
					id="hashtags"
					placeholder="hashtags with spaces"
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Post
			</button>
		</form>
	);
}

export default Form;
