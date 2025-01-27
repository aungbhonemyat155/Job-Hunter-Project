import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Name } from "./pages/auth/register/Name";
import { Role } from "./pages/auth/register/Role";
import { Email } from "./pages/auth/register/Email";
import { Password } from "./pages/auth/register/Password";
import { Testing } from "./pages/Testing";
import { Login } from "./pages/auth/login/Login";
import { Post } from "./pages/Post";
import { JobCategories } from "./pages/JobCategories";
import { JobsByCategory } from "./pages/JobsByCategory";

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
			{
				path: "category",
				element: <JobCategories />,
			},
			{
				path: "category/:categoryName",
				element: <JobsByCategory />,
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
