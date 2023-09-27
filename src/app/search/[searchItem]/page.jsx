import Container from "@/components/Container/Container";
import Results from "@/components/Results/Results";

const page = async ({ params }) => {
    const searchItem = params.searchItem;
    const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=21650e569bdc5a2d47d9926e91292787&query=${searchItem}`
	);
    if (!res.ok) {
        throw new Error('Error featching data')        
    }

    const data = await res.json();

    console.log(data, ' this is search res');

    return (
		<div>
			<Container>
				{data && data.length === 0 && (
					<h1 className='text-center text-6xl'>No Result Found</h1>
				)}
				{data && <Results results={data.results} />}
			</Container>
		</div>
	);
};

export default page;