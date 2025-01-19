import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Name } from "./pages/Name";
import { Role } from "./pages/Role";
import { Email } from "./pages/Email";
import { Password } from "./pages/Password";
import { Testing } from "./pages/Testing";
import { Login } from "./pages/Login";
import { Post } from "./pages/Post";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />, // Home component for the "/" path
			},
			{
				path: "register/name",
				element: <Name />,
			},
			{
				path: "register/role",
				element: <Role />,
			},
			{
				path: "register/email",
				element: <Email />,
			},
			{
				path: "register/password",
				element: <Password />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "post/:id",
				element: <Post />,
			},
		],
	},
	{
		path: "/testing",
		element: <Testing></Testing>,
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
