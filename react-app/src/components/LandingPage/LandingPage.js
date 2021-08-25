import './LandingPage.css';

const LandingPage = () => {
	return (
		<>
			<div className='home-container'>
				<div className='header-img'>
					<img src='https://safemedia-capstone.s3.us-east-2.amazonaws.com/Public/collage-removebg.png' />
				</div>
				<div className='header-container'>
					<h1>Take Control of your Privacy</h1>
					<div className='block'>
						<div className='header-container1'>
							<h1>No more Shady</h1>
						</div>
						<div className='header-container1'>
							<h1>Privacy Policies</h1>
						</div>
					</div>
				</div>
			</div>
			<div className='feature-bar'></div>
		</>
	);
};

export default LandingPage;
