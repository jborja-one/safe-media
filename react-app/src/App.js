import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LandingPage from './components/LandingPage/LandingPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { authenticate } from './store/session';

function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(authenticate());
			setLoaded(true);
		})();
	}, [dispatch]);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route path='/' exact={true}>
					<LandingPage />
				</Route>
				<ProtectedRoute path='/users/:id' exact={true}>
					<ProfilePage />
				</ProtectedRoute>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
