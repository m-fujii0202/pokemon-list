// ポケモンページで取得する型
export type PokemonPageType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonNameAndUrlType[];
};

// ポケモンデータの型
export type PokemonNameAndUrlType = {
  name: string;
  url: string;
};

// TODO：_pokemonDataの型を作成する
