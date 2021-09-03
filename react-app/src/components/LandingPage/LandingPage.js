import './LandingPage.css';
import Footer from '../Footer/Footer';

const LandingPage = () => {
	return (
		<>
			<div className='home-container'>
				<div className='header-img'>
					<img
						className='main-img'
						src='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Public/collage-removebg.png'
					/>
				</div>
				<div className='header-container'>
					<img
						className='main-img'
						src='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Public/safemedia-logo-removebg.png'
					/>
					<h1>Re-Take Control of your Privacy</h1>
					<div className='block'>
						<div className='header'>
							<p>No more Shady Privacy Policies</p>
						</div>
					</div>
				</div>
			</div>
			<div className='feature-bar__container'>
				<div className='feature-container'>
					<div className='feature-title'>
						<i className='fas fa-sync '></i>
						<h3 className='feature-bar__title'>Store and Sync</h3>
					</div>
					<div className='feature-content'>
						<p className='feature-text'>
							Keep all your media files secured and truly private,
							up to date, and accessible from any deivce
						</p>
					</div>
				</div>
				<div className='feature-container'>
					<div className='feature-title'>
						<i className='fas fa-user-plus'></i>
						<h3 className='feature-bar__title'>Share</h3>
					</div>
					<div className='feature-content'>
						<p className='feature-text'>
							Truly control who sees your media. Share your files
							with anyone, even if they don't have Safe Media
						</p>
					</div>
				</div>
				<div className='feature-container'>
					<div className='feature-title'>
						<i className='fas fa-user-shield'></i>
						<h3 className='feature-bar__title'>Stay Secure</h3>
					</div>
					<div className='feature-content'>
						<p className='feature-text'>
							Keep your files private, secure with no mysterious
							privacy policies.
						</p>
					</div>
				</div>
				<div className='feature-container' id='feature-container__last'>
					<div className='feature-title'>
						<i className='fas fa-spa'></i>
						<h3 className='feature-bar__title'>Peace of Mind</h3>
					</div>
					<div className='feature-content'>
						<p className='feature-text'>
							Have the tranquility that Safe Media gives you True
							Privacy. Only you control who has access to your
							files. Enjoy!{' '}
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default LandingPage;
