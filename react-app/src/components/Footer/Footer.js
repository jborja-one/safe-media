import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<div className='logo-container'>
				<img
					className='footer-logo'
					src='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Public/safemedia-logo-removebg.png'
				/>
			</div>
			<div className='footer-active__features'>
				<h3>Active Features</h3>
				<ul>
					<li>Organize by groups and albums</li>
					<li>Preset Categories and Icons</li>
					<li>Privacy and Access Control</li>
				</ul>
			</div>
			<div className='footer-coming__features'>
				<h3>Coming soon...</h3>
				<ul>
					<li>Local Upload</li>
					<li>Email Authorization</li>
					<li>Authorization Options</li>
				</ul>
			</div>
			<div className='contact-us'>
				<h3>Jonathan Borja</h3>
				<ul>
					<li>email</li>
					<li>github</li>
					<li>linked in</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
