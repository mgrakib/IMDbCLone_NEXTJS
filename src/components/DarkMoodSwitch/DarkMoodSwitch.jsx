/** @format */

"use client";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const DarkMoodSwitch = () => {
	const { systemTheme ,theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false);
	const currentThem = theme === 'system' ? systemTheme : theme;
	useEffect(() => {
		setMounted(true);
	},[])
	return (
		<>
			<div className='flex items-center space-x-5'>
				{mounted && (currentThem === "dark" ? (
					<MdLightMode className="cursor-pointer hover:text-amber-500" onClick={() => setTheme("light")} />
				) : (
					<BsFillMoonFill className="cursor-pointer hover:text-amber-500" onClick={() => setTheme("dark")} />
				))}
			</div>
		</>
	);
};

export default DarkMoodSwitch;
