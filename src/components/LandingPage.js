import { useQuery, gql } from '@apollo/client';

const GET_RANDOM_RECIPE = gql`    
    {
        recipe {
            id
            image
        }
    }
`;

function LandingPage() {
    const { loading, error, data } = useQuery(GET_RANDOM_RECIPE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
console.log(data)
    return (
        <div>{data.recipe.image}</div>
    )
    // return data.rates.map(({ currency, rate }) => (
    //     <div key={currency}>
    //         <p>
    //             {currency}: {rate}
    //         </p>
    //     </div>
    // ));
}

export default LandingPage;