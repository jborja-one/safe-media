import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LandingPage from './components/LandingPage/LandingPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import GroupPage from './components/GroupsPage/GroupPage';
import MediaPage from './components/MediaItems/MediaItems';
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
				<ProtectedRoute path='/groups/:id'>
					<GroupPage />
				</ProtectedRoute>
				<ProtectedRoute path='/albums/:id'>
					<MediaPage />
				</ProtectedRoute>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
