import React from 'react';

function Home(props) {
	return (
		<div>
			<h1>Home Component</h1>
			<div className='cart-wrapper'>
				<div className='img-wrapper item'>
					<img src="https://picsum.photos/200"  />
				</div>

				<div className='text-wrapper item'>
					<span>picture</span>
					<span>pice :$1000</span>
				</div>

				<div className='btn-wrapper item'>
					<button>Add To cart</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
