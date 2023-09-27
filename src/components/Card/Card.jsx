import Image from "next/image";
import Link from "next/link";
import { BsFillHandThumbsUpFill } from "react-icons/bs";


const Card = ({ result }) => {
    
    console.log(result)
    return (
		<div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-md sm:border sm:border-slate-300 sm:m-2 transition-shadow group'>
			<Link href={`${result.id}`}>
				<Image
					src={`https://image.tmdb.org/t/p/original${
						result?.backdrop_path || result?.poster_path
					}`}
					width={500}
					height={300}
					alt='image poster'
					className='sm:rounded-t-lg group-hover:opacity-40 duration-200 max-w-[100%] h-auto'
					placeholder='blur'
					blurDataURL='/loading.svg'
				></Image>

				<p className='line-clamp-2'>{result?.overview}</p>
				<h1 className='text-xl font-bold truncate mt-2'>
					{result.title || result.name}
				</h1>

				<p className="flex items-center">
					{result?.release_date}
					<BsFillHandThumbsUpFill className="ml-3 mr-1"/>
					{result?.vote_count}
				</p>
			</Link>
		</div>
	);
};

export default Card;