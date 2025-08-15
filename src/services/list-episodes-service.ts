import { repoPodcast } from "../repository/podcasts-repository";


export const serviceListEpidodes = async () => {
  const data = await repoPodcast();

  return data
}