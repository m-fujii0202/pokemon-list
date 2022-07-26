import { DetailedPokemonType, PokemonPageType } from "../types/pokemon";

export const getAllPokemon = (url: string) => {
  return new Promise<PokemonPageType>((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

// TODO：PromiseにgetPokemonの値を入れる
// （getAllPokemonを参考にしてください）
export const getPokemon = (url: string) => {
  return new Promise<DetailedPokemonType>((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("data")
        // console.log(data)
        resolve(data);
      });
  });
};
