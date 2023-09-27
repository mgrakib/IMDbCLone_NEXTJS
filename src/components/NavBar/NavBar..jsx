import React from 'react';
import NavItem from './NavItem';
import Container from '../Container/Container';

const NavBar = () => {
    return (
		<div className='bg-amber-100 dark:bg-gray-600 py-3'>
			<Container>
				<div className='flex items-center space-x-5 justify-center'>
					<NavItem
						title={"Trending"}
						param={"faceTrending"}
					/>
					<NavItem
						title={"Top Reted"}
						param={"faceTopReted"}
					/>
				</div>
			</Container>
		</div>
	);
};

export default NavBar;