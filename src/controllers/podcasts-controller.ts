import { IncomingMessage, ServerResponse } from "http"
import { serviceListEpidodes } from "../services/list-episodes-service"
import { serviceFilterEpisodes } from "../services/filter-episodes-service";

export const getListEpisodes = async (req:  IncomingMessage , res: ServerResponse) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end( JSON.stringify( await serviceListEpidodes() ) );
}

export const getFilterEpisodes = async (req:  IncomingMessage , res: ServerResponse) => {
  const strFilter = req.url?.split("?p=")[1] || "";
  const content = await serviceFilterEpisodes(strFilter)
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end( JSON.stringify( content ) );
}
