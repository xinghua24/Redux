
import './App.css'
import { useGetPokemonByNameQuery } from './services/pokemon'

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (<>Loading</>)
        : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        )

          : null}
    </>
  )
}

export default App
