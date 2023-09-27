import Link from "next/link";

const MenuItem = ({title, address, Icon}) => {
    return (
		<div>
			<Link href={address} className="flex items-center ">
				<Icon className='text-xl sm:hidden'/>
				<p className="hidden sm:inline">{title}</p>
			</Link>
		</div>
	);
};

export default MenuItem;