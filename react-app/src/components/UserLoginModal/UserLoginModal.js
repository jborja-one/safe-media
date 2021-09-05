import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { login } from '../../store/session';
import { useHistory } from 'react-router';

const LoginForm = ({ setShowModal }) => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();

	const onLogin = async (e) => {
		e.preventDefault();
		const data = await dispatch(login(email, password));

		console.log('------------------------------------');
		console.log(Array.isArray(data), '***from login');
		console.log('------------------------------------');

		if (Array.isArray(data)) {
			setErrors(data);
		} else {
			setShowModal(false);
			history.push(`/users/${data.id}`);
			return history.go(0);
		}
	};

	const demoLogin = async (e) => {
		e.preventDefault();
		const data = await dispatch(login('demo@aa.io', 'password'));
		if (data) {
			setShowModal(false);
			return history.push(`/users/${data.id}`);
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className='form_container'>
			<form onSubmit={onLogin}>
				<div className='errors-container'>
					{errors.map((error, ind) => (
						<div className='errors' key={ind}>
							{error}
						</div>
					))}
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						name='email'
						type='email'
						placeholder='Email'
						value={email}
						onChange={updateEmail}
						required
					/>
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						name='password'
						type='password'
						placeholder='Password'
						value={password}
						onChange={updatePassword}
						required
					/>
				</div>
				<div className='form-button__container'>
					<button className='user-login-button' type='submit'>
						Login
					</button>
				</div>
				<div className='demo-login-container'>
					<p className='demo-text'>
						To Safe Media Demo,{' '}
						<a className='demo-click-here' onClick={demoLogin}>
							{' '}
							Click Here{' '}
						</a>
					</p>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
