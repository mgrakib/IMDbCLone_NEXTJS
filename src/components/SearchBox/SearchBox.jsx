'use client'
import React, { useState } from 'react';
import Container from '../Container/Container';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
	const [search, setSearch] = useState('')
	const router = useRouter()

	const handelSubmit = (e) => {
		e.preventDefault();
		if (!search) return
		
		router.push(`/search/${search}`)
	}
	
    return (
		<div className='py-2'>
			<Container>
				<form
					onSubmit={handelSubmit}
					className='flex justify-between items-center'
				>
					<input
						value={search}
						onChange={e => setSearch(e.target.value)}
						type='text'
						placeholder='Search Keywords'
						className='w-full h-14 rounded-md outline-none placeholder-gray-500 bg-transparent flex-1 pr-5'
					/>

					<button
						disabled={!search}
						type='submit'
						className='text-amber-500 disabled:text-gray-400'
					>
						Search
					</button>
				</form>
			</Container>
		</div>
	);
};

export default SearchBox;