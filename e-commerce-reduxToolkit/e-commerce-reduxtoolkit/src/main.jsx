import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import myStore from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart.jsx";
import Products from "./components/Products.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Products />,
			},
			{
				path: "shoppingCart",
				element: <ShoppingCart />,
			},
		],
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={myStore}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</StrictMode>
);
