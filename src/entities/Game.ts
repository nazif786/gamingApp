import { Genre } from "./Genre";
import { Platforms } from "./Platforms";
import { Publishers } from "./Publishers";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  metacritic: number;
  rating_top: number;
  original_name: string;
  description_raw: string;
  released: string;
  publishers: Publishers[];
  parent_platforms: { platform: Platforms }[];
  genres: Genre[];
}
