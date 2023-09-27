import Container from "../Container/Container";
import DarkMoodSwitch from "../DarkMoodSwitch/DarkMoodSwitch";
import MenuItem from "../MenuItem/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";

const Header = () => {
    return (
		<div className='py-4'>
			<Container>
				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-4'>
						<MenuItem
							title={"Home"}
							address={"/"}
							Icon={AiFillHome}
						/>
						<MenuItem
							title={"About"}
							address={"/about"}
							Icon={BsInfoCircleFill}
						/>
					</div>

					<div className='flex items-center space-x-5'>
						<div>
							<DarkMoodSwitch />
						</div>
						<div>
							<span className='bg-amber-500 text-xl font-bold py-1 px-2 rounded-lg mr-2'>
								IMDb
							</span>
							<span className='hidden sm:inline'>clone</span>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Header;