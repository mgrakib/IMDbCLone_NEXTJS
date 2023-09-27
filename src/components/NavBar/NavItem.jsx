'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MdSavedSearch } from "react-icons/md";

const NavItem = ({ title, param }) => {
    const searchParams = useSearchParams()

    const genre = searchParams.get("genre")

    
    return (
		<div>
			<Link className={`${genre === param && 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'}`} href={`/?genre=${param}`}>
				<h1>{title}</h1>
			</Link>
		</div>
	);
};

export default NavItem;