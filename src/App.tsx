import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Projects from './components/Projects/Projects';
import HomePage from './components/HomePage/HomePage';
import Tools from './components/Tools/Tools';
import RootLayout from './components/RootLayout/RootLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<RootLayout />} path='/'>
			<Route index element={<HomePage />} />
			<Route element={<Projects />} path='/projects' />
			<Route element={<Tools />} path='/tools' />
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
