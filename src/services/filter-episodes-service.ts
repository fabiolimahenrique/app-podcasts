import { repoPodcast } from "../repository/podcasts-repository"


export const serviceFilterEpisodes = async (podCastName: string) => {
   const data = await repoPodcast(podCastName)   
   return data;
}