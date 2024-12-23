import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Name } from "./pages/Name";
import { Role } from "./pages/Role";
import { Email } from "./pages/Email";
import { Password } from "./pages/Password";
import { Testing } from "./pages/Testing";
import { Login } from "./pages/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
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
				path: "testing",
				element: <Testing />,
			},
			{
				path: "login",
				element: <Login />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
