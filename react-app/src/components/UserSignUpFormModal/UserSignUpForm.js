import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp, login } from '../../store/session';
import { useHistory } from 'react-router';

const SignUpForm = ({ setShowModal }) => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();
	const history = useHistory();

	const onSignUp = async (e) => {
		e.preventDefault();
		if (password === repeatPassword) {
			const data = await dispatch(
				signUp(email, firstName, lastName, password)
			);
			if (data?.errors) {
				setErrors(data.errors);
			} else if (data) {
				setShowModal(false);
				return history.push(`/users/${data.id}`);
			}
		} else {
			return setErrors(['Passwords do not match']);
		}
	};

	const demoLogin = async (e) => {
		e.preventDefault();
		const user = await dispatch(login('demo@user.com', 'password'));
		if (user) {
			setShowModal(false);
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updateFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const updateLastName = (e) => {
		setLastName(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const updateRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	if (user) {
		return <Redirect to={`/users/${user.id}`} />;
	}

	return (
		<div className='form_container'>
			<form onSubmit={onSignUp}>
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
						placeholder=' Email Address'
						type='text'
						name='email'
						onChange={updateEmail}
						value={email}
						required={true}></input>
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						placeholder=' First Name'
						type='text'
						name='firstName'
						onChange={updateFirstName}
						value={firstName}
						required></input>
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						placeholder=' Last Name'
						type='text'
						name='lastName'
						onChange={updateLastName}
						value={lastName}
						required></input>
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						type='password'
						name='password'
						onChange={updatePassword}
						value={password}
						required={true}
						placeholder=' Password'></input>
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						type='password'
						name='repeat_password'
						onChange={updateRepeatPassword}
						value={repeatPassword}
						required={true}
						placeholder=' Confirm Password'></input>
				</div>
				<div className='form-button__container'>
					<button className='user-signup-button' type='submit'>
						Sign Up
					</button>
				</div>
				<div className='demo-login-container'>
					<p className='demo-text'>
						To Safe Media Demo,{' '}
						<a className='demo-click-here' onClick={demoLogin}>
							Click Here
						</a>
					</p>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
