import { FilterPodcastModel } from './../models/filter-podcast-model';
import { StatusCode } from './../utils/status-code';
import { IncomingMessage, ServerResponse } from "http"
import { serviceListEpidodes } from "../services/list-episodes-service"
import { serviceFilterEpisodes } from "../services/filter-episodes-service";

export const getListEpisodes = async (req:  IncomingMessage , res: ServerResponse) => {
  res.writeHead(StatusCode.OK, {
    "Content-Type": "application/json"
  });
  res.end( JSON.stringify( await serviceListEpidodes() ) );
}

export const getFilterEpisodes = async (req:  IncomingMessage , res: ServerResponse) => {
  const content: FilterPodcastModel  = await serviceFilterEpisodes(req.url)
  res.writeHead(content.statusCode, {
    "Content-Type": "application/json"
  });
  res.end( JSON.stringify( content.body ) );
}
