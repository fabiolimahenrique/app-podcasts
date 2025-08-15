import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller"

const server = http.createServer( async (req:  http.IncomingMessage , res: http.ServerResponse) => {
   
   const [baseUrl, queryString] = req.url?.split("?") || ["", ""] ;
   
   if (req.method === "GET" && req.url === "/api/list") {
      await getListEpisodes(req, res);
   } 

   if (req.method === "GET" && baseUrl === "/api/episode") {
      await getFilterEpisodes(req, res);
   }    

})

const PORTA = process.env.PORT;

server.listen(PORTA, () => {
  console.log(`Servidor iniciado na porta: ${PORTA} `)
});