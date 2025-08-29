import { createContext, useReducer, useEffect, useState } from "react";
export const postListContext = createContext({
	posts: [],
	loader: false,
	addPosts: () => {},
	deletePost: () => {},
});
const PostListContextProvider = ({ children }) => {
	const postReducer = (state, action) => {
		let newState = state;
		switch (action.type) {
			case "DELETE_POST":
				newState = state.filter((post) => post.id !== action.payload.id);
				break;
			case "ADD_POST":
				newState = [action.payload, ...state];
				break;
			case "ADD_INITIAL_POSTS":
				newState = action.payload.posts;
				break;
			default:
				break;
		}
		return newState;
	};
	const [posts, dispatchPost] = useReducer(postReducer, []);
	const deletePost = (post) => {
		dispatchPost({ type: "DELETE_POST", payload: post });
	};
	const addPosts = (post) => {
		console.log(post);
		dispatchPost({
			type: "ADD_POST",
			payload: post,
		});
	};
	const addInitialPosts = (posts) => {
		dispatchPost({
			type: "ADD_INITIAL_POSTS",
			payload: { posts },
		});
	};

	const [loader, setLoader] = useState(false);
	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		setLoader(true);
		fetch("https://dummyjson.com/posts", { signal }).then((res) =>
			res.json().then((data) => {
				addInitialPosts(data.posts);
				setLoader(false);
			})
		);

		return () => {
			controller.abort();
		};
	}, []);
	return (
		<postListContext.Provider value={{ posts, addPosts, deletePost, loader }}>
			{children}
		</postListContext.Provider>
	);
};
export default PostListContextProvider;
