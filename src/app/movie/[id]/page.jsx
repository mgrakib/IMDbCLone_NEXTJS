import Container from '@/components/Container/Container';
import Image from 'next/image';
import React from 'react';

const page = async ({params}) => {

    const movieId = params?.id
    const res = await fetch(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=21650e569bdc5a2d47d9926e91292787`
	);
    const movie = await res.json();

    return (
		<div className='w-full'>
			<Container>
				<div className='px-4 md:pt-8 flex flex-col md:flex-row items-center content-center space-x-5 '>
					<Image
						src={`https://image.tmdb.org/t/p/original${
							movie?.backdrop_path || movie?.poster_path
						}`}
						width={500}
						height={300}
						alt='image poster'
						className='sm:rounded-t-lg group-hover:opacity-40 duration-200 max-w-[100%] h-auto'
						placeholder='blur'
						blurDataURL='/loading.svg'
					></Image>
					<div>
						<h1 className='text-xl font-bold truncate mt-2'>
							{movie.title || movie.name}
						</h1>

						<p>
							<span>Overview:</span> {movie?.overview}
						</p>
						<p>
							<span>Release Date:</span> {movie?.release_date}
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default page;