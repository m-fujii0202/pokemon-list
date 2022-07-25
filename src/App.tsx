import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { Navber } from "./components/Navber/Navber";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import { PokemonPageType, PokemonNameAndUrlType } from "./types/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonData, setPokemonData] = useState<Array<PokemonPageType>>([]);
  const [nextURL, setNextURL] = useState<string | null>(null);
  const [prevURL, setPrevURL] = useState<string | null>(null);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  // ポケモンデータを取得する
  const fetchPokemonData = async () => {
    //全てのポケモンデータを取得
    let res = await getAllPokemon(initialURL);
    //各ポケモンの詳細なデータ取得
    console.log("res");
    console.log(res);
    loadPokemon(res.results);
    // console.log(res.results);
    setNextURL(res.next);
    setPrevURL(res.previous); //１ページ目はnullになる
    setLoading(false);
    return res;
  };

  //一匹一匹の各詳細なデータを取得
  const loadPokemon = async (pokemonList: PokemonNameAndUrlType[]) => {
    // TODO：_pokemonDataの型をconsoleを見ながら作る
    // 共通化できそうなら共通化する
    let _pokemonData = await Promise.all(
      pokemonList.map(async (pokemon) => {
        // console.log("pokemon");
        // console.log(pokemon);
        let pokemonRecord = await getPokemon(pokemon.url);
        console.log("pokemonRecord");
        console.log(pokemonRecord);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  // console.log(pokemonData);

  const handleNextPage = async () => {
    if (!nextURL) return;
    setLoading(true);
    let data: PokemonPageType = await getAllPokemon(nextURL);
    // console.log(data);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if (!prevURL) return;
    setLoading(true);
    let data: PokemonPageType = await getAllPokemon(prevURL);
    // console.log("data1");
    // console.log(data);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  return (
    <>
      <Navber />
      <div className="App">
        {loading ? (
          <h1>ロード中...</h1>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
