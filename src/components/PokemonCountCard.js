import { useEffect, useState } from "react"

const PokemonCountCard = () => {
    const [pokemonCount, setPokemonCount] = useState(0);

    useEffect(() => {
        alert('PokemonCountCard: ComponentDidMount/ComponentDidUpdate')
        fetch('https://pokeapi.co/api/v2/pokemon/').then((response) => response.json()).then(data => {
            if (data.count) {
                setPokemonCount(data.count)
            }
        })

        return () => {
            alert('ComponentWillUnmount')
        }
    }, []);

    // useEffect(() => {
    //     alert('Order of useEffect matters: ComponentDidMount/ComponentDidUpdate')

    //     return () => {
    //         alert('Order of useEffect matters: ComponentWillUnmount')
    //     }
    // })

    return (
        <div style={{ width: '100px' }}>
            Count: {pokemonCount}
        </div>
    )
}

export default PokemonCountCard