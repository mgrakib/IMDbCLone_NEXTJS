import Card from "../Card/Card";

const Results = ({results}) => {
    return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
			{results.map((result, index) => 
            {
                const { original_title } = result;
                return <Card key={index} result={result}/>}
			)}
		</div>
	);
};

export default Results;