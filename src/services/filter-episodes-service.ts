import { StatusCode } from './../utils/status-code';
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repoPodcast } from "../repository/podcasts-repository"


export const serviceFilterEpisodes = async (podCastName: string | 
   undefined): Promise<FilterPodcastModel> => {
   
   let responseFormat: FilterPodcastModel = {
      statusCode: 0,
      body: []
   };
   
   const strFilter = podCastName?.split("?p=")[1] || "";
   const data = await repoPodcast(strFilter)  
   
   if (data.length !== 0) {
      responseFormat.statusCode = StatusCode.OK
   } else {
      responseFormat.statusCode = StatusCode.NO_CONTENT
   }

   responseFormat.body = data

   return responseFormat;
}