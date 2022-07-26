import { type } from "os";

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
export type DetailedPokemonType = {
  url:string;
  abilities:Ability[];
  base_experience: number;
  forms:PokemonNameAndUrlType[];
  game_indices:Game_indices[];
  height: number;
  held_items:[];
  id:number;
  is_default: boolean;
  location_area_encounters:string;
  moves:Moves[];
  name: string;
  order: number;
  past_types:[];
  species:PokemonNameAndUrlType;
  sprites:Sprites;
  stats:Stats[];
  types:Types[];
  weight:number;
}

type Ability = {
  ability:PokemonNameAndUrlType;
  is_hidden: boolean;
  slot: number;
}

type Game_indices = {
  game_index:number;
  version:PokemonNameAndUrlType[];
}

type Moves = {
  move:PokemonNameAndUrlType;
  version_group_details:Version_group_details[];

}

type Version_group_details = {
  level_learned_at: number;
  move_learn_method:PokemonNameAndUrlType;
  version_group:PokemonNameAndUrlType;
}

type Sprites = {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female:string | null;
  front_default: string;
  front_female:string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other:{
    dream_world:PokemonAppearance;
    home:PokemonAppearance;
    officialArtwork:PokemonAppearance;
  }
  versions:Versions;
}


type Versions = {
  generationI:GenerationI;
  generationIi:GenerationIi;
  generationIii:GenerationIii;
  generationIv:GenerationIv;
  generationV:GenerationV;
  generationVi:GenerationVi;
  generationVii:GenerationVii;
  generationViii:GenerationViii;
}

type GenerationI = {
  redBlue:PokemonAppearance;
  yellow:PokemonAppearance;
   }
  
   type GenerationIi = {
    crystal:PokemonAppearance;
    gold:PokemonAppearance;
    silver:PokemonAppearance;
   }

   type GenerationIii = {
    emerald:PokemonAppearance;
    fireredLeafgreen:PokemonAppearance;
    rubySapphire:PokemonAppearance;
   }

   type GenerationIv = {
    diamondPearl:PokemonAppearance;
    heartgoldSoulsilver:PokemonAppearance;
    platinum: PokemonAppearance;
    
   }

   type GenerationV = {
   blackWhite:{
    animated:PokemonAppearance;
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string |null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
   }
   }

   type GenerationVi = {
    omegarubyAlphasapphire:PokemonAppearance;
    xY:PokemonAppearance;
   }

   type GenerationVii ={
    icons:PokemonAppearance;
    ultraSunUltraMoon:PokemonAppearance;
   }

   type GenerationViii = {
    icons:PokemonAppearance;
   }

   type PokemonAppearance = {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
   }

   type Stats = {
    base_stat: number;
    effort: number;
    stat:PokemonNameAndUrlType;
   }

   type Types = {
    slot: number;
    type:PokemonNameAndUrlType;
   }