/** @format */

import Container from "@/components/Container/Container";
import Results from "@/components/Results/Results";

export default async function Home() {
	const res = await fetch(
		`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=21650e569bdc5a2d47d9926e91292787`
	);
	if (!res.ok) {
		throw new Error("failed to fetch");
	}
	const data = await res.json();

	return (
		<div>
			<Container>
				<div>
					<Results results={data.results} />
				</div>
			</Container>
		</div>
	);
}
