import create from "./http-service";
export interface Platforms {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
}
export interface FetchGamesResponse {
  count: number;
  results: Game[];
}
export default create("/games");
